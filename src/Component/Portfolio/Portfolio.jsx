import React from 'react'
import log1 from '../../Assits/Images/poert1.png'
import log2 from '../../Assits/Images/port2.png'
import log3 from '../../Assits/Images/port3.png'
export default function Portfolio() {
  let color = '#2C3E50'
  return (
    <>
      <h2 className='PORTFOLIO'>PORTFOLIO COMPONENT</h2>
      <div className="d-flex align-items-center justify-content-center mb-5 ">
        <div className="line me-3 " style={{backgroundColor:color}} ></div>
        <i className="fa-solid fa-star "></i>
        <div className="line ms-3  " style={{backgroundColor:color}} >
        </div>
      </div>
      <div className="container">
      <div className="row pb-3 gy-3">
        <div className="col-md-4">
      <div className="img-profile ">
      <img src={log1} className='w-100' alt="" />
      
      
      <div className="layer d-flex justify-content-center align-items-center">
        <div className="layer-icon">
        <i class="fa-solid fa-plus"></i>
        </div>


      </div>


      </div>
      
        </div>
        <div className="col-md-4">
      <div className="img-profile">
      <img src={log2} className='w-100' alt="" />
       
      <div className="layer d-flex justify-content-center align-items-center">
        <div className="layer-icon">
        <i class="fa-solid fa-plus"></i>
        </div>


      </div>
      </div>
      
        </div>
        <div className="col-md-4">
      <div className="img-profile">
      <img src={log3} className='w-100' alt="" />
       
      <div className="layer d-flex justify-content-center align-items-center">
        <div className="layer-icon">
        <i class="fa-solid fa-plus"></i>
        </div>


      </div>
      </div>
      
        </div>
        <div className="col-md-4">
      <div className="img-profile">
      <img src={log1} className='w-100' alt="" />
      
       
      <div className="layer d-flex justify-content-center align-items-center">
        <div className="layer-icon">
        <i class="fa-solid fa-plus"></i>
        </div>


      </div>
      </div>
      
        </div>
        <div className="col-md-4">
      <div className="img-profile">
      <img src={log2} className='w-100' alt="" />
       
      <div className="layer d-flex justify-content-center align-items-center">
        <div className="layer-icon">
        <i class="fa-solid fa-plus"></i>
        </div>


      </div>
      </div>
      
        </div>
        <div className="col-md-4">
      <div className="img-profile">
      <img src={log3} className='w-100' alt="" />
       
      <div className="layer d-flex justify-content-center align-items-center">
        <div className="layer-icon">
        <i class="fa-solid fa-plus"></i>
        </div>


      </div>
      </div>
      
        </div>
        </div>
      </div>

    </>
  )
}
