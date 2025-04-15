import './ManageUser.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../Apiurl';
import {useNavigate} from 'react-router-dom';

function ManageUser() {
    const navigate=useNavigate();
    const [userDetails,setUserDetails]=useState([]);

    useEffect(()=>{
        axios.get(__userapiurl+"fetch?role=user",userDetails).then((response)=>{
            setUserDetails(response.data);
        });
    });
    const changStatus =(_id,s)=>{
        if(s=='verify')
        {
            let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}; 
            axios.patch(__userapiurl+"update",updateDetails).then((response)=>{
                navigate("/manageuser");
            }).catch((err)=>{
                console.log(err);
            })
       
        }
        else if(s=='block')
        {
            let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}; 
            axios.patch(__userapiurl+"update",updateDetails).then((response)=>{
                navigate("/manageuser");
            }).catch((err)=>{
                console.log(err);
            })
        }
        else
        {
            let deleteDetails={"data":{"_id":_id}}; 
        axios.delete(__userapiurl+"delete",deleteDetails).then((response)=>{
            navigate("/manageuser");
        }).catch((err)=>{
            console.log(err);
        })
        }
    }

  return (
    <>
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title mb-4">
                     </div>
                    <h1 class="mb-4">Veiw and Manage user Detail</h1>
                    <br />
                    <table border ="2" cellSpacing="10" cellPadding="10" class="table table-bordered">
                            <tr>
                               <th>regid</th>
                               <th>name</th>
                               <th>email</th>
                               <th>mobile</th>
                               <th>city</th>
                               <th>address</th>
                               <th>info</th>
                               <th>status</th>
                               <th>Action</th> 
                            </tr>
                            {
                               userDetails.map((row)=>(
                                <tr>
                                <td>{row._id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.mobile}</td>
                                <td>{row.address}</td>
                                <td>{row.city}</td>
                                <td>{row.info}</td>
                                <td>
                                    {
                                        row.status==0 && <a style= {{"color":"green"}} onClick={()=>{changStatus(row._id,'verify')}}>verify user</a>   
                                    }
                                    {
                                        row.status==1 && <a style= {{"color":"orange"}}  onClick={()=>{changStatus(row._id,'block')}}>Block user</a>   
                                    }
                                </td>
                                <td>
                                <a style= {{"color":"red"}}  onClick={()=>{changStatus(row._id,'')}}>Delete user</a>   
                                </td>
                                </tr>
                                
                            ))
                        }
                        </table>
                
                </div>
            </div>
        </div>
    </div>
    {/* About End */}


    </>
    );
}

export default ManageUser;