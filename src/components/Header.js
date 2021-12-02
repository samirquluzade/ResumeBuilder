import React, {useState} from 'react';
import {Modal,Button} from "react-bootstrap";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = (props) => {

    const [signUp,setSignUpShow] = useState(false);


    const handleClose= () => {
        setSignUpShow(false);
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
                    <Link to='#signup' onClick={() => setSignUpShow(true)} data-toggle="modal" data-target="#exampleModal">Sign up</Link>
                    <Link to='#login'>Sign in</Link>
                </Buttons>
            </Actions>
        </Headers>
    {signUp && (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title text-center" id="exampleModalLabel">Sign up</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )}
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

export default Header;