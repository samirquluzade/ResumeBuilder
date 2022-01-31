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
                    <div className="row" style={{width:'100%'}}>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <ResumeCard></ResumeCard>
                        </div>
                        {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
                        {/*    <ResumeCard></ResumeCard>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
                        {/*    <ResumeCard></ResumeCard>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
                        {/*    <ResumeCard></ResumeCard>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
                        {/*    <ResumeCard></ResumeCard>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
                        {/*    <ResumeCard></ResumeCard>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
                        {/*    <ResumeCard></ResumeCard>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
                        {/*    <ResumeCard></ResumeCard>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
                        {/*    <ResumeCard></ResumeCard>*/}
                        {/*</div>*/}
                    </div>
                </ResumeCards>
            </MostResumes>
        </Section>
    );
}

const Section = styled.div`
    margin: 6% 8%;
    @media(max-width: 768px){
      margin: 18% 8%;
    }
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
    @media(min-width: 769px) and (max-width: 992px){
      p{
        font-size: 36px;
      }
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
  @media(min-width: 769px) and (max-width: 992px){
    padding: 26px;
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
  text-align: center;
  margin:8% 0 5% 0;
  @media(min-width: 769px) and (max-width: 992px){
    h2{
      font-size: 28px;
    }
    margin-top: 10%;
  }
  @media(max-width: 768px){
    h2{
      font-size: 28px;
    }
    margin-top: 18%;
  }
`;

const ResumeCards = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResumeCard = styled.div`
    height: 450px;
    min-width: 325px;
    background-color: white;
    margin-left: 2%;
    margin-bottom: 5%;
    //@media(max-width: 768px){
    //  height: 300px;
    //  min-width: 200px;
    //}
`;

export default MainSection;