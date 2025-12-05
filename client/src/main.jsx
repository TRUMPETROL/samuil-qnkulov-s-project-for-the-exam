import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from '/src/contexts/UserContext';
import { TutorialProvider } from '/src/contexts/TutorialContext';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserProvider>
            <TutorialProvider>
                <App />
            </TutorialProvider>
        </UserProvider>
    </BrowserRouter>
);


