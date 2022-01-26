import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert= (message,msgtype)=>{
    setAlert({
      msg:message,
      type:msgtype
    })

    setTimeout(()=>{
      setAlert(null)
    },1200 )
  }

  const toggleMode= ()=>{
    if(mode==='light')
    {setMode('dark');
     document.body.style.backgroundColor='#042743';
     showAlert("Dark mode has been enabled","success")
  }
     

     else {setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled","success")
  }
  }

  return (
    <>
    <Router>
<Navbar title="TextUtils" mode={mode} toggle={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
    <Route exact path="/about">
      <About mode={mode}/>
    </Route>

    <Route exact path="/">
    <TextForm heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' mode={mode} showalert={showAlert}/>
    </Route>
  
  </Switch>
  </div> 
  </Router>




</>
  );

}

export default App;
