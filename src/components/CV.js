import React,{useState} from 'react';
import styled from "styled-components";

const CV = () => {

    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [postal,setPostal] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');

    return(
      <Page>
        <LeftSide>
            <Title>Please enter your contact infos</Title>
            <Inputs>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" className="form-control" placeholder="Samir" onChange={(e) => setName(e.target.value)}/>
                <Label htmlFor="surname">Surname</Label>
                <Input type="text" name="surname" className="form-control" placeholder="Guluzadeh" onChange={(e) => setSurname(e.target.value)}/>
                <Label htmlFor="address">Address</Label>
                <Input type="text" name="address" className="form-control" placeholder="Enter a location" onChange={(e) => setAddress(e.target.value)}/>
                <Label htmlFor="city">City</Label>
                <Input type="text" name="city" className="form-control" placeholder="Baku" onChange={(e) => setCity(e.target.value)}/>
                <Label htmlFor="postal">Postal Code</Label>
                <Input type="text" name="postal" className="form-control" placeholder="1005" onChange={(e) => setPostal(e.target.value)}/>
                <Label htmlFor="phone">Phone</Label>
                <Input type="text" name="phone" className="form-control" placeholder="0551234567" onChange={(e) => setPhone(e.target.value)}/>
                <Label htmlFor="email">Email</Label>
                <Input type="text" name="email" className="form-control" placeholder="mail@example.com" onChange={(e) => setEmail(e.target.value)}/>
                <button className="btn btn-primary">Next to Experience</button>
            </Inputs>
        </LeftSide>
          <RightSide>
                <ResumeExample>
                    <ResumeLeft>
                        <About>
                            ABOUT ME
                        </About>
                        <About>
                            WEBSITES & SOCIAL LINKS
                        </About>
                        <About>
                            LANGUAGES
                        </About>
                    </ResumeLeft>
                    <ResumeRight>
                        <FullName>
                            {name} <br />
                            {surname}
                        </FullName>
                        <Right>
                            WORK EXPERIENCE
                        </Right>
                        <Right>
                            EDUCATION
                        </Right>
                        <Right>
                            SKILLS
                        </Right>
                    </ResumeRight>
                </ResumeExample>
          </RightSide>
      </Page>
    );
};

const Page = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 4%;
`;

const LeftSide = styled.div`
  min-width: 700px;
`;

const Title = styled.h3`

`;

const Inputs = styled.div`

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

const RightSide = styled.div`
`;

const ResumeExample = styled.div`
    margin: 2% 5%;
    display: flex;
    flex-direction: row;
    height: 700px;
`;

const ResumeLeft = styled.div`
  width: 200px;
  background-color: #434244;
`;

const About = styled.div`
  color:white;
  margin:40% 0 40% 10%;
  font-size: 12px;
  font-weight: 600;
`;

const Right = styled.div`
    color:#434244;
    margin: 15% 0 10% 5%;
    font-weight: 600;
`;

const ResumeRight = styled.div`
  background-color: white;
  width: 500px;
`;

const FullName = styled.div`
  margin: 10% 0 5% 5%;
  font-size: 26px;
  font-weight: 700;
`;
export default CV;