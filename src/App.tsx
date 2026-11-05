import { useState } from 'react'
import full_Logo from "./assets/images/logo-full.svg"
import upload from "./assets/images/icon-upload.svg"
import squiggly_line_bottom_desktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg"
import line_bottom_mobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
import squiggly_line_top from "./assets/images/pattern-squiggly-line-top.svg"
import pattern_circle from "./assets/images/pattern-circle.svg"
import pattern_lines from "./assets/images/pattern-lines.svg"
import icon_info from "./assets/images/icon-info.svg"
import icon_github from "./assets/images/icon-github.svg"
import './App.css'

const currentYear = new Date().getFullYear();
const currentdate=`${new Date().toLocaleDateString("en-US",{month:"short",day:"2-digit"})},${currentYear}`
function generateRandomCode(length: number = 8): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  
  return result;
}
const myCode = generateRandomCode(5); 

function TicketReady(props:any):any{
  return(
   
    <div className='form-finished'>

           <img src={full_Logo} alt="full_Logo" />
      <h1>Congrats, <b>{props.fullname}</b> Your ticket is ready.</h1>
      <pre>We've emailed your ticket to <b>{props.email}</b> and will send updates in the run up to the event.</pre>
     
     <div className='ticket'>
      <div className='logo2'>
      <img src={full_Logo} alt="Logo" />
      <p>{currentdate}</p> 
      </div>
      <div className='personal-info'>
        <figcaption className='upload_Avatar'>
      <img src={props.upload_Avatar} alt="" />
        </figcaption>
        <div>
      <h3>{props.fullname}</h3>
      <p className='github_user'><img src={icon_github} alt="icon_github" /><span>{props.github_user}</span></p>
        </div>
      </div>
      <p className='ticket-code'>{myCode}#</p>
     </div> 
    
    </div>

    
  )
}

function App() {
const [fullname,setfullname]=useState<string>('')
const [email,setemail]=useState<string>('')
const [github_user,setGithub_user]=useState<string>('')
const [Upload_Avatar,setUpload_Avatar]=useState<string>('')

const [fullname_TF,setfullname_TF]=useState<boolean>(false)
const [email_TF,setemail_TF]=useState<boolean>(false)
const [github_user_TF,setGithub_user_TF]=useState<boolean>(false)
const [Upload_Avatar_TF,setUpload_Avatar_TF]=useState<boolean>(false)

const [fullname_error,setfullname_error]=useState<string>('')
const [email_error,setemail_error]=useState<string>('')
const [github_user_error,setGithub_user_error]=useState<string>('')
const [Upload_Avatar_error,setUpload_Avatar_error]=useState<string>('')

const [form_cmplete,setform_cmplete]=useState<boolean>(false)
const [form_error,setform_error]=useState<boolean>(false)
    function Email(email: string) {
    if (!email.length) {
      setemail_error("Enter your email.")
      setemail_TF(false)
      return ;
    }
    const emailPattern = /^[a-zA-Z]+[^\s@]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setemail_error("Please enter your email address.")
      setemail_TF(false)
      return;
    }
      setemail_error("")
      setemail_TF(true)
    return ;
  }
    function Fullname(fullname: string) {
    if (!fullname.trim()) {
    setfullname_TF(false)
    setfullname_error("please Enter your fullname .")
      return ;
    }
    const Fullnametest = /^[a-zA-Z0-9_\-\s]+$/.test(fullname);
    if (!Fullnametest) {
          setfullname_TF(false)
    setfullname_error("Only letters, numbers, _ or - are allowed")
      return ;
    }
    setfullname_TF(true)
    setfullname_error("")
    return ;
  }
    function Github_user(Github_user: string) {
    if (!Github_user.trim()) {
      setGithub_user_error("Please enter your github user name")
      setGithub_user_TF(false)
      return ;
    }
    const Github_usertest = /^@/.test(Github_user);
    if (!Github_usertest) {
      setGithub_user_error("User name must begin with @.")
      setGithub_user_TF(false)      
      return ;
    }
      setGithub_user_error("")
      setGithub_user_TF(true)          
    return ;
  }
  function AvatarIMG (e: React.ChangeEvent<HTMLInputElement>){
    if (e.target.files && e.target.files[0]) {
     const file = e.target.files[0];
     const fileSizeKB=file.size/1028
      if (fileSizeKB > 5000) {
        // I know its 5 MB
      setUpload_Avatar_TF(false)
      setUpload_Avatar_error("Upload your photo (JPG or PNG, max size: 500KB).")      
      return;
    }
      const imageURL = URL.createObjectURL(file);
      setUpload_Avatar(imageURL);
      setUpload_Avatar_TF(true)
      setUpload_Avatar_error("")
      
    }
    else{
      setUpload_Avatar_TF(false)
      setUpload_Avatar_error("Please upload your photo.")   
    }
  }

function  handlecomplete()
{
if(Upload_Avatar_TF&&email_TF&&github_user_TF&&fullname_TF)
{
  setform_cmplete(true)
setform_error(false)

}
else
{
  if (!Upload_Avatar_TF) {
  setUpload_Avatar_error("Please upload your photo.");
}
setform_error(true)
Github_user(github_user)
Email(email)
Fullname(fullname)
}
}





  return (
    <>
    <img src={pattern_lines} alt="pattern_lines" className='pattern_lines'/>
    <img src={pattern_circle} alt="pattern_circle" className='pattern_circle1'/>
    <img src={pattern_circle} alt="pattern_circle" className='pattern_circle2'/>
    <img src={squiggly_line_bottom_desktop} alt="squiggly_line_bottom_desktop" className='squiggly_line_bottom_desktop'/>
    <img src={line_bottom_mobile} alt="line_bottom_mobile" className='line_bottom_mobile'/>
    <img src={squiggly_line_top} alt="squiggly_line_top" className='squiggly_line_top'/>

{!form_cmplete&&<header>
  <img src={full_Logo} alt="full_Logo" />
  <h1>Your Journey to Coding Conf {currentYear} Starts Here!</h1>
  <pre>Secure your spot at next year's biggest coding conference.</pre>
</header>}
{!form_cmplete?<main>
<p>Upload Avatar</p>
<div className='upload-img'>
<input type="file" id="input1" className={`upload ${Upload_Avatar_TF?"hid":""}`} accept="image/*" onChange={(e)=>{AvatarIMG(e)}} />
<figcaption>
<img src={Upload_Avatar_TF?Upload_Avatar:upload} alt="upload" />
</figcaption>
{Upload_Avatar_TF?<div className='change-or-remove'>
  <button className='change_upload' type='button' onClick={()=>{setUpload_Avatar_TF(false),setUpload_Avatar('')}}>Remove image</button>
  <label htmlFor="input1" className='change_upload'>Change image</label>
  
</div>:<p>Drag and drop or click to upload</p>}
</div>
<label htmlFor="input1" className={form_error?"red":""}>{Upload_Avatar_error!==""&&<img src={icon_info} alt="icon_info" />} {Upload_Avatar_error}</label>
<p>Full Name</p>
<input type="text" id="input2" onChange={(e)=>{setfullname(e.target.value);Fullname(e.target.value)}} value={fullname}/>
<label htmlFor="input2" className={form_error?"red":""}>{fullname_error!==""&&<img src={icon_info} alt="icon_info" />} {fullname_error}</label>
<p>Email Address</p>
<input type="email" id="input3" placeholder='example@email.com' onChange={(e)=>{setemail(e.target.value);Email(e.target.value)}} value={email}/>
<label htmlFor="input3" className={form_error?"red":""}>{email_error!==""&&<img src={icon_info} alt="icon_info" />} {email_error}</label>
<p>GitHub Username</p>
<input type="text" id="input4" placeholder='@yourusername' onChange={(e)=>{setGithub_user(e.target.value);Github_user(e.target.value)}} value={github_user}/>
<label htmlFor="input4" className={form_error?"red":""}>{github_user_error!==""&&<img src={icon_info} alt="icon_info" />} {github_user_error}</label>
<button type='button' className='main-button' onClick={()=>{handlecomplete()}}>Generate My Ticket</button>
</main>:<TicketReady email={email} fullname={fullname} github_user={github_user} upload_Avatar={Upload_Avatar}></TicketReady>}
  <footer >
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/DUSKSHADE777">DUSK</a>.
  </footer>
    </>
  )
}

export default App
