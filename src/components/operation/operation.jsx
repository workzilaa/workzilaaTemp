import React from 'react'
import './operation.css'

const Operation = () => {
  return (
    <div>
      <div className="container OperationContainer">
        <div className="operateHead">
          <h1 className='mainHead'>How do we Operate</h1>
          <p className='mainPara'>Simplified operation with online onetap booking and apointing a worker and getting your work done.</p>
        </div>
        <div className="OperateContent">
          <div className="steps">
            <div className="operateCard">
              <h2>Book Service</h2>
              <p>book for a service and waiat for our sxecutive confirms from his side</p>
            </div>
            <div className="operateCard">
              <h2>At your doorstep</h2>
              <p>as our worker arrives your doosrsteps, confirm the otp and payment. and work begins..</p>
            </div>
            <div className="operateCard">
              <h2>what next</h2>
              <p>as our worker finishes work, cross-cofirm the work before he/she leaves.</p>
            </div>
          </div>
          <div className="mapImg">
            <img src="img/mapImg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Operation
