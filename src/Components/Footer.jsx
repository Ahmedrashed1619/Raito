import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram , BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <div className="mt-3 footer">
        <div className='line' style={{height: '3px' , backgroundImage: 'linear-gradient(to right, #012623, #3A8C3F)'}}></div>
      </div>

      <div className="container-fluid py-1">
        <div className="row gy-3 d-flex justify-content-between align-items-center">
          <div className="col-lg-7 col-md-6">
            <div className="media-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <BsTwitter />
                </a>
                <a href="#">
                  <BsInstagram />
                </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="row gx-0 gy-2">
              <div className="col-md-4">
                <div className="info">
                  <p>0123456789 - 0123456789</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info">
                  <a href="#">www.Raitotec.com</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info">
                  <a href="#">www.Raitotec.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
