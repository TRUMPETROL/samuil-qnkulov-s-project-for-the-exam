import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from '/src/contexts/UserContext';

//Tutorial Context is finaly removed as it was no longer needed

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserProvider>
                <App />
        </UserProvider>
    </BrowserRouter>
);


