import React from 'react'

export default function Navbar() {

  const logo = process.env.PUBLIC_URL + "/images/logo.png";


  return (
    <nav className="navbar pt-2 pb-3">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="navbar-brand">
                <img loading="lazy" src={logo} alt="logo" />
                <p>شركـة رايتـو للبرمجيـات</p>
            </div>
            <button className="btn">أنظمـة رايتـو المحاسبيـة</button>
          </div>
        </div>
    </nav>
  )
}
