import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const EmailMaster = () =>{

    const [inactive,setInactive] = useState(false);
    const [emailMasterlist, setEmailMasterlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    const getEmailMaster = () => {
      Axios.get("http://localhost:3001/emailmaster").then((response) => {
        setEmailMasterlist(response.data);
      });
    };
  
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getEmailMaster}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Outgoing Email Master" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Search Master Email</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <div className="once-search">
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Master Email"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
                            <button className="sr-btn">Search</button>
                      </div>
                  </form>
             </div>


             <div className="once-table">
                  <table>
                    <thead>
                       <tr>
                         <th className="st-bg">S.No</th>
                         <th className="st-bg">Master Email ID</th>
                         <th className="st-bg">SMTP</th>
                         <th className="st-bg">Port No.</th>
                         <th className="st-bg">Default</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {emailMasterlist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.outgoing_master_email_id
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <tr>
                      <td>{val.serial_number}</td>
                      <td>{val.outgoing_master_email_id}</td>
                      <td>{val.outgoing_smtp}</td>
                      <td>{val.outgoing_port_no}</td>
                      <td></td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i class="bi bi-trash"></i>
                          </li>
                        </ul>
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

export default EmailMaster;