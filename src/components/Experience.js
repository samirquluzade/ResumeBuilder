import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Experience = ({handleChange,backTo,data,goToEducation,errors}) => {

    const [error,setError] = useState({
       job:null,
       employer:null,
       startDate:null,
       endDate:null,
       city:null,
       desc:null
    });

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

    const checkDate = (e) => {
        if(e.target.value > data.startDate){
            handleChange(e);
            setError({...error,endDate: null});
        }
        else
        {
            setError({...error,endDate: "Start date cannot be greater than end date"});
        }
    }

    const inputHandler = () => {
        let checkbox = document.getElementById('experience');
        let text = document.getElementById('inputs');
        if(checkbox.checked === true){
            text.style.display = "none";
            data.job = '*';
            data.employer = '*';
            data.startDate = '*';
            data.endDate = '*';
            data.city = '*';
        }
        else
        {
            text.style.display = "block";
            data.job = '';
            data.employer = '';
            data.startDate = '';
            data.endDate = '';
            data.city = '';
        }
    }
    // const addExperience = () => {
    //     let details = document.createElement("details");
    //     // let summary = document.createElement("summary");
    //     let inputs = document.getElementById("inputs");
    //
    //     details.appendChild(inputs);
    //     document.getElementById('details').appendChild(details);
    //     // document.getElementById('details').insertAdjacentElement('afterend',inputs);
    // }

    return(
        <>
            <Title>Tell us about your Experience</Title>
            <Message>Start with your recent job</Message>
            <Details id="details">
                <Labeld style={{cursor:'pointer'}} onClick={inputHandler}>
                    <Inputd type="checkbox" id="experience" /> &nbsp; I don't have any experience
                </Labeld>
                <Inputs id="inputs">
                    <Label htmlFor="job">Job Title</Label>
                    <Input type="text" name="job" className="form-control" placeholder="Software Engineer" onChange={handleChange} value={data.job} minLength={2} maxLength={20} required="required"/>
                    {errors.job && <Error>{errors.job}</Error>}
                    <Label htmlFor="employer">Employer</Label>
                    <Input type="text" name="employer" className="form-control" placeholder="Google" onChange={handleChange} value={data.employer} minLength={2} maxLength={20} required="required"/>
                    {errors.employer && <Error>{errors.employer}</Error>}
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input type="month" name="startDate" className="form-control" onChange={handleChange} value={data.startDate}/>
                    {errors.startDate && <Error>{errors.startDate}</Error>}
                    <EndDate>
                        <Label htmlFor="endDate">End Date</Label>
                        <Input type="month" name="endDate" className="form-control" onChange={checkDate} value={data.endDate} id="end"/>
                        {error.endDate && <Error>{error.endDate}</Error>}
                        {errors.endDate && <Error>{errors.endDate}</Error>}
                    </EndDate>
                    <Label style={{cursor:'pointer'}} onClick={checkHandler}>
                        <Input type="checkbox" style={{marginTop:'4%',float:'left'}} id="present" /> &nbsp; I currently work here
                    </Label>
                    <br/>
                    <Label htmlFor="city">City</Label>
                    <Input type="text" name="city" className="form-control" onChange={handleChange} value={data.city} minLength={2} maxLength={20} required="required"/>
                    {errors.city && <Error>{errors.city}</Error>}
                    <Label htmlFor="desc">Description</Label>
                    <TextArea name="desc" className="form-control" rows="5" cols="50" maxLength="250" placeholder="Write your work experience" onChange={handleChange} value={data.desc}/>
                </Inputs>
            </Details>
            <Next>
                <Link to="#contact" className="btn btn-danger" onClick={backTo}>Back</Link>
                {/*<Link to="#experience" className="btn btn-info" onClick={addExperience}>Add new Experience</Link>*/}
                <Link to="#education" className="btn btn-primary" onClick={goToEducation}>Next to Education</Link>
            </Next>
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

const Error = styled.p`
  color:red;
`;

const Details = styled.div`

`;

const Labeld = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const Inputd = styled.input`
    font-weight: 700;
`;

export default Experience;