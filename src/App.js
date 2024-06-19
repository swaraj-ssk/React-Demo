import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';

function App() {
  //whether dark mode is enabled or not
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }else{
      setMode('dark')
      document.body.style.backgroundColor="#0d1033f2";
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar text="TextUtils" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert} />
      <div >
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
