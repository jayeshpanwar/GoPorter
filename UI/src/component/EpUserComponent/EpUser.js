import './EpUser.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 
import { __userapiurl } from '../../Apiurl';

function EpUser() {
    const navigate=useNavigate();    
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [mobile,setMobile]=useState();   
    const [address,setAdd]=useState();   
    const [city,setCity]=useState();   
    const [M,setM]=useState();  
    const [F,setF]=useState();   
    const [gender,setGender]=useState();  
    const [output,setOutput]=useState();
   
   useEffect(()=>{
    axios.get(__userapiurl+"fetch?email="+localStorage.getItem("email")).then((response)=>{
            var userDetail=response.data[0];
            setName(userDetail.name);
            setEmail(userDetail.email);
            setMobile(userDetail.mobile);
            setCity(userDetail.city);
            setAdd(userDetail.address);
            if(userDetail.gender=="male")
             setM("checked");
            else
             setF("checked");
             
    })
   },[])
    
   const handleSubmit =()=>
   {
    let updateUserDetail={"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"city":city,"address":address,"gender":gender}};
       axios.patch(__userapiurl+"update",updateUserDetail).then((response)=>{
        setOutput("User Updated successfully");
        
        navigate("/epadmin");
       }).catch((error)=>{
        console.log(error);
       });
   };

    return (
    <>
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title mb-4">
                        <h1 class="display-5 mb-0">Edit Profile Here!!!!!</h1>
                        <br />
                        <span style={{"color":"red"}}>{output}</span>
                        <br />
                        <form>
                            <div class="form-group">
                              <label for="name">Name :</label>  
                              <input type="text" class="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                            </div>
                            <br />
                            <div class="form-group">
                              <label for="email">Email :</label>  
                              <input type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                              </div>
                              <br />
                         
                              <div class="form-group">
                              <label for="mobile">Mobile :</label>  
                              <input type="text" class="form-control" value={mobile} onChange={e=>setMobile(e.target.value)}/>
                              </div>
                              <br />
                              <div class="form-group">
                              <label for="address">Address :</label>  
                              <textarea class="form-control" value={address} onChange={e=>setAdd(e.target.value)} ></textarea>
                              </div>
                              <br />
                              <div class="form-group">
                              <label for="City">City :</label>  
                              <select class="form-control" value={city} onChange={e=>setCity(e.target.value)}>
                                <option>select city</option>
                                <option>Indore</option>
                                <option>Bhopal</option>
                                <option>Ujjain</option>
                                <option>Gwalior</option>
                                <option>Dewas</option>
                              </select>
                              </div>
                              <br />
                              <div class="form-group">
                              <label for="Gender">Gender :</label>  
                              Male :<input type="radio" checked={M} name="gender" value="male" onChange={e=>setGender(e.target.value)} />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                              Female :<input type="radio" name="gender" checked={F} value="female" onChange={e=>setGender(e.target.value)} />
                              </div>
                              <br />
                             
                            <button type="button" class="btn btn-info" onClick={handleSubmit}>Edit Profile</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}


    </>
    );
}

export default EpUser;