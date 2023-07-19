import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Button from './Components/button';
import DataScreen from './Components/DataScreen';

function App() {
const [value,setValue]=useState(10);
const handleIncrease=()=>{
  setValue(value+1);
};
const handleDecrease=()=>{
  setValue(value-1);
}
  return (
    <div>
      
      <Header variant = {'large'} title={'Counter Application'}/>
      <hr></hr>
      <DataScreen title={value} />
      <Button onClickHandler={handleDecrease} title={"-"}></Button>
      <Button onClickHandler={handleIncrease} title={"+"}></Button>
    </div>
     
  )
}

export default App
