import React from 'react';
import styled from "styled-components";
import {Dropdown,Container} from "react-bootstrap";

const Home = (props) => {

    const CustomToggle = React.forwardRef(({ children,onClick }, ref) => (
        <Language
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </Language>
    ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul style={{background:"white"}}>
                        {React.Children.toArray(children).filter(
                            (child) =>
                                 child.props.children.toLowerCase(),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return(
        <Container>
            <Header>
                <Logo>
                    ResumeXT
                </Logo>
                <Actions>
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown">
                                <img src="/images/language.svg" alt=""/>
                                <span>AZ</span>
                                <i className="fa fa-caret-down"></i>
                            <Dropdown.Menu as={CustomMenu}>
                                <li value="1">EN</li>
                                <li value="2">RUS</li>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>
                        <a>Sign Up</a>
                        <a>Login</a>
                </Actions>
            </Header>
        </Container>
    );
}
const Header = styled.div`
  margin: 2% 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img{
    height: 60px;
  }
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a{
      font-size: 16px;
      margin-left: 30px;
      font-weight: 600;
    }
    a:nth-of-type(2){
      color:maroon;
    }
    a:nth-of-type(3){
    color:#2274B0;
    }
`;

const Language = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
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



export default Home;