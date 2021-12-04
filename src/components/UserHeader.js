import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const UserHeader = () => {

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
                    <div className="dropdown" style={{marginRight:'20px'}}>
                    <User>
                        <Link to="#user" className="dropdown-toggle" id="dropdownmenu2" data-toggle="dropdown" ariahaspopup="true" aria-expanded="false">
                            <img src="/images/user.svg" alt=""/>
                            <span>Me</span>
                            <img src="/images/down-icon.svg" alt=""/>
                        </Link>
                        <Languages className="dropdown-menu" aria-labelledby="dropdownmenu2">
                            <Link className="dropdown-item" to="#en">
                                Settings
                            </Link>
                            <Link className="dropdown-item" to="#rus">
                                Created resumes
                            </Link>
                            <Link className="dropdown-item" to="#tr">
                                Sign out
                            </Link>
                        </Languages>
                    </User>
                    </div>
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
    a{
      font-size: 14px;
      white-space: nowrap;
      padding: 2px;
    }
`;

export default UserHeader;