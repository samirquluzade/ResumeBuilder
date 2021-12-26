import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Skills = ({data,goToAbout,addSkill,handleChangeSkill,handleChangeSkillLevel,deleteHandler}) => {

    const [allData,setAllData] = useState(data);

    useEffect(() => {
        setAllData(data);
    },[data]);

    function toggleMenu(e){
        const val = e.target.parentNode.childNodes[3];
        val.classList.toggle('activ');
    }

    function activeClass(e){
        for(let i = 0; i < 9;i++){
            e.target.parentNode.children[i].classList.remove('level');
        }
        e.target.classList.add('level');
    }

    return(
        <LeftSide>
            <Title>Tell us about your Skills</Title>
            <Details id="details">
                <Button className="btn btn-info" style={{float:'right'}} onClick={addSkill} id="newEx">Add new Skill</Button>
                {allData.map((item,i) => {
                    return(
                        <div>
                            <Edu onClick={toggleMenu}>Skill {i + 1}</Edu>
                            <i class="fas fa-trash" style={{cursor:'pointer'}} onClick={() => deleteHandler(item)}></i>&nbsp;
                            <Inputs id="education_inputs">
                                <Label htmlFor="skill">Skill</Label>
                                <Input type="text" name="skill" className="form-control" placeholder="Type your skill here" onChange={e => handleChangeSkill(e,i)} value={item.skill} minLength={2} maxLength={20} required="required"/>
                                {item.errors.skill && <Error>{item.errors.skill}</Error>}
                                <Label htmlFor="level">Level</Label>
                                <Levels>
                                    <li value="20" onClick={e => {handleChangeSkillLevel(e,i);activeClass(e)}}>1/5</li>
                                    <Line />
                                    <li value="40" onClick={e => {handleChangeSkillLevel(e,i);activeClass(e)}}>2/5</li>
                                    <Line />
                                    <li value="60" onClick={e => {handleChangeSkillLevel(e,i);activeClass(e)}}>3/5</li>
                                    <Line />
                                    <li value="80" onClick={e => {handleChangeSkillLevel(e,i);activeClass(e)}}>4/5</li>
                                    <Line />
                                    <li value="100" onClick={e => {handleChangeSkillLevel(e,i);activeClass(e)}}>5/5</li>
                                </Levels>
                            </Inputs>
                        </div>
                    )})}
            </Details>
            <Next>
                <Link to="/education" className="btn btn-danger">Back</Link>
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
  overflow-y: scroll;
  max-height: 500px;
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
    margin: auto 1%;
  }
`;



export default Skills;