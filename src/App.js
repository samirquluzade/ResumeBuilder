import {Route,Routes} from 'react-router-dom';
import CV from './components/CV';
import {useState} from "react";
import Router from "./router";


function App() {
    const [contact,setContact] = useState(false);
  return (
    <Router />
  );
}

export default App;
