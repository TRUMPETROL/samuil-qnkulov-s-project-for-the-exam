import { useContext, useEffect, useState } from "react";
import UserContext from "/src/contexts/UserContext";

const baseUrl = 'http://localhost:3030';

export default function useRequest(url, initialState) {
    const { user, isAuthenticated } = useContext(UserContext);
    const [data, setData] = useState(initialState);

    // TODO Fix infinite loop problem on mount request with useEffect
    const request = async (url, method, data, config = {}) => {
        let options = {};

        if (method) {
            options.method = method;
        }

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };
            options.body = JSON.stringify(data);
        }

        if (config.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                'X-Authorization': config.accessToken || user.accessToken,
            }
        }

        const response = await fetch(`${baseUrl}${url}`, options);

        let result;
        try {
            result = await response.json();
        } catch (err) {
            result = null; 
        }

        if (!response.ok) {
           
            throw new Error(result?.message || response.statusText || 'Request failed');
        }

        if (response.status === 204) {
            return {};
        }

        return result;
    };

    useEffect(() => {
        if (!url) return;

        request(url)
            .then(result => setData(result))
            .catch(err => alert(err.message)); 
    }, [url]);

    return {
        request,
        data,
        setData,
    }
}