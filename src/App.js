import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Service from './routes/Service';
import './styless.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Navbar />
        </div>
    );
}

export default App;
