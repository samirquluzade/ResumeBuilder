import React, {useEffect} from 'react';
import styled from 'styled-components';

const MainSection = (props) => {

    return(
        <Section>
          <Inspiration>
              <p className="typing">Create The Best <span>Resume</span><br/> For Yourself Online</p>
          </Inspiration>
            <CreateButtonDiv>
                <CreateButton>
                    <span>Create My Resume</span>
                    <i className="fas fa-arrow-right right-button"></i>
                </CreateButton>
            </CreateButtonDiv>
            <MostResumes>
                <ResumeTitle>
                    <h2>Most selected resumes</h2>
                </ResumeTitle>
                <ResumeCards>
                    <ResumeCard>

                    </ResumeCard>
                </ResumeCards>
            </MostResumes>
        </Section>
    );
}

const Section = styled.div`
    margin: 6% 8%;
`;

const Inspiration = styled.div`
    text-align: center;
    p{
      font-size: 45px;
      color:#5b84b1ff;
    }
    p > span{
      font-weight: 700;
      color:#fc766aff;
    }
    @media(max-width: 768px){
        p{
          font-size: 32px;
        }
    }
`;

const CreateButton = styled.a`
    padding: 35px;
    font-size: 18px;
    background-color: #F37112;
    border-radius: 15px;
    transition: .7s;
    cursor: pointer;
    span{
      color:white;
    }
    i{
      margin-left: 30px;
      float:right;
      display: none;
      color:white;
    }
    @media(max-width:768px){
      padding: 20px;
    }
`;

const CreateButtonDiv = styled.div`
    text-align: center;
    margin:5% 0;
    i{
      font-size: 20px;
    }
    ${CreateButton}:hover{
      i{
        float:none;
        display: inline-block;
      }
      background-color: maroon;
    }
    @media(max-width: 768px){
      margin: 10% 0;
    }
`;

const MostResumes = styled.div`
    
`;

const ResumeTitle = styled.div`

`;

const ResumeCards = styled.div`

`;

const ResumeCard = styled.div`

`;

export default MainSection;