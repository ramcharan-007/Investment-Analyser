import Header from "./Components/Header"
import ResultLog from "./Components/ResultLog"
import UserInput from "./Components/UserInput"
import { useState } from 'react'


function App() {
  const [inputData, setInputData] = useState({
    initialInvestment : 15000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 10
})

  const inValid = inputData.duration >= 1 && inputData.duration <= 50;
  const isReturnValid = inputData.expectedReturn <=25 ;
  const isInitialInvestmentValid = inputData.initialInvestment > 0;

  function handlerchange(fieldName, newinput){
      setInputData( prevData => ({ ...prevData, [fieldName]: +newinput}) )
  }


  return (
    <>
      <Header />
      <UserInput inputData={inputData} handlerchange={handlerchange}/>
      {inValid && isInitialInvestmentValid && isReturnValid ? <ResultLog inputData={inputData} /> : <p className="center">Please Enter a year greater than 0 and less than 50</p>}
    </>
  )
}

export default App
