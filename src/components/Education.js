import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Education = ({handleChange,backTo,data,goToAbout,errors}) => {

const inputHandler = () => {
    let checkbox = document.getElementById('education');
    let text = document.getElementById('education_inputs');
    if(checkbox.checked === true){
        text.style.display = "none";
        data.school = '*';
        data.degree = '*';
        data.graduation = '*';
        data.town = '*';
        data.description = '*';
    }
    else
    {
        text.style.display = "block";
        data.school = '';
        data.degree = '';
        data.graduation = '';
        data.town = '';
        data.description = '';
    }
}

    return(
        <>
            <Title>Tell us about your Education</Title>
            <Message>Start with your recent education</Message>
            <Details id="details">
                <Labeld style={{cursor:'pointer'}} onClick={inputHandler}>
                    <Inputd type="checkbox" id="education" /> &nbsp; I don't have any education
                </Labeld>
                <Inputs id="education_inputs">
                    <Label htmlFor="school">School</Label>
                    <Input type="text" name="school" className="form-control" placeholder="Software Engineer" onChange={handleChange} value={data.school} minLength={2} maxLength={20} required="required"/>
                    {errors.school && <Error>{errors.school}</Error>}
                    <Label htmlFor="degree">Degree</Label>
                    <Input type="text" name="degree" className="form-control" placeholder="Google" onChange={handleChange} value={data.degree} minLength={2} maxLength={20} required="required"/>
                    {errors.degree && <Error>{errors.degree}</Error>}
                    <Label htmlFor="graduation">Graduation Date</Label>
                    <Input type="month" name="graduation" className="form-control" onChange={handleChange} value={data.graduation}/>
                    {errors.graduation && <Error>{errors.graduation}</Error>}
                    <br/>
                    <Label htmlFor="town">City</Label>
                    <Input type="text" name="town" className="form-control" onChange={handleChange} value={data.town} minLength={2} maxLength={20} required="required"/>
                    {errors.town && <Error>{errors.town}</Error>}
                    <Label htmlFor="description">Description</Label>
                    <TextArea name="description" className="form-control" rows="5" cols="50" maxLength="250" placeholder="Write your work experience" onChange={handleChange} value={data.description}/>
                </Inputs>
            </Details>
            <Next>
                <Link to="#contact" className="btn btn-danger" onClick={backTo}>Back</Link>
                {/*<Link to="#experience" className="btn btn-info" onClick={addExperience}>Add new Experience</Link>*/}
                <Link to="#education" className="btn btn-primary" onClick={goToAbout}>Next to About</Link>
            </Next>
        </>
    );
};

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

export default Education;