import React from 'react';
import styled from 'styled-components';

const CV2 = () => {
    return(
        <ResumeExample>
            <HeaderSec />
            <Secs>
                <LeftSec>
                    <LeftImg>
                        <img src="/images/user.svg" alt=""/>
                    </LeftImg>
                    <LeftAbout>
                        <Title>PROFILE</Title>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eaque nemo temporibus! Ab accusamus adipisci alias aliquid dolor eos et explicabo, facere fugit minus necessitatibus non odio optio quidem, similique temporibus vel? Beatae consequuntur debitis neque quia repellendus sint veritatis. Amet dolore facere libero possimus repudiandae saepe sequi, tenetur!</Desc>
                    </LeftAbout>
                    <LeftContact>
                        <Title>CONTACT</Title>
                        <Info>
                            <p>PHONE:</p>
                            <p>0852105210</p>
                        </Info>
                        <Info>
                            <p>Location:</p>
                            <p>Location goes here</p>
                        </Info>
                        <Info>
                            <p>EMAIL:</p>
                            <p>admin@example.com</p>
                        </Info>
                    </LeftContact>
                    <LeftHobbies>
                        <Title>HOBBIES</Title>
                        <Info>
                            <p>Hobby #1</p>
                            <p>Hobby #2</p>
                            <p>Hobby #3</p>
                            <p>Hobby #4</p>
                        </Info>
                    </LeftHobbies>
                </LeftSec>
                <RightSec>
                    <FullName>
                        <p>SAMIR GULUZADEH</p>
                        <JobTitle>
                            <p>Front End Developer</p>
                        </JobTitle>
                    </FullName>
                    <Education>
                        <RightTitle>EDUCATION</RightTitle>
                        <EducationPro>
                            <EduName>BEU</EduName>
                            <EduDate>09/2017 - 07/2021</EduDate>
                            <EduSpec>Computer Engineering</EduSpec>
                        </EducationPro>
                        <EducationPro>
                            <EduName>BEU</EduName>
                            <EduDate>09/2017 - 07/2021</EduDate>
                            <EduSpec>Computer Engineering</EduSpec>
                        </EducationPro>
                    </Education>
                    <Education>
                        <RightTitle>WORK EXPERIENCE</RightTitle>
                        <EducationPro>
                            <EduName>Vabiss</EduName>
                            <EduDate>09/2021 - 11/2021</EduDate>
                            <EduSpec>Front End Developer</EduSpec>
                        </EducationPro>
                        <EducationPro>
                            <EduName>Vabiss</EduName>
                            <EduDate>09/2021 - 11/2021</EduDate>
                            <EduSpec>Front End Developer</EduSpec>
                        </EducationPro>
                        <EducationPro>
                            <EduName>Vabiss</EduName>
                            <EduDate>09/2021 - 11/2021</EduDate>
                            <EduSpec>Front End Developer</EduSpec>
                        </EducationPro>
                    </Education>
                    <Skills>
                        <RightTitle>SKILLS</RightTitle>
                        <Skill>
                            <SkillName>Adobe Photoshop</SkillName>
                            <SkillPercent>
                                <LevelPercent>50%</LevelPercent>
                            </SkillPercent>
                        </Skill>
                        <Skill>
                            <SkillName>Adobe Photoshop</SkillName>
                            <SkillPercent>
                                <LevelPercent>50%</LevelPercent>
                            </SkillPercent>
                        </Skill>
                        <Skill>
                            <SkillName>Adobe Photoshop</SkillName>
                            <SkillPercent>
                                <LevelPercent>50%</LevelPercent>
                            </SkillPercent>
                        </Skill>
                        <Skill>
                            <SkillName>Adobe Photoshop</SkillName>
                            <SkillPercent>
                                <LevelPercent>50%</LevelPercent>
                            </SkillPercent>
                        </Skill><Skill>
                        <SkillName>Adobe Photoshop</SkillName>
                        <SkillPercent>
                            <LevelPercent>50%</LevelPercent>
                        </SkillPercent>
                    </Skill><Skill>
                        <SkillName>Adobe Photoshop</SkillName>
                        <SkillPercent>
                            <LevelPercent>50%</LevelPercent>
                        </SkillPercent>
                    </Skill>
                        <Skill>
                            <SkillName>Adobe Photoshop</SkillName>
                            <SkillPercent>
                                <LevelPercent>50%</LevelPercent>
                            </SkillPercent>
                        </Skill>
                    </Skills>
                </RightSec>
            </Secs>
        </ResumeExample>
    )
}

const HeaderSec = styled.div`
  padding-bottom: 2%;
  background-color: #d9d9d9;
`;
const Secs = styled.div`
  display: flex;
  flex-direction: row;
`;
const LeftSec = styled.div`
  width: 34%;
  background-color: #d9d9d9;
  height: 745px;
  display: flex;
  flex-direction: column;
  padding: 0 2%;
`;
const RightSec = styled.div`
  background-color: white;
  width: 66%;
  display: flex;
  flex-direction: column;
  padding: 0 2%;
`;
const ResumeExample = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 745px;
    padding-top: 1%;
`;
const LeftImg = styled.div`
  img{
    height: 140px;
    border-radius: 100px;
    border: 3px solid dodgerblue;
  }
  text-align: center;
`;
const LeftAbout = styled.div`
  padding-top: 7%;
`;
const LeftContact = styled.div`
  padding-top: 7%;
`;
const Title = styled.p`
    color:dodgerblue; 
    font-size: 16px;
`;
const Desc = styled.p`
  font-size: 13px;
`;
const Info = styled.div`
    padding-top: 1%;
    p{
      font-size: 13px;
    }
`;
const LeftHobbies = styled.div`
  padding-top: 5%;
`;
const FullName = styled.div`
    padding-top: 2%;
    p{
      font-size: 44px;
      font-weight: 600;
    }
`;
const JobTitle = styled.div`
  p{
    font-size: 22px;
    font-weight: 500;
  }
`;
const Education = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2%;
`;
const RightTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  &::after{
    content: "";
    width: 100%;
    background-color: dodgerblue;
    height: 2px;
    display: block;
  }
`;
const EducationPro = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1%;
  &::after{
    content: "";
    width: 100%;
    background-color: dodgerblue;
    height: 1px;
    display: block;
  }
`;
const EduName = styled.div`
  font-weight: 700;
  font-size: 15px;
`;
const EduDate = styled.div`
  font-size: 12px;
`;
const EduSpec = styled.div`
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 1%;
`;
const Skills = styled.div`
  padding-top: 2%;
  display: flex;
  flex-direction: column;
`;
const Skill = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1%;
  white-space: nowrap;
`;
const SkillName = styled.p`
  font-size: 12px;
`;

const SkillPercent = styled.div`
  width: 100%;
  height: 12px;
  border:none;
  position: relative;
  background: #847C7C;
  margin: auto 2%;
`;

const LevelPercent = styled.div`
  position: absolute;
  background: dodgerblue;
  height: 12px;
  width: 50%;
  text-align: center;
  font-size: 10px;
`;
export default CV2;