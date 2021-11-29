import styled from "styled-components";
import Container from 'react-bootstrap/Container';

const Home = (props) => {
    return(
        <Container>
            <Header>
                <Logo>
                    ResumeXT
                </Logo>
                <Actions>
                    <Language>
                        <img src="/images/language.svg" alt=""/>
                        <span>English</span>
                    </Language>
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
      font-size: 17px;
      margin-left: 15px;
      font-weight: 600;
    }
    a:first-of-type{
      color:maroon;
    }
    a:nth-of-type(2){
    color:#2274B0;
    }
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  img{
    height: 22px;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 22px;
`;



export default Home;