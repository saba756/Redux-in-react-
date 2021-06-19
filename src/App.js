import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {incNumber} from "./actions";
import {decNumber} from "./actions";
import './App.css';

function App() {
  const changeTheNumber = useSelector(state => state.changeTheNumber); //intial state mily gi
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
    
        <div class="quantity">
        <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      </div>
  
          </div>
        </div>
        

      

    </>
  )
}



export default App;
