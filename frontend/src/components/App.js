import '../index.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from  './Contact.js'
import Commissions from  './Commissions.js'
import Home from './Home.js'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/commissions" element={<Commissions />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
