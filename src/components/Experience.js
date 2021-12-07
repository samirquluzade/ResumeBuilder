import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Experience = ({handleChange,backTo}) => {
    return(
        <>
            <Title>Tell us about your Experience</Title>
            <Inputs>
                <Label htmlFor="job">Job Title</Label>
                <Input type="text" name="job" className="form-control" placeholder="Software Engineer" onChange={handleChange}/>
                <Label htmlFor="employer">Employer</Label>
                <Input type="text" name="employer" className="form-control" placeholder="Google" onChange={handleChange}/>
                <Label htmlFor="startDate">Start Date</Label>
                <Input type="date" name="startDate" className="form-control" onChange={handleChange}/>
                <Label htmlFor="endDate">End Date</Label>
                <Input type="date" name="endDate" className="form-control" onChange={handleChange}/>
                <Label style={{cursor:'pointer'}}>
                    <Input type="checkbox" style={{marginTop:'4%',float:'left'}}/> &nbsp; I currently work here
                </Label>
                <br/>
                <Label htmlFor="city">City</Label>
                <Input type="text" name="city" className="form-control" onChange={handleChange}/>
                <Label htmlFor="desc">Description</Label>
                <TextArea name="desc" className="form-control" rows="5" cols="50" maxLength="250" placeholder="Write your work experience"/>
                <Next>
                    <Link to="#contact" className="btn btn-danger" onClick={backTo}>Back</Link>
                    <Link to="#experience" className="btn btn-primary">Next to Education</Link>
                </Next>
            </Inputs>
        </>
    );
}

const Next = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
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

const TextArea = styled.textarea`
    resize: none;
`;

export default Experience;