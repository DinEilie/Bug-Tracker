// Import React files
import ReactDOM from 'react-dom/client';

// Import components
import Navbar from './Navbar';
import Workbar from './Workbar';
import Tickets from './Tickets';
import './index.css';


// Arguments
var root = document.getElementById("root");

// Main application
ReactDOM.createRoot(root!).render(
    <div className="bg-slate-800 h-[100vh] overflow-hidden">
        <Navbar />
        <div className="flex h-full">
            <Workbar />
            <div className="w-full bg-white">
                <Tickets />
            </div>
        </div>
    </div>
);