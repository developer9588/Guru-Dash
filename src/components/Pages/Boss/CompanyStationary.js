import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";
import Axios from "axios";


const CompanyStationary = () =>{

    const [inactive,setInactive] = useState(false);
    const [companylist, setCompanylist] = useState([]);

    const getCompany = () => {
      Axios.get("http://localhost:3001/company").then((response) => {
        setCompanylist(response.data);
      });
    };



    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getCompany}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <div className="stationary-header">
             <div className="stationary-heading">
             <h1>OUR COMPANY & STATIONARY</h1>
             </div>
             <div className="stationary-btn">
             <Link to="/OurCompany" className="s-btn"> <span><i class="bi bi-plus"></i></span> Add New Company</Link>
             </div>
       </div>
       <div className="inner-container">
             <div className="stationary-table">
             <table>
                <thead>
                   <tr>
                   <th className="st-bg">S.No.</th>
                   <th className="st-bg">Company Name</th>
                   <th className="st-bg">Contact Person</th>
                   <th className="st-bg">Mobile No.</th>
                   <th className="st-bg">Website</th>
                   <th className="st-bg">Action</th>
                   <th className="st-bg">Master</th>
                   </tr>
                </thead>
                <tbody>
                {companylist.map((val, key) => {
                return (
                  <tr>
                    <td>{val.serial_number}</td>
                    <td>{val.companies_name}</td>
                    <td>{val.person_default}</td>
                    <td>{val.mobile_default}</td>
                    <td>{val.website}</td>
                    <td>
                      <Link to="/EditCompanyStationary"> <i class="bi bi-pencil-square"></i> </Link>
                    </td>
                    <td>
                      <input type="radio" />
                    </td>
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

export default CompanyStationary;


