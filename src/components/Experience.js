import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Experience = ({handleChange,backTo,data}) => {

    const checkHandler = () => {
        let checkbox = document.getElementById('present');
        let text = document.getElementById('end');
        if(checkbox.checked === true){
            text.style.display = "none";
            data.endDate = "Present";
        }
        else
        {
            text.style.display = "block";
        }
    }

    return(
        <>
            <Title>Tell us about your Experience</Title>
            <Message>Start with your recent job</Message>
            <Inputs>
                <Label htmlFor="job">Job Title</Label>
                <Input type="text" name="job" className="form-control" placeholder="Software Engineer" onChange={handleChange} value={data.job}/>
                <Label htmlFor="employer">Employer</Label>
                <Input type="text" name="employer" className="form-control" placeholder="Google" onChange={handleChange} value={data.employer}/>
                <Label htmlFor="startDate">Start Date</Label>
                <Input type="month" name="startDate" className="form-control" onChange={handleChange} value={data.startDate}/>
                <EndDate>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input type="month" name="endDate" className="form-control" onChange={handleChange} value={data.endDate} id="end"/>
                </EndDate>
                <Label style={{cursor:'pointer'}} onClick={checkHandler}>
                    <Input type="checkbox" style={{marginTop:'4%',float:'left'}} id="present" /> &nbsp; I currently work here
                </Label>
                <br/>
                <Label htmlFor="city">City</Label>
                <Input type="text" name="city" className="form-control" onChange={handleChange} value={data.city}/>
                <Label htmlFor="desc">Description</Label>
                <TextArea name="desc" className="form-control" rows="5" cols="50" maxLength="250" placeholder="Write your work experience" onChange={handleChange} value={data.desc}/>
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

const Message = styled.h5`
  text-align: center;
  color:maroon;
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

const EndDate = styled.div``;

export default Experience;