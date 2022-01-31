import React,{useState,useEffect} from "react";
import {Route,useNavigate,Routes} from "react-router-dom";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import CV from './components/CV';
import styled from "styled-components";
import Skills from "./components/Skills";
import About from "./components/About";

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
    let [skills,setSkills] = useState([{
        skill:'',
        level:'',
        errors:{
            skill:'',
            level:''
        }
    }]);
    let [abouts,setAbouts] = useState([{
        about:'',
        langName:'',
        langLevel:'',
        error:{
            about:'',
        }
    }]);
    let [link,setLink] = useState([{
        links:'',
        error:{
            links:''
        }
    }])

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
        // eslint-disable-next-line array-callback-return
        data.map((item) => {
            if(item.job.trim()===''){
                item.errors.job = 'This field cannot be blank!';
            }
            else
            {
                item.errors.job = '';
            }
            if(item.employer.trim()===''){
                item.errors.employer = 'This field cannot be blank!';
            }
            else{
                item.errors.employer = '';
            }
            if(item.startDate.trim()===''){
                item.errors.startDate = 'This field cannot be blank!';
            }
            else
            {
                item.errors.startDate = '';
            }
            if(item.endDate.trim()===''){
                item.errors.endDate = 'This field cannot be blank!';
            }
            else
            {
                item.errors.endDate = '';
            }
            if(item.city.trim()===''){
                item.errors.city = 'This field cannot be blank!';
            }
            else {
                item.errors.city = '';
            }
        })
    }

    const validationEducationCheck = () => {
        // eslint-disable-next-line array-callback-return
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

    const validationSkillsCheck = () => {
        // eslint-disable-next-line array-callback-return
        skills.map((item) => {
            if (item.skill.trim() === '') {
                item.errors.skill = 'This field cannot be blank!';
            } else {
                item.errors.skill = '';
            }
        });
    }

    const validationAboutCheck = () => {
        if(abouts[0].about.trim() === ''){
            abouts[0].error.about = 'This field cannot be blank!';
        }
        else
        {
            abouts[0].error.about = '';
        }
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
        localStorage.setItem("data", JSON.stringify(data));
    }

    const addEducation = () => {
        setEducation([...education,{school: '',degree: '',graduation: '',speciality: '',town: '',description: '',errors:{
                school: '',degree: '',graduation: '',speciality: '',town: '',description: ''
            }}]);
        localStorage.setItem("education", JSON.stringify(education));
    }

    const addSkill = () => {
        setSkills([...skills,{skill:'',level:'',errors:{
                skill:'',level:''
            }}]);
        localStorage.setItem("skills", JSON.stringify(skills));
    }

    const addLanguage = () => {
        setAbouts([...abouts,{langName:'',langLevel:'',errors:{
                langName:'',langLevel:''
            }}]);
        localStorage.setItem("about", JSON.stringify(abouts));
    }

    const addLink = () => {
        setLink([...link,{links:'',errors:{links:''}}]);
        localStorage.setItem("link", JSON.stringify(link));
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localStorage.getItem("data") ? data = JSON.parse(localStorage.getItem("data")) : localStorage.setItem("data", JSON.stringify(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localStorage.getItem("education") ? education = JSON.parse(localStorage.getItem("education")) : localStorage.setItem("education", JSON.stringify(education));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localStorage.getItem("skills") ? skills = JSON.parse(localStorage.getItem("skills")) : localStorage.setItem("skills", JSON.stringify(skills));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localStorage.getItem("about") ? abouts = JSON.parse(localStorage.getItem("about")) : localStorage.setItem("about", JSON.stringify(abouts));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localStorage.getItem("link") ? link = JSON.parse(localStorage.getItem("link")) : localStorage.setItem("link", JSON.stringify(link));
    },[data,education,skills,abouts,link]);

    const settingData = (list) => {
        setData(list);
    }

    const handleChange = (e,i) => {
        const {name,value} = e.target;

        const list = [...data];
        console.log(list);
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

    const handleChangeSkill = (e,i) => {
        const {name,value} = e.target;

        const list = [...skills];
        list[i][name] = value;
        validationSkillsCheck();
        setSkills(list);
        localStorage.setItem('skills',JSON.stringify(skills));
    }

    const handleChangeSkillLevel = (e,i) => {
        const {value} = e.target;

        const list = [...skills];
        list[i]['level'] = value;
        setSkills(list);
        localStorage.setItem('skills',JSON.stringify(skills));
    }

    const handleChangeLevel = (e,i) => {
        const {value} = e.target;

        const list = [...abouts];
        list[i]['langLevel'] = value;
        setAbouts(list);
        localStorage.setItem('about',JSON.stringify(abouts));
    }

    const handleChangeAbout = (e,i) => {
        const {name,value} = e.target;

        const list = [...abouts];
        list[i][name] = value;
        validationAboutCheck();
        setAbouts(list);
        localStorage.setItem('about',JSON.stringify(abouts));
    }

    const handleChangeLink = (e,i) => {
        const {name,value} = e.target;

        const list = [...link];
        list[i][name] = value;
        setLink(list);
        localStorage.setItem('link',JSON.stringify(link));
    }

    const goToEducation = () => {
        validationExperienceCheck();
        let k = 0;
            for(let i = 0;i<data.length;i++){
                if(data[i].errors.job === '' && data[i].errors.employer==='' && data[i].errors.startDate === '' && data[i].errors.endDate === '' && data[i].errors.city === '' && data[i].errors.desc === ''){
                    k++;
                }
            }
        if(k === data.length){
            navigate('/education');
        }
    }

    const goToSkill = () => {
        validationEducationCheck();
        let t = 0;
        for(let i = 0;i<education.length;i++){
            if(education[i].errors.school === '' && education[i].errors.degree==='' && education[i].errors.graduation === '' && education[i].errors.speciality === '' && education[i].errors.town === ''){
                t++;
            }
        }
        if(t === education.length){
            navigate('/skills');
        }
    }

    const goToAbout = () => {
        validationSkillsCheck();
        let q = 0;
        for(let i = 0;i<skills.length;i++){
            if(skills[i].errors.skill === ''){
                q++;
            }
        }
        if(q === skills.length){
            navigate('/about');
        }
    }

    const goToFinish = () => {
        validationAboutCheck();

        let q = 0;
        for(let i = 0;i<abouts.length;i++){
            if(abouts[0].error.about === ''){
                q++;
            }
        }
        if(q === abouts.length){
            navigate('/finish');
        }
    }

    const deleteHandler = (item) => {
        const newData = data.filter(items => items!==item);
        setData(newData);
        localStorage.setItem('data',JSON.stringify(newData));
    }

    const deleteHandlerEdu = (item) => {
        const newData = education.filter(items => items!==item);
        setEducation(newData);
        localStorage.setItem('education',JSON.stringify(newData));
    }

    const deleteHandlerSkill = (item) => {
        const newData = skills.filter(items => items!==item);
        setSkills(newData);
        localStorage.setItem('skills',JSON.stringify(newData));
    }

    const deleteHandlerAbout = (item) => {
        const newData = abouts.filter(items => items!==item);
        setAbouts(newData);
        localStorage.setItem('about',JSON.stringify(newData));
    }

    const deleteHandlerLink = (item) => {
        const newData = link.filter(items => items!==item);
        setLink(newData);
        localStorage.setItem('link',JSON.stringify(newData));
    }

    return(
        <Page>
          <Routes>
              <Route exact path="/" element={[<Contact handleChange={handleChange} goToExperience={goToExperience} data={data}/>,<CV data={data} education={education} skills={skills} about={abouts} link={link}/>]}/>
              <Route exact path="/contact" element={[<Contact handleChange={handleChange} data={data} goToExperience={goToExperience}/>,<CV data={data} education={education} skills={skills} about={abouts} link={link}/>]} />
              <Route exact path="/experience" element={[<Experience goToEducation={goToEducation} handleChange={handleChange} data={data} addExperience={addExperience} settingData={settingData} deleteHandler={deleteHandler}/>,<CV data={data} education={education} skills={skills} about={abouts} link={link}/>]} />
              <Route exact path="/education" element={[<Education handleChangeEducation={handleChangeEducation} goToSkill={goToSkill} data={education} addEducation={addEducation} deleteHandler={deleteHandlerEdu}/>,<CV data={data} education={education} skills={skills} about={abouts} link={link}/>]} />
              <Route exact path="/skills" element={[<Skills handleChangeSkill={handleChangeSkill} handleChangeSkillLevel={handleChangeSkillLevel} data={skills} addSkill={addSkill} goToAbout={goToAbout} deleteHandler={deleteHandlerSkill}/>,<CV data={data} education={education} skills={skills} about={abouts} link={link}/>]} />
              <Route exact path="/about" element={[<About handleChangeAbout={handleChangeAbout} handleChangeLevel={handleChangeLevel} handleChangeLink={handleChangeLink} goToFinish={goToFinish} addLanguage={addLanguage} addLink={addLink} data={abouts} link={link} deleteHandler={deleteHandlerAbout} deleteHandlerLink={deleteHandlerLink}/>, <CV data={data} education={education} skills={skills} about={abouts} link={link} />]} />
              <Route exact path="/finish" element={<CV data={data} education={education} skills={skills} about={abouts} link={link}/>} />
          </Routes>
        </Page>
    );
}
const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Router;