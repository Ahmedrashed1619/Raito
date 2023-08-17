import React from 'react';
import { Modal } from 'react-bootstrap';


export default function Home() {


    // modal 
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [auth, setAuth] = React.useState({
      username: "",
      password: ""
  });

  const handelAuthInfo = (e) => {
      let loginInfo = { ...auth };
      loginInfo[e.target.name] = e.target.value;
      setAuth(loginInfo);
  };

  async function AuthFormData(e) {
      e.preventDefault();
  }




  return (
    <div className='d-flex justify-content-center align-items-cente py-5'>
        <div className="box">
            <img loading="lazy" src={process.env.PUBLIC_URL + "/images/main.jpg"} alt="main" />
              <>
                <div className="item first-item" onClick={handleShow}>
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/images/Group 11838.png"} alt="item" />
                    <div className="bg-item">jjj</div>
                </div>
                <div className="item second-item" onClick={handleShow}>
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/images/Group 11839.png"} alt="item" />
                    <div className="bg-item">jjj</div>
                </div>
                <div className="item third-item" onClick={handleShow}>
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/images/Group 11840.png"} alt="item" />
                    <div className="bg-item">jjj</div>
                </div>
                <div className="item fourth-item" onClick={handleShow}>
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/images/Group 11841.png"} alt="item" />
                    <div className="bg-item">jjj</div>
                </div>
                <div className="item fifth-item" onClick={handleShow}>
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/images/Group 11842.png"} alt="item" />
                    <div className="bg-item">jjj</div>
                </div>
                <div className="item sixth-item" onClick={handleShow}>
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/images/Group 11843.png"} alt="item" />
                    <div className="bg-item">jjj</div>
                </div>
                <div className="item seventh-item" onClick={handleShow}>
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/images/Group 11844.png"} alt="item" />
                    <div className="bg-item">jjj</div>
                </div>
                <div className="item eighth-item" onClick={handleShow}>
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/images/Path 19109.png"} alt="item" />
                    <div className="bg-item">jjj</div>
                </div>
              </>
        </div>


        {/* modal */}
        <Modal
            style={{ zIndex: "9999999999" }}
            show={show}
            onHide={handleClose}
            centered
        >
            <Modal.Header style={{ padding: "1.5rem" }} closeButton>
                <Modal.Title className="w-100">
                    <h6 className='fw-bold text-success'>Login</h6>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ padding: "1.5rem" }}>
                <form onSubmit={AuthFormData}>
                  <div className="mb-4">
                    <label className="mb-2 fw-bold mainColor-label" htmlFor={'userName'}>
                      Name
                    </label>
                    <div className="input-group">
                        <input 
                            type={'text'}
                            onChange={handelAuthInfo}
                            className='bg-transparent form-control fw-bold mx-auto py-2 w-100'
                            style={{fontSize: '14px'}}
                            required
                            placeholder={'enter user name..'}
                            name={'userName'}
                            id={'userName'}
                        />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 fw-bold mainColor-label" htmlFor={'password'}>
                      Password
                    </label>
                    <div className="input-group">
                        <input 
                            type={'password'}
                            onChange={handelAuthInfo}
                            className='bg-transparent form-control fw-bold mx-auto py-2 w-100'
                            style={{fontSize: '14px'}}
                            required
                            placeholder={'enter your password..'}
                            name={'password'}
                            id={'password'}
                        />
                    </div>
                  </div>

                  <div className="text-center">
                    <button class="btn btn-outline-success fw-semibold px-4" type="submit">Submit</button>
                  </div>

                </form>
            </Modal.Body>
        </Modal>
    </div>
  )
}
