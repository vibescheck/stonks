import './App.css';
import Login from './Login';
import Register from './Register';
import Err404 from './Err404';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
    return (
        <>
        <div className='App'> 
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
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
        </>
    )
}

export default App;
