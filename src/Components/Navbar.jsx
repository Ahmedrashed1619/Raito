import React from 'react'

export default function Navbar() {

  const logo = process.env.PUBLIC_URL + "/images/logo.png";


  return (
    <nav className="navbar pt-2 pb-3">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <a href="/" className="navbar-brand">
                <img src={logo} alt="logo" />
                <p>شركـة رايتـو للبرمجيـات</p>
            </a>
            <button className="btn">أنظمـة رايتـو المحاسبيـة</button>
          </div>
        </div>
    </nav>
  )
}
