import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Contact = ({handleChange,goToExperience,data,error}) => {

    return(
      <>
          <Title>Please enter your contact infos</Title>
          <Inputs>
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" className="form-control" placeholder="Samir" onChange={handleChange} value={data.name} minLength={2} maxLength={15} required="required"/>
              {error.name && <Error>{error.name}</Error>}
              <Label htmlFor="surname">Surname</Label>
              <Input type="text" name="surname" className="form-control" placeholder="Guluzadeh" onChange={handleChange} value={data.surname} minLength={2} maxLength={20} required="required"/>
              {error.surname && <Error>{error.surname}</Error>}
              <Label htmlFor="address">Address</Label>
              <Input type="text" name="address" className="form-control" placeholder="Enter a location" onChange={handleChange} value={data.address} minLength={3} maxLength={40} required="required"/>
              {error.address && <Error>{error.address}</Error>}
              <Label htmlFor="phone">Phone</Label>
              <Input type="number" name="phone" className="form-control" placeholder="0551234567" onChange={handleChange} value={data.phone} minLength={6} maxLength={20} required="required"/>
              {error.phone && <Error>{error.phone}</Error>}
              <Label htmlFor="phone2">Phone 2</Label>
              <Input type="number" name="phone2" className="form-control" placeholder="0551234567" onChange={handleChange} value={data.phone2} minLength={6} maxLength={20}/>
              <Label htmlFor="email">Email</Label>
              <Input type="text" name="email" className="form-control" placeholder="mail@example.com" onChange={handleChange} value={data.email} minLength={10} maxLength={25} required="required"/>
              {error.email && <Error>{error.email}</Error>}
              <Next onClick={goToExperience}>
                  <Link to="#experience" className="btn btn-primary">Next to Experience</Link>
              </Next>
          </Inputs>
      </>
    );
};

const Next = styled.div`
  float: right;
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

const Error = styled.p`
  color:red;
`;


export default Contact;