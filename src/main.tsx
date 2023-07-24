// Import React files
import ReactDOM from 'react-dom/client';

// Import components
import Navbar from './Navbar';
import Workbar from './Workbar';
import Footer from './Footer';
import './index.css';
import './style.css'
import BugsTab from './BugsTab';


// Arguments
var root = document.getElementById("root");

// Main application
ReactDOM.createRoot(root!).render(
    <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
            <Workbar />
            <BugsTab />
        </div>
        <Footer />
    </div>
);