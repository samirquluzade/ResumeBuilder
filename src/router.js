import React,{useState,useEffect} from "react";
import {Route,Redirect,Routes} from "react-router-dom";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import CV from './components/CV';
import styled from "styled-components";

const Router = () => {

    const [data,setData] = useState({
        name:'',
        surname:'',
        address:'',
        phone:'',
        phone2:'',
        email:'',
        job:'',
        employer:'',
        startDate:'',
        endDate:'',
        city:'',
        desc:'',
        school:'',
        degree:'',
        speciality:'',
        graduation:'',
        town:'',
        description:''
    });
    const [contact,setContact] = useState(true);
    const [experience,setExperience] = useState(false);
    const [education,setEducation] = useState(false);
    const [skill,setSkill] = useState(false);
    const errors = {};

    const [error,setError] = useState(errors);

    const submitContact = () => {
        setContact(true);
    }
    const submitExperience = () => {
        setExperience(true);
    }
    const submitEducation = () => {
        setEducation(true);
    }

    const validationContactCheck = () => {
        if(data.name.trim()!==''){
            errors.name = '';
        }
        else
        {
            errors.name = 'This field cannot be blank!';
        }
        if(data.surname.trim()!==''){
            errors.surname = '';
        }
        else
        {
            errors.surname = 'This field cannot be blank!';
        }
        if(data.address.trim()!==''){
            errors.address = '';
        }
        else{
            errors.address = 'This field cannot be blank!';
        }
        if(data.phone.trim()!==''){
            errors.phone = '';
        }
        else
        {
            errors.phone = 'This field cannot be blank!';
        }
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)){
            errors.email = 'Please enter a valid email address!'
        }
        else
        {
            errors.email = '';
        }
        setError(errors);
    }

    const validationExperienceCheck = () => {
        if(data.job.trim()===''){
            errors.job = 'This field cannot be blank!';
        }
        else
        {
            errors.job = '';
        }
        if(data.employer.trim()===''){
            errors.employer = 'This field cannot be blank!';
        }
        else{
            errors.employer = '';
        }
        if( data.startDate.trim()===''){
            errors.startDate = 'This field cannot be blank!';
        }
        else
        {
            errors.startDate = '';
        }
        if(data.endDate.trim()===''){
            errors.endDate = 'This field cannot be blank!';
        }
        else
        {
            errors.endDate = '';
        }
        if( data.city.trim()===''){
            errors.city = 'This field cannot be blank!';
        }
        else {
            errors.city = '';
        }
        setError(errors);
    }

    const validationEducationCheck = () => {
        if(data.school.trim()===''){
            errors.school = 'This field cannot be blank!';
        }
        else
        {
            errors.school = '';
        }
        if(data.degree.trim()===''){
            errors.degree = 'This field cannot be blank!';
        }
        else{
            errors.degree = '';
        }
        if( data.speciality.trim()===''){
            errors.speciality = 'This field cannot be blank!';
        }
        else
        {
            errors.speciality = '';
        }
        if(data.graduation.trim()===''){
            errors.graduation = 'This field cannot be blank!';
        }
        else
        {
            errors.graduation = '';
        }
        if( data.town.trim()===''){
            errors.town = 'This field cannot be blank!';
        }
        else {
            errors.town = '';
        }
        setError(errors);
    }

    const goToExperience = () => {
        validationContactCheck();
        if(errors.name==='' && errors.surname==='' && errors.address==='' && errors.phone==='' && errors.email==='')
        {
            setExperience(true);
            setContact(false);
        }
    }

    const handleChange = e => {
        const {name,value} = e.target;
        setData({...data,[name]:value});
        validationContactCheck();
        validationExperienceCheck();
        // validationEducationCheck();
    }

    const goToEducation = () => {
        validationExperienceCheck();
        if(errors.job==='' && errors.employer==='' && errors.startDate==='' && errors.endDate==='' && errors.city==='')
        {
            setEducation(true);
            setExperience(false);
        }
    }

    const goToAbout = () => {
        validationEducationCheck();
        if(errors.degree==='' && errors.school==='' && errors.town==='' && errors.speciality==='' && errors.graduation==='')
        {
            setSkill(true);
            setEducation(false);
        }
    }

    const backTo = e => {
        if(experience){
            setExperience(false);
            setContact(true);
        }
        else if(education){
            setEducation(false);
            setContact(false);
            setExperience(true);
        }
    }

    return(
        <Page>
          <Routes>
              <Route exact path="/" element={[<Contact handleChange={handleChange} data={data} error={error}/>,<CV data={data}/>]} />
              <Route exact path="/experience" element={[<Experience handleChange={handleChange} data={data} errors={error} backTo={backTo}/>,<CV data={data}/>]} />
          </Routes>
        </Page>
    );
}
const Page = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 2%;
`;

export default Router;