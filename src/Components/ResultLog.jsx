import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment';

function ResultLog({inputData}) {
  const result = calculateInvestmentResults(inputData);
  const initialinvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment

  return (
      <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((data) => {
          const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialinvestment
          const investedCapital = data.valueEndOfYear - totalInterest
          return(
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>
          )
        })}
      </tbody>
      </table>
  )
}

export default ResultLog