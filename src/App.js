import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Err404 from './components/Err404';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

function App() {
    return (
        <div className='App'> 
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="*" element={<Err404 />} />
                    <Route 
                        path="/dashboard" 
                        element={<Dashboard />}
                    />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
