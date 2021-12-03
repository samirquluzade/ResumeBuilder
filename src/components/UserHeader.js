import React, {useState} from 'react';
import {Modal,Button} from "react-bootstrap";
import styled from "styled-components";
import {Link} from "react-router-dom";

const UserHeader = (props) => {

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
                    <div className="dropdown" style={{marginRight:'20px'}}>
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
                    <User>
                        <Link to="#user" className="dropdown-toggle" id="dropdownmenu2" data-toggle="dropdown" ariahaspopup="true" aria-expanded="false">
                            <img src="/images/user.svg" alt=""/>
                            <span>Me</span>
                            <img src="/images/down-icon.svg" alt=""/>
                        </Link>
                        <Languages className="dropdown-menu" aria-labelledby="dropdownmenu2">
                            <Link className="dropdown-item" to="#en">
                                EN
                            </Link>
                            <Link className="dropdown-item" to="#rus">
                                AZ
                            </Link>
                            <Link className="dropdown-item" to="#tr">
                                TR
                            </Link>
                        </Languages>
                    </User>
                </Actions>
            </Headers>
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

const User = styled.a`
    img:first-of-type{
      height: 35px;
      border-radius: 10px;
    }
    span{
      margin-left: 5px;
    }
    img:nth-of-type(2){
      height: 12px;
    }
`;

export default UserHeader;