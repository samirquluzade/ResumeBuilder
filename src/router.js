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
        }
        // school:'',
        // degree:'',
        // speciality:'',
        // graduation:'',
        // town:'',
        // description:''
    }]);
    localStorage.getItem("data")
        ? localStorage.getItem("data")
        : localStorage.setItem("data", JSON.stringify(data));
    useEffect(() => {
        data = JSON.parse(localStorage.getItem("data"));
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


    const [contact,setContact] = useState(true);
    const [experience,setExperience] = useState(false);
    const [education,setEducation] = useState(false);
    const [skill,setSkill] = useState(false);

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

    // const validationExperienceCheck = () => {
    //     if(data.job.trim()===''){
    //         errors.job = 'This field cannot be blank!';
    //     }
    //     else
    //     {
    //         errors.job = '';
    //     }
    //     if(data.employer.trim()===''){
    //         errors.employer = 'This field cannot be blank!';
    //     }
    //     else{
    //         errors.employer = '';
    //     }
    //     if( data.startDate.trim()===''){
    //         errors.startDate = 'This field cannot be blank!';
    //     }
    //     else
    //     {
    //         errors.startDate = '';
    //     }
    //     if(data.endDate.trim()===''){
    //         errors.endDate = 'This field cannot be blank!';
    //     }
    //     else
    //     {
    //         errors.endDate = '';
    //     }
    //     if( data.city.trim()===''){
    //         errors.city = 'This field cannot be blank!';
    //     }
    //     else {
    //         errors.city = '';
    //     }
    //     setError(errors);
    // }
    //
    // const validationEducationCheck = () => {
    //     if(data.school.trim()===''){
    //         errors.school = 'This field cannot be blank!';
    //     }
    //     else
    //     {
    //         errors.school = '';
    //     }
    //     if(data.degree.trim()===''){
    //         errors.degree = 'This field cannot be blank!';
    //     }
    //     else{
    //         errors.degree = '';
    //     }
    //     if( data.speciality.trim()===''){
    //         errors.speciality = 'This field cannot be blank!';
    //     }
    //     else
    //     {
    //         errors.speciality = '';
    //     }
    //     if(data.graduation.trim()===''){
    //         errors.graduation = 'This field cannot be blank!';
    //     }
    //     else
    //     {
    //         errors.graduation = '';
    //     }
    //     if( data.town.trim()===''){
    //         errors.town = 'This field cannot be blank!';
    //     }
    //     else {
    //         errors.town = '';
    //     }
    //     setError(errors);
    // }
    //
    const goToExperience = () => {
        // validationContactCheck();
        if(data[0].errors.name==='' && data[0].errors.surname==='' && data[0].errors.address==='' && data[0].errors.phone==='' && data[0].errors.email==='')
        {
            navigate("/experience");
        }
    }

    const addExperience = () =>{
        store.insert(data);
        // console.log(data);
        // console.log(store);
        setData([...data, {name:data[0].name,surname:data[0].surname,address: data[0].address,phone:data[0].phone,phone2:data[0].phone2,email:data[0].email,job:'',employer: '',startDate:'',endDate:'',city:'',desc:'',errors: {
                job:'',employer: '',startDate: '',endDate: '',desc: ''
            }}]);
    }

    const handleChange = (e,i) => {
        const {name,value} = e.target;

        const list = [...data];
        list[i][name] = value;
        validationContactCheck();

        setData(list);
        localStorage.setItem("data",JSON.stringify(data));
        // validationExperienceCheck();
        // validationEducationCheck();
    }

    // const goToEducation = () => {
    //     validationExperienceCheck();
    //     if(errors.job==='' && errors.employer==='' && errors.startDate==='' && errors.endDate==='' && errors.city==='')
    //     {
    //         setEducation(true);
    //         setExperience(false);
    //     }
    // }
    //
    // const goToAbout = () => {
    //     validationEducationCheck();
    //     if(errors.degree==='' && errors.school==='' && errors.town==='' && errors.speciality==='' && errors.graduation==='')
    //     {
    //         setSkill(true);
    //         setEducation(false);
    //     }
    // }

    return(
        <Page>
          <Routes>
              <Route exact path="/" element={[<Contact handleChange={handleChange} goToExperience={goToExperience} data={data}/>,<CV data={data}/>]} />
              <Route exact path="/contact" element={[<Contact handleChange={handleChange} data={data}/>,<CV data={data}/>]} />
              <Route exact path="/experience" element={[<Experience handleChange={handleChange} data={data} addExperience={addExperience}/>,<CV data={data}/>]} />
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