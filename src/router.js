import React,{useState,useEffect} from "react";
import {Route,useNavigate,Routes} from "react-router-dom";
import CustomStore from'devextreme/data/custom_store';

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import CV from './components/CV';
import styled from "styled-components";

const Router = () => {

    const navigate = useNavigate();

    let [data,setData] = useState([{
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
        errors:{
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
        },
    }]);
    let [education,setEducation] = useState([{
        school:'',
        degree:'',
        speciality:'',
        graduation:'',
        town:'',
        errors:{
            school:'',
            degree:'',
            speciality:'',
            graduation:'',
            town:''
        }
    }]);
    localStorage.getItem("data")
        ? localStorage.getItem("data")
        : localStorage.setItem("data", JSON.stringify(data));
    localStorage.getItem("education")
        ? localStorage.getItem("education")
        : localStorage.setItem("education", JSON.stringify(education));
    useEffect(() => {
        data = JSON.parse(localStorage.getItem("data"));
        education = JSON.parse(localStorage.getItem("education"));
    },[]);

    let k,all;
    const store = new CustomStore({
        load:() => {
            k = localStorage.getItem('data');
            all = JSON.parse(k);
            return all;
        },
        insert:values => {
            const d = localStorage.getItem("data");
            const newItem = {
                name:values.name,
                surname:values.surname,
                address:values.address,
                phone:values.phone,
                phone2:values.phone2,
                email:values.email,
            }
            let newItems = [newItem];
            localStorage.setItem("data",JSON.stringify(newItems));
        }
    })

    const validationContactCheck = () => {
        if(data[0].name.trim()!==''){
            data[0].errors.name = '';
        }
        else
        {
            data[0].errors.name = 'This field cannot be blank!';
        }
        if(data[0].surname.trim()!==''){
            data[0].errors.surname = '';
        }
        else
        {
            data[0].errors.surname = 'This field cannot be blank!';
        }
        if(data[0].address.trim()!==''){
            data[0].errors.address = '';
        }
        else{
            data[0].errors.address = 'This field cannot be blank!';
        }
        if(data[0].phone.trim()!==''){
            data[0].errors.phone = '';
        }
        else
        {
            data[0].errors.phone = 'This field cannot be blank!';
        }
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data[0].email)){
            data[0].errors.email = 'Please enter a valid email address!'
        }
        else
        {
            data[0].errors.email = '';
        }
    }

    const validationExperienceCheck = () => {
        data.map((item) => {
            if(item.job===''){
                item.errors.job = 'This field cannot be blank!';
            }
            else
            {
                item.errors.job = '';
            }
            if(item.employer===''){
                item.errors.employer = 'This field cannot be blank!';
            }
            else{
                item.errors.employer = '';
            }
            if(item.startDate===''){
                item.errors.startDate = 'This field cannot be blank!';
            }
            else
            {
                item.errors.startDate = '';
            }
            if(item.endDate===''){
                item.errors.endDate = 'This field cannot be blank!';
            }
            else
            {
                item.errors.endDate = '';
            }
            if(item.city===''){
                item.errors.city = 'This field cannot be blank!';
            }
            else {
                item.errors.city = '';
            }
        })
    }

    const validationEducationCheck = () => {
        education.map((item) => {
        if(item.school.trim()===''){
            item.errors.school = 'This field cannot be blank!';
        }
        else
        {
            item.errors.school = '';
        }
        if(item.degree.trim()===''){
            item.errors.degree = 'This field cannot be blank!';
        }
        else{
            item.errors.degree = '';
        }
        if(item.speciality.trim()===''){
            item.errors.speciality = 'This field cannot be blank!';
        }
        else
        {
            item.errors.speciality = '';
        }
        if(item.graduation.trim()===''){
            item.errors.graduation = 'This field cannot be blank!';
        }
        else
        {
            item.errors.graduation = '';
        }
        if(item.town.trim()===''){
            item.errors.town = 'This field cannot be blank!';
        }
        else {
            item.errors.town = '';
        }
        })
    }

    const goToExperience = () => {
        validationContactCheck();
        if(data[0].errors.name==='' && data[0].errors.surname==='' && data[0].errors.address==='' && data[0].errors.phone==='' && data[0].errors.email==='')
        {
            navigate("/experience");
        }
    }

    const addExperience = () =>{
        setData([...data,{job:'',employer: '',startDate:'',endDate:'',city:'',desc:'',errors: {
                job:'',employer: '',startDate: '',endDate: '',desc: ''
            }}]);
    }

    const addEducation = () => {
        setEducation([...education,{school: '',degree: '',graduation: '',speciality: '',town: '',description: '',errors:{
                school: '',degree: '',graduation: '',speciality: '',town: '',description: ''
            }}]);
    }

    const handleChange = (e,i) => {
        const {name,value} = e.target;

        const list = [...data];
        list[i][name] = value;
        validationContactCheck();
        validationExperienceCheck();
        setData(list);
        localStorage.setItem("data",JSON.stringify(data));
    }

    const handleChangeEducation = (e,i) => {
        const {name,value} = e.target;

        const list = [...education];
        list[i][name] = value;
        validationEducationCheck();
        setEducation(list);
        localStorage.setItem('education',JSON.stringify(education));
    }

    const goToEducation = () => {
        validationExperienceCheck();
        let k = 0;
            for(let i = 0;i<data.length;i++){
                if(data[i].errors.job === '' && data[i].errors.employer==='' && data[i].errors.startDate === '' && data[i].errors.endDate === '' && data[i].errors.city === '' && data[i].errors.desc === ''){
                    k++;
                }
            }
        console.log(k);
        if(k === data.length){
            navigate('/education');
        }
    }

    // const goToAbout = () => {
    //     validationEducationCheck();
    //     if(degree==='' && errors.school==='' && errors.town==='' && errors.speciality==='' && errors.graduation==='')
    //     {
    //         setSkill(true);
    //         setEducation(false);
    //     }
    // }

    return(
        <Page>
          <Routes>
              <Route exact path="/" element={[<Contact handleChange={handleChange} goToExperience={goToExperience} data={data}/>,<CV data={data} education={education}/>]} />
              <Route exact path="/contact" element={[<Contact handleChange={handleChange} data={data} goToExperience={goToExperience}/>,<CV data={data} education={education}/>]} />
              <Route exact path="/experience" element={[<Experience goToEducation={goToEducation} handleChange={handleChange} data={data} addExperience={addExperience}/>,<CV data={data} education={education}/>]} />
              <Route exact path="/education" element={[<Education handleChangeEducation={handleChangeEducation} data={education} addEducation={addEducation}/>,<CV data={data} education={education}/>]} />
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