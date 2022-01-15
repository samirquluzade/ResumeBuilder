import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const About = ({data,link,goToFinish,handleChangeAbout,handleChangeLevel,handleChangeLink,addLanguage,addLink,deleteHandler,deleteHandlerLink}) => {

    const [allData,setAllData] = useState(data);
    const [linkData,setLinkData] = useState(link);

    useEffect(() => {
        setAllData(data);
        setLinkData(link);
    },[data,link]);

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

    function toggleMenuLink(e,i){
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

    function activeClass(e){
        for(let i = 0; i < 9;i++){
            e.target.parentNode.children[i].classList.remove('level');
        }
        e.target.classList.add('level');
    }
    return(
        <LeftSide>
            <Title>Tell us about yourself</Title>
            <Details id="details">
                <Button className="btn btn-info" style={{float:'right'}} onClick={addLanguage} id="newEx">Add new Language</Button>
                <Simple onClick={addLink}>
                    <Button className="btn btn-warning" style={{float:'right'}} id="newEx">Add new Social Link</Button>
                </Simple>
                <Inputs id="education_input">
                    <Label htmlFor="about">About</Label>
                    <TextArea name="about" className="form-control" rows="6" cols="50" maxLength="350" placeholder="Write about yourself" onChange={e => handleChangeAbout(e,0)} value={data[0].about}/>
                    {data[0].error.about!=='' && <Error>{data[0].error.about}</Error>}
                </Inputs>
                {allData.map((item,i) => {
                    return(
                        <div>
                            <Edu onClick={(e) => toggleMenu(e,i)}>Language {i + 1}</Edu>
                            {i > 0 && <i class="fas fa-trash" style={{cursor:'pointer'}} onClick={() => deleteHandler(item)}></i>}&nbsp;
                            <PInputs>
                                <Label htmlFor="langName">Language</Label>
                                <Input type="text" name="langName" className="form-control" placeholder="Type your language here" onChange={e => handleChangeAbout(e,i)} value={item.langName} minLength={2} maxLength={20}/>
                                <Label htmlFor="langLevel">Level</Label>
                                <Levels>
                                    <li value="20" onClick={e => {handleChangeLevel(e,i);activeClass(e)}}>1/5</li>
                                    <Line />
                                    <li value="40" onClick={e => {handleChangeLevel(e,i);activeClass(e)}}>2/5</li>
                                    <Line />
                                    <li value="60" onClick={e => {handleChangeLevel(e,i);activeClass(e)}}>3/5</li>
                                    <Line />
                                    <li value="80" onClick={e => {handleChangeLevel(e,i);activeClass(e)}}>4/5</li>
                                    <Line />
                                    <li value="100" onClick={e => {handleChangeLevel(e,i);activeClass(e)}}>5/5</li>
                                </Levels>
                            </PInputs>
                        </div>
                    )})}
                {linkData.map((item,i) => {
                    return(
                        <div>
                            <Edu onClick={(e) => toggleMenuLink(e,i)}>Social Link {i + 1}</Edu>
                            <i class="fas fa-trash" style={{cursor:'pointer'}} onClick={() => deleteHandlerLink(item)}></i>&nbsp;
                            <SInputs>
                                <Label htmlFor="links">Link</Label>
                                <Input type="text" name="links" className="form-control" placeholder="Type your social links(Linkedin,Github,Behance or other)" onChange={e => handleChangeLink(e,i)} value={item.links} minLength={2} maxLength={80}/>
                            </SInputs>
                        </div>
                    )})}
            </Details>
            <Next>
                <Link to="/skills" className="btn btn-danger">Back</Link>
                <Button className="btn btn-primary" onClick={goToFinish}>Next to Finish</Button>
            </Next>
        </LeftSide>
    );
};

const Next = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
`;

const Simple = styled.div`
  float: right;
  margin-right: 1%;
`;

const Title = styled.h3`
  text-align: center;
`;

const Inputs = styled.div`
    padding-top: 2%;
`;

const PInputs = styled.div`
  display: none;
`;

const SInputs = styled.div`
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

export default About;