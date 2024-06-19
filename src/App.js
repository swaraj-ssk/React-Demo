import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';

function App() {
  //whether dark mode is enabled or not
  const [mode, setMode]= useState('light');
  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";
    }else{
      setMode('dark')
      document.body.style.backgroundColor="#0d1033f2";
    }
  }
  return (
    <>
      <Navbar text="TextUtils" mode={mode} toggleMode={toggleMode}/> 
      <div >
        <TextForm heading="Enter text to analyze" mode={mode} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
