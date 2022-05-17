import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { information } from './Context';
import { useState } from 'react';

const App = () => {
  const [allData, setAllData] = useState([])
  const [data, setData] = useState({
    name: "",
    FirstName: "",
    LastName: "",
    isAble: false,
    onImageChange: "",
    isConform: false,
    gender: "",
    capatin: "",
    // male: false,
    // female: false


  })
  const saveData = () => {
    return
    {/* <h1>gcb</h1> */ }
    // setData({
    //   name: "",
    //   FirstName: "",
    //   LastName: "",
    //   isAble: false,
    //   onImageChange: ""
    // })
  }
  return (

    <information.Provider value={{ allData, setAllData, data, setData, saveData }}>

      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />

          </Route>
        </Routes>
      </Router >
    </information.Provider>

  );
}

export default App;