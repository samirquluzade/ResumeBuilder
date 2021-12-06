import React, {useState} from 'react';
import styled from "styled-components";

const Settings = () => {

    const [showPassword,setShowPassword] = useState(false);
    const [newPassword,setNewPassword] = useState(false);

    return(
        <Section>
            <SectionName>
                <h2>Settings</h2>
            </SectionName>
            <Form>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" className="form-control"/>
                <Label htmlFor="password">Current password</Label>
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
                <Label htmlFor="new_password">New password</Label>
                { !newPassword ? (
                        <>
                            <Input type="password" name="new_password" className="form-control"/>
                            <i className="fas fa-eye" onClick={() => setNewPassword(true)}></i>
                        </>)
                    :
                    (
                        <>
                            <Input type="text" name="new_password" className="form-control"/>
                            <i className="fas fa-eye-slash" onClick={() => setNewPassword(false)}></i>
                        </>)
                }
                <SaveButton>
                    <button className="btn btn-success">Save changes</button>
                </SaveButton>
            </Form>
        </Section>
    );
};

const Section = styled.div`
    margin: 6% 8%;
    @media(max-width: 768px){
      margin: 18% 3%;
    }
`;

const SectionName = styled.div`
  text-align: center;
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
  margin: 0 15%;
  i{
    position: absolute;
    transform: translateY(-170%);
    right: 22%;
  }
`;

const SaveButton = styled.div`
  padding-top: 40px;
  text-align: center;
  button{
    font-size: 17px;
  }
  @media(max-width: 768px){
    padding-top: 15px;
  }
`;

export default Settings;