import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import { Link } from "react-router-dom";
import Axios from "axios";


const UserDirectory = () =>{

    const [inactive,setInactive] = useState(false);
    const [userlist, setUserlist] = useState([]);

    const getUsers = () => {
      Axios.get("http://localhost:3001/user").then((response) => {
        setUserlist(response.data);
      });
    };

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getUsers}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />

       <OnceHeader heading = "User Directory" />

       <div className="inner-container">
             <div className="add-user-btn">
                   <Link to="/AddUser" className="user-btn"><span><i class="bi bi-plus"></i></span>ADD USER</Link>
             </div>
             <div className="user-directory-table">
             <table>
                <thead>
                   <tr>
                   <th className="st-bg">S.No.</th>
                   <th className="st-bg">Name</th>
                   <th className="st-bg">Email ID</th>
                   <th className="st-bg">Skype ID</th>
                   <th className="st-bg">Mobile No.</th>
                   <th className="st-bg">Position</th>
                   <th className="st-bg">Action</th>
                   </tr>
                </thead>
                <tbody>
                {userlist.map((val, key) => {
                return (
                  <tr>
                    <td>{val.serial_number}</td>
                    <td>{val.name_subuser}</td>
                    <td>{val.user_email}</td>
                    <td>{val.subuser_skype}</td>
                    <td>{val.subuser_mobile}</td>
                    <td>{val.subuser_position}</td>
                    <td><Link to="/EditUser"> <i class="bi bi-pencil-square"></i> </Link></td>
                  </tr>
                );
              })}
                  </tbody>
                </table>
             </div>
       </div>
       
   </div>
    )
}

export default UserDirectory;

