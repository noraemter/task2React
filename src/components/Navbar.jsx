import React from 'react'
import { Link } from 'react-router'
export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-3">
  <div className="container">
    <a className="navbar-brand fw-bolder fs-2" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        <Link className="nav-link  fw-bolder fs-5 me-4" to={'/'} aria-current="page" >Portfolio</Link>
        <Link className="nav-link  fw-bolder fs-5 me-4" to={'/about'} >About</Link>
        <Link className="nav-link  fw-bolder fs-5" to={'/contact'} >Contact</Link>
      
      </div>
    </div>
  </div>
</nav>

  )
}