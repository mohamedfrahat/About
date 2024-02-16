import React from 'react'

export default function Footer() {
  return (
    <>

      <footer>
        <div className="row text-center ">
            <div className="col-sm-4">
                <h3>Loacation</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-sm-4">
                <h3>AROUND THE WEB</h3>
                <div className="footer-icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i  className="fa-solid fa-globe mx-1 icon"></i>
                </div>
            </div>
            <div className="col-sm-4">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>

       
      </footer>
      <div className="footer-img text-center py-3">
            <p>Copyright © Your Website 2021</p>
        </div>
    </>
  )
}
