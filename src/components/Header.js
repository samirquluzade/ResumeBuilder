import React, {useState} from 'react';
import {Modal,Button} from "react-bootstrap";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = (props) => {

    const [signUpShow,setSignUpShow] = useState(false);
    const [loginShow,setLoginShow] = useState(false);
    const [showPassword,setShowPassword] = useState(false);


    const handleClose = () => {
        setSignUpShow(false);
        setLoginShow(false);
    }

    const preventClose = (e) => {
        e.stopPropagation();
    }

    return(
        <>
        <Headers>
            <Logo>
                ResumeXT
            </Logo>
            <Actions>
                <div className="dropdown">
                    <Link to="#"
                          className="dropdown-toggle"
                          id="dropdownmenu"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                        <Language>
                            <img src="/images/language.svg" alt=""/>
                            <span>AZ</span>
                            <i className="fa fa-caret-down"></i>
                        </Language>
                    </Link>
                    <Languages className="dropdown-menu" aria-labelledby="dropdownmenu">
                        <Link className="dropdown-item" to="#en">
                            EN
                        </Link>
                        <Link className="dropdown-item" to="#rus">
                            RUS
                        </Link>
                        <Link className="dropdown-item" to="#tr">
                            TR
                        </Link>
                    </Languages>
                </div>
                <Buttons>
                    <Link to='#signup' onClick={() => setSignUpShow(true)} data-toggle="modal" data-target="#Modal">Sign up</Link>
                    <Link to='#login' onClick={() => setLoginShow(true)} data-toggle="modal" data-target="#Modal">Log in</Link>
                </Buttons>
            </Actions>
        </Headers>
            <div className="modal fade" id="Modal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={handleClose}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content" onClick={preventClose}>
                        <div className="modal-header">
                            {loginShow ? <h3 className="modal-title text-center" id="exampleModalLabel">Log in</h3> : <h3 className="modal-title text-center" id="exampleModalLabel">Sign up</h3>}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setSignUpShow(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Authentifiation>
                                <img src="/images/google.png" alt=""/>
                                <p>Connect with Google</p>
                            </Authentifiation>
                            <Authentifiation>
                                <img src="/images/facebook.png" alt=""/>
                                <p>Connect with Facebook</p>
                            </Authentifiation>
                    {signUpShow && (
                        <Form>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" name="name" className="form-control"/>
                            <Label htmlFor="email">Email</Label>
                            <Input type="text" name="email" className="form-control"/>
                            <Label htmlFor="password">Password</Label>
                            { !showPassword ? (
                                <>
                                <Input type="password" name="password" className="form-control"/>
                                <i className="fas fa-eye" onClick={() => setShowPassword(true)}></i>
                                </>)
                                :
                                (
                                    <>
                                        <Input type="text" name="password" className="form-control"/>
                                        <i className="fas fa-eye-slash" onClick={() => setShowPassword(false)}></i>
                                    </>)
                            }
                        </Form>
                    )}
                            {loginShow && (
                                <Form>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="text" name="email" className="form-control"/>
                                    <Label htmlFor="password">Password</Label>
                                    { !showPassword ? (
                                            <>
                                                <Input type="password" name="password" className="form-control"/>
                                                <i className="fas fa-eye" style={{top:'78%'}} onClick={() => setShowPassword(true)}></i>
                                            </>)
                                        :
                                        (
                                            <>
                                                <Input type="text" name="password" className="form-control"/>
                                                <i className="fas fa-eye-slash" onClick={() => setShowPassword(false)}></i>
                                            </>)
                                    }
                                    <Label style={{cursor:'pointer'}}>
                                        <Input type="checkbox" style={{marginTop:'4%',float:'left'}}/> &nbsp; Remember me
                                    </Label>
                                    <Label style={{float:'right',cursor:'pointer'}}>Forgot password?</Label>
                                </Form>
                            )}
                    </div>
                        {signUpShow && (
                    <div className="modal-footer">
                        <ActionButton type="button" className="btn btn-success">Create an account</ActionButton>
                    </div>
                        )}
                        {loginShow && (
                            <div className="modal-footer">
                                <ActionButton type="button" className="btn btn-success">Log in</ActionButton>
                            </div>
                        )}
                </div>
            </div>
        </div>

    </>
    );
}
const Headers = styled.div`
  margin: 1% 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img{
    height: 60px;
  }
  @media(max-width: 768px){
    margin:5% 8%;
  }
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span,i,ul,li{
      color:black;
    }
`;

const Language = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  img{
    height: 22px;
  }
  span{
    margin-left: 5%;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 22px;
`;

const Buttons = styled.div`
  font-size: 16px;
  font-weight: 600;
  a{
    text-decoration: none;
    margin-left: 30px;
  }
  a:nth-of-type(1){
    color:maroon;
  }
  a:nth-of-type(2){
    color:#2274B0;
  }
`;

const Languages = styled.div`
  a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:black;
    font-size: 16px;
  }
  a:hover{
    text-decoration: none;
    color:maroon;
  }
`;

const Label = styled.label`
  font-size: 16px;
  margin-top: 2%;
  font-weight: 500;
`;

const Input = styled.input`
  position: relative;
  &:focus{
    outline: none!important;
    box-shadow: none!important;
    border:1px solid #000000;
  }
`;

const Form = styled.form`
  i{
    position: absolute;
    top:90%;
    right: 5%;
  }
`;

const Authentifiation = styled.button`
  width: 80%;
  text-align: center;
  background: transparent;
  border:2px solid #0a66c2;
  color: #0a66c2;
  height: 48px;
  border-radius: 24px;
  box-shadow: none;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 2% auto;
  img{
    height: 25px;
  }
  p{
    margin-left: 2%;
  }
  &:hover{
    box-shadow: inset 0px 0px 0px 1px #025cb9;
    background-color: #ecf4fe;
  }
`;

const ActionButton = styled.button`
  font-size: 18px;
  background-color: #06C755;
`;
export default Header;