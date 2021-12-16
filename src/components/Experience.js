import React, {useState} from 'react';
import DataGrid, {
    Column,
} from "devextreme-react/data-grid";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Experience = ({handleChange,backTo,data,goToEducation,errors,addExperience}) => {

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
        let text = document.getElementById('ex_inputs');
        if(checkbox.checked === true){
            text.style.display = "none";
            // data.job = '*';
            // data.employer = '*';
            // data.startDate = '*';
            // data.endDate = '*';
            // data.city = '*';
        }
        else
        {
            text.style.display = "block";
            // data.job = '';
            // data.employer = '';
            // data.startDate = '';
            // data.endDate = '';
            // data.city = '';
        }
    }
    function toggleMenu(e){
        const val = e.target.parentNode.childNodes[1];
        val.classList.toggle('activ');
    }
    return(
        <LeftSide>
            <Title>Please enter your experience infos</Title>
            <Labeld style={{cursor:'pointer'}} onClick={inputHandler}>
                <Inputd type="checkbox" id="experience" /> &nbsp; I don't have any experience
            </Labeld>
            <Details id="ex_inputs">
                <Button className="btn btn-info" style={{float:'right'}} onClick={addExperience} id="newEx">Add new Experience</Button>
                {data.map((item,i) => {
                    return(
                        <div>
                            <Work onClick={toggleMenu}>Work Experience {i + 1}</Work>
                            <Inputs id="one">
                                <Label htmlFor="job">Job</Label>
                                <Input type="text" name="job" className="form-control" placeholder="Software Engineer" onChange={e => handleChange(e,i)} minLength={2} maxLength={30} required="required" value={item.job}/>
                                {error.job && <Error>{error.job}</Error>}
                                <Label htmlFor="employer">Employer</Label>
                                <Input type="text" name="employer" className="form-control" placeholder="Google" onChange={e => handleChange(e,i)} minLength={2} maxLength={30} required="required" value={item.employer}/>
                                {error.employer && <Error>{error.employer}</Error>}
                                <Label htmlFor="startDate">Start Date</Label>
                                <Input type="month" name="startDate" className="form-control" onChange={e => handleChange(e,i)} required="required" value={item.startDate}/>
                                {error.startDate && <Error>{error.startDate}</Error>}
                                <Label htmlFor="endDate">End Date</Label>
                                <Input type="month" name="endDate" className="form-control"  onChange={e => handleChange(e,i)} required="required" value={item.endDate}/>
                                {error.endDate && <Error>{error.endDate}</Error>}
                                <Label htmlFor="city">City</Label>
                                <Input type="text" name="city" className="form-control" placeholder="Baku" onChange={e => handleChange(e,i)}  minLength={2} maxLength={20} value={item.city}/>
                                {error.city && <Error>{error.city}</Error>}
                                <Label htmlFor="desc">Description</Label>
                                <TextArea name="desc" className="form-control" rows="5" cols="50" maxLength="250" placeholder="Write your educational experience" onChange={handleChange} value={data.desc}/>
                            </Inputs>
                        </div>
                )})}
            </Details>
            <Next>
                <Link to="/contact" className="btn btn-danger">Back</Link>
                <Link to="/education" className="btn btn-primary" onClick={goToEducation}>Next to Education</Link>
            </Next>
        </LeftSide>
    );
}

const Next = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
`;

const Work = styled.button`
  background-color: #E5E4EA;
  border:none;
  outline: none;
  margin:2% 0;
`;

const TextArea = styled.textarea`
    resize: none;
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
  display: none;
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

const Details = styled.div`
`;

const Error = styled.p`
  color:red;
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