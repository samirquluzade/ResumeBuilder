import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

const Education = ({data,goToSkill,addEducation,handleChangeEducation,deleteHandler}) => {

    const [allData,setAllData] = useState(data);

    useEffect(() => {
        setAllData(data);
    },[data]);

    const getAllYear = () => {
        let years = [];
        let currentYear= new Date().getFullYear();
        for(let i = currentYear + 3;i>=currentYear - 70;i--){
            const year = i;
            years.push(<option value={year}>{year}</option>);
        }
        return years;
    }

    const inputHandler = () => {
    let checkbox = document.getElementById('education');
    let text = document.getElementById('details');
    if(checkbox.checked === true){
        text.style.display = "none";
        // eslint-disable-next-line array-callback-return
        allData.map((item,i) => {
            item.school = '*';
            item.errors.school = '';
            item.degree = '*';
            item.errors.degree = '';
            item.graduation = '*';
            item.errors.graduation = '';
            item.town = '*';
            item.errors.town = '';
            item.description = '*';
            item.errors.description = '';
            item.speciality = '*';
            item.errors.speciality = '';
        });
    }
    else
    {
        text.style.display = "block";
        allData.map((item,i) => {
            item.school = '';
            item.degree = '';
            item.graduation = '';
            item.town = '';
            item.description = '';
            item.speciality = '*';
        });
    }
}

    function toggleMenu(e,i){
        let val;
        if(i === 0){
            val = e.target.parentNode.childNodes[2];
        }
        else
        {
            val = e.target.parentNode.childNodes[3];
        }
        val.classList.toggle('activ');
    }

    return(
        <LeftSide>
            <Title>Tell us about your Education</Title>
            <Message>Start with your recent education</Message>
                <Labeld style={{cursor:'pointer'}} onClick={inputHandler}>
                    <Inputd type="checkbox" id="education" /> &nbsp; I don't have any education
                </Labeld>
            <Details id="details">
                <Button className="btn btn-info" style={{float:'right'}} onClick={addEducation} id="newEx">Add new Education</Button>
                {allData.map((item,i) => {
                    return(
                        <div>
                            <Edu onClick={(e) => toggleMenu(e,i)}>Education {i + 1}</Edu>&nbsp;
                            {i > 0 && <i class="fas fa-trash" style={{cursor:'pointer'}} onClick={() => deleteHandler(item)}></i>}
                            <Inputs id="education_inputs">
                                <Label htmlFor="degree">Degree</Label>
                                <Form.Select className="form-control" name="degree" onChange={e => handleChangeEducation(e,i)}>
                                    {item.degree === '' ? <option>Select degree</option> : <option>{item.degree}</option>}
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Master">Master</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="College">Some College(no degree)</option>
                                    <option value="MBA">MBA</option>
                                    <option value="PH">PH.D.</option>
                                </Form.Select>
                                {item.errors.degree && <Error>{item.errors.degree}</Error>}
                                <Label htmlFor="school">School</Label>
                                <Input type="text" name="school" className="form-control" placeholder="Harvard" onChange={e => handleChangeEducation(e,i)} value={item.school} minLength={2} maxLength={35} required="required"/>
                                {item.errors.school && <Error>{item.errors.school}</Error>}
                                <Label htmlFor="speciality">Speciality</Label>
                                <Input type="text" name="speciality" className="form-control" placeholder="Computer Engineering" onChange={e => handleChangeEducation(e,i)} value={item.speciality} minLength={2} maxLength={35} required="required"/>
                                {item.errors.speciality && <Error>{item.errors.speciality}</Error>}
                                <Label htmlFor="graduation">Graduation Date</Label>
                                    <Form.Select className="form-control" name="graduation" onChange={e => handleChangeEducation(e,i)}>
                                        {item.graduation === '' ? <option>Select Date</option> : <option>{item.graduation}</option>}
                                        {getAllYear()}
                                    </Form.Select>
                                {item.errors.graduation && <Error>{item.errors.graduation}</Error>}
                                <Label htmlFor="town">City</Label>
                                <Input type="text" name="town" className="form-control" onChange={e => handleChangeEducation(e,i)} value={item.town} minLength={2} maxLength={20} required="required"/>
                                {item.errors.town && <Error>{item.errors.town}</Error>}
                                <Label htmlFor="description">Description</Label>
                                <TextArea name="description" className="form-control" rows="5" cols="50" maxLength="250" placeholder="Write your educational experience" onChange={e => handleChangeEducation(e,i)} value={item.description}/>
                            </Inputs>
                        </div>
                    )})}
            </Details>
            <Next>
                <Link to="/experience" className="btn btn-danger">Back</Link>
                <Button className="btn btn-primary" onClick={goToSkill}>Next to Skills</Button>
            </Next>
        </LeftSide>
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
  display: none;
`;

const Label = styled.label`
  font-size: 16px;
  margin-top: 2%;
  font-weight: 500;
`;

const Edu = styled.button`
  background-color: #E5E4EA;
  border:none;
  outline: none;
  margin:1% 0;
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

const Error = styled.p`
  color:red;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 700px;
  margin-right: 2%;
`;

const Details = styled.div`
  overflow-y: scroll;
  max-height: 500px;
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