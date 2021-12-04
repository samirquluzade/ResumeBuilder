import React from 'react';
import styled from "styled-components";

const MainUserSection = () => {
    return(
        <Section>
            <ResumeTitle><h2>Resumes</h2></ResumeTitle>
            <CategoryGroup>
                <CategoryMobile>
                <CategoryName className="active">All</CategoryName>
                <CategoryName>Finance</CategoryName>
                <CategoryName>IT</CategoryName>
                </CategoryMobile>
                <CategoryMobile>
                <CategoryName>Sales</CategoryName>
                <CategoryName>Marketing</CategoryName>
                <CategoryName>Administrative</CategoryName>
                </CategoryMobile>
                <CategoryMobile>
                <CategoryName>Catering</CategoryName>
                <CategoryName>Maintainance</CategoryName>
                <CategoryName>Medical</CategoryName>
                </CategoryMobile>
                <CategoryMobile>
                <CategoryName>Engineering</CategoryName>
                <CategoryName>Other</CategoryName>
                </CategoryMobile>
            </CategoryGroup>
            <ResumeCards>
                <div className="row" style={{width:'100%'}}>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <ResumeCard></ResumeCard>
                    </div>
                </div>
            </ResumeCards>
        </Section>
    );
};

const Section = styled.div`
  margin: 5% 8%;
`;

const ResumeTitle = styled.div`
  text-align: center;
  margin:8% 0 3% 0;
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
`;

const CategoryGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3%;
`;

const CategoryName = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;
  margin-bottom: 10px;
  &:hover{
    box-shadow: inset 0px 0px 0px 1px #025cb9;
    background-color: #ecf4fe;
    border-color: #ecf4fe;
  }
`;

const CategoryMobile = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 1060px){
    flex-direction: column;
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

export default MainUserSection;