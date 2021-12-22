import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

const Skills = ({backTo,data,goToAbout,addSkill,handleChangeSkill,handleChangeSkillLevel}) => {

    const [allData,setAllData] = useState(data);

    useEffect(() => {
        setAllData(data);
    },[data]);

    function toggleMenu(e){
        const val = e.target.parentNode.childNodes[1];
        val.classList.toggle('activ');
    }

    return(
        <LeftSide>
            <Title>Tell us about your Education</Title>
            <Details id="details">
                <Button className="btn btn-info" style={{float:'right'}} onClick={addSkill} id="newEx">Add new Skill</Button>
                {allData.map((item,i) => {
                    return(
                        <div>
                            <Edu onClick={toggleMenu}>Skill {i + 1}</Edu>
                            <Inputs id="education_inputs">
                                <Label htmlFor="skill">Skill</Label>
                                <Input type="text" name="skill" className="form-control" placeholder="Type your skill here" onChange={e => handleChangeSkill(e,i)} value={item.skill} minLength={2} maxLength={20} required="required"/>
                                {item.errors.skill && <Error>{item.errors.skill}</Error>}
                                <Label htmlFor="level">Level</Label>
                                <Levels>
                                    <li value="20" onClick={e => handleChangeSkillLevel(e,i)}>1/5</li>
                                    <Line />
                                    <li value="40" onClick={e => handleChangeSkillLevel(e,i)}>2/5</li>
                                    <Line />
                                    <li value="60" onClick={e => handleChangeSkillLevel(e,i)}>3/5</li>
                                    <Line />
                                    <li value="80" onClick={e => handleChangeSkillLevel(e,i)}>4/5</li>
                                    <Line />
                                    <li value="100" onClick={e => handleChangeSkillLevel(e,i)}>5/5</li>
                                </Levels>
                            </Inputs>
                        </div>
                    )})}
            </Details>
            <Next>
                <Link to="/experience" className="btn btn-danger" onClick={backTo}>Back</Link>
                <Button className="btn btn-primary" onClick={goToAbout}>Next to About</Button>
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

const Line = styled.div``;

const Levels = styled.div`
  background: white;
  width: 100%;
  padding: 7px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  li{
    padding: 10px;
    cursor: pointer;
    list-style-type: none;
  }
  ${Line}{
    flex-direction: row;
    width: 1px;
    height: 30px;
    background: gray;
    margin: auto 0;
  }
`;



export default Skills;