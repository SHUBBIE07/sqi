import React from 'react'
import './App.css'
import image from './sq1.png'
import image2 from './sqi nav.jpg'


const Sqi = () =>{
  return(
    <div>

      <section>
        <div className='container-fluid'>

          {/* nav bar */}
          <nav class="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src={image2} alt="" width="70px" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Our story</a></li>
                      <li><a className="dropdown-item" href="#">Our Team</a></li>
                      <li><a className="dropdown-item" href="#">Campus Info</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Programmes
                    </a>
                    <ul className="dropdown-menu">
                     <li><a className="dropdown-item" href="#">National Innovation Diploma</a></li>
                     <li><a className="dropdown-item" href="#">Professional Diploma Program</a></li>
                     <li><a className="dropdown-item" href="#">Executive Professional Certificate Programme</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Admissions
                    </a>
                    <ul className="dropdown-menu">
                     <li><a className="dropdown-item" href="#">Apply for a Programme</a></li>
                     <li><a className="dropdown-item" href="#">Mode of Study</a></li>
                     <li><a className="dropdown-item" href="#">Tuition</a></li>
                     <li><a className="dropdown-item" href="#">Frequently Asked Questions</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      E-Portal
                    </a>
                    <ul className="dropdown-menu">
                     <li><a className="dropdown-item" href="#">Student</a></li>
                     <li><a className="dropdown-item" href="#">Staff</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">SQI Scholarship</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">News</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Title */}
          <div className="row" id='title'>
            <div className="col-lg-6">
              <h1>Study to become a global talent</h1>
              <p className='title-p'>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
              <button className='titleBtn'>Start Now</button>
            </div>
            <div className="col-lg-6">
              <img style={{width:"450px"}} src={image} alt="" />
            </div>
          </div>

        </div>
      </section>



  
    </div>
  )
}

export default Sqi