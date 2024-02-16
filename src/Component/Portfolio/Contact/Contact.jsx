import React, { useEffect, useState } from 'react'

export default function Contact() {

  let color = '#2C3E50'
 
  return (
    <>
<h2 className='PORTFOLIO'>CONATCT SECTION</h2>
      <div className="d-flex align-items-center justify-content-center mb-5 ">
        <div className="line me-3 " style={{backgroundColor:color}} ></div>
        <i className="fa-solid fa-star "></i>
        <div className="line ms-3  " style={{backgroundColor:color}} >
        </div>
      </div>

    <div className="container py-3">
    <form className=''>
        <input  placeholder='username' type="text" className='form-control py-2 my-3' />
        <input   placeholder='userage' type="text" className='form-control py-2 my-3 ' />
        <input  placeholder='useremail' type="text" className='form-control py-2 my-3' />
        <input placeholder='userpassword' type="text" className='form-control py-2 my-3' />
      </form>
    </div>
    </>
  )
}
