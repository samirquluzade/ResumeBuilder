import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Contact = ({handleChange,goToExperience}) => {

    return(
      <>
          <Title>Please enter your contact infos</Title>
          <Inputs>
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" className="form-control" placeholder="Samir" onChange={handleChange}/>
              <Label htmlFor="surname">Surname</Label>
              <Input type="text" name="surname" className="form-control" placeholder="Guluzadeh" onChange={handleChange}/>
              <Label htmlFor="address">Address</Label>
              <Input type="text" name="address" className="form-control" placeholder="Enter a location" onChange={handleChange}/>
              <Label htmlFor="phone">Phone</Label>
              <Input type="number" name="phone" className="form-control" placeholder="0551234567" onChange={handleChange}/>
              <Label htmlFor="phone2">Phone 2</Label>
              <Input type="number" name="phone2" className="form-control" placeholder="0551234567" onChange={handleChange}/>
              <Label htmlFor="email">Email</Label>
              <Input type="text" name="email" className="form-control" placeholder="mail@example.com" onChange={handleChange}/>
              <Next onClick={goToExperience}>
                  <Link to="#experience" className="btn btn-primary">Next to Experience</Link>
              </Next>
          </Inputs>
      </>
    );
};

const Next = styled.div`
  text-align: center;
  margin-top: 5%;
`;

const Title = styled.h3`
  text-align: center;
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


export default Contact;