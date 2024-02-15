import React from 'react'

function UserInput({inputData, handlerchange}) {


  return (
    <section id='user-input'>
        <div className='input-group'>
            <p>
            <label>Initial Investment</label>
            <input type='number' value={inputData.initialInvestment} onChange={(e) => handlerchange('initialInvestment', e.target.value)}/>
            </p>
            <p>
            <label>Annual Investment</label>
            <input type='number' value={inputData.annualInvestment} onChange={(e) => handlerchange('annualInvestment', e.target.value)}/>
            </p>
        </div>
        <div className='input-group'>
            <p>
            <label>Expected Return</label>
            <input type='number' value={inputData.expectedReturn} onChange={(e) => handlerchange('expectedReturn', e.target.value)}/>
            </p>
            <p>
            <label>Duration</label>
            <input type='number' value={inputData.duration} onChange={(e) => handlerchange('duration', e.target.value)}/>
            </p>
        </div>
    </section>
  )
}

export default UserInput