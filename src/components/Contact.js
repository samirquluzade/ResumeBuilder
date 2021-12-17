import React, {useState} from 'react';
import styled from 'styled-components';
import DataGrid, {
    Column,
} from "devextreme-react/data-grid";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Contact = ({handleChange,goToExperience,data}) => {

    return(
      <LeftSide>
          <Title>Please enter your contact infos</Title>
                  <Inputs id="one">
                      <Label htmlFor="name">Name</Label>
                      <Input type="text" name="name" className="form-control" placeholder="Samir" onChange={e => handleChange(e,0)} minLength={2} maxLength={15} required="required" value={data[0].name}/>
                      {data[0].errors.name!=='' && <Error>{data[0].errors.name}</Error>}
                      <Label htmlFor="surname">Surname</Label>
                      <Input type="text" name="surname" className="form-control" placeholder="Guluzadeh" onChange={e => handleChange(e,0)} minLength={2} maxLength={20} required="required" value={data[0].surname}/>
                      {data[0].errors.surname!=='' && <Error>{data[0].errors.surname}</Error>}
                      <Label htmlFor="address">Address</Label>
                      <Input type="text" name="address" className="form-control" placeholder="Enter a location" onChange={e => handleChange(e,0)}  minLength={3} maxLength={40} required="required" value={data[0].address}/>
                      {data[0].errors.address!=='' && <Error>{data[0].errors.address}</Error>}
                      <Label htmlFor="phone">Phone</Label>
                      <Input type="number" name="phone" className="form-control" placeholder="0551234567" onChange={e => handleChange(e,0)}  minLength={6} maxLength={20} required="required" value={data[0].phone}/>
                      {data[0].errors.phone!=='' && <Error>{data[0].errors.phone}</Error>}
                      <Label htmlFor="phone2">Phone 2</Label>
                      <Input type="number" name="phone2" className="form-control" placeholder="0551234567" onChange={e => handleChange(e,0)}  minLength={6} maxLength={20} value={data[0].phone2}/>
                      <Label htmlFor="email">Email</Label>
                      <Input type="text" name="email" className="form-control" placeholder="mail@example.com" onChange={e => handleChange(e,0)}  minLength={10} maxLength={25} required="required" value={data[0].email}/>
                      {data[0].errors.email!=='' && <Error>{data[0].errors.email}</Error>}
                  </Inputs>
          <Next onClick={goToExperience}>
              <Button className="btn btn-primary">Next to Experience</Button>
          </Next>
      </LeftSide>
    );
};

const Next = styled.div`
  margin-top: 4%;
  button{
    float: right;
  }
`;

const Work = styled.button`
  background-color: #E5E4EA;
  border:none;
  outline: none;
  margin:2% 0;
`;

const ID = styled.p`
  padding-top: 2%;
  font-weight: 700;
  font-size: 18px;
`;

const Title = styled.h3`
  text-align: center;
`;

const Inputs = styled.div`
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 700px;
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