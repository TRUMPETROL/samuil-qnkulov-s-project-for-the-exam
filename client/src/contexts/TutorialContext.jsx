import { createContext, useState, useEffect } from "react";

//!!!!!!!Currently Unused as its not needed!!!!!!!!


//reminder for the furure
// createContext is a way to share data across the component tree without passing props manually at every level.
const TutorialContext = createContext();

//reminder for the furure
//evrything wraped inside tutorial provider will be able to have the tutorial data available 
export function TutorialProvider({ children }) {
    const [tutorials, setTutorials] = useState([]);

   
    useEffect(() => {
        const stored = localStorage.getItem("tutorials");
        if (stored) {
            setTutorials(JSON.parse(stored));
        }
    }, []);

   
    useEffect(() => {
        //reminder for the furure
        //localStorage is a !!!browser!!!(as in i dont need to download or import anything for it to work) feature that stores data on the device instead of on a server
        localStorage.setItem("tutorials", JSON.stringify(tutorials));
    }, [tutorials]);

   


    const addTutorial = (tutorial) => {
        setTutorials(prev => [...prev, tutorial]);
    };

    return (
        <TutorialContext.Provider value={{ tutorials, addTutorial }}>
            {children}
        </TutorialContext.Provider>
    );
}

export default TutorialContext;