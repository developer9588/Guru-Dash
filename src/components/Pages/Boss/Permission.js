import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

const Permission = () =>{

    const [inactive,setInactive] = useState(false);
    const [permissionlist, setPermissionlist] = useState([]);
    const [languagelist, setLanguagelist] = useState([]);
  
    const getPermissions = () => {
      Axios.get("http://localhost:3001/permission").then((response) => {
        setPermissionlist(response.data);
      });
    };
  
    const getLanguageList = () => {
      Axios.get("http://localhost:3001/getlang").then((response) => {
        setLanguagelist(response.data);
      });
    };

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={(getPermissions, getLanguageList)}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading="Permission" />

       <div className="inner-container">
             <div className="permission-form">
                   <form>
                        <div className="user">
                             <label className="user-label">Users</label>
                             <select
                id="country"
                name="country"
                className="user-select"
                onClick={getPermissions}
              >
                {permissionlist.map((val, key) => {
                  return (
                    <option value={val.name_subuser}>{val.name_subuser}</option>
                  );
                })}
              </select>
                        </div>
                        <div className="user-checkbox">
                              <div className="wasp-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" name="allselect" />Wasp</p>
                                        <li><input className="permission-check" type="checkbox" name="allselect" />Quick Add Client</li>
                                        <li><input className="permission-check" type="checkbox" name="allselect" />Tact Translator - White Zone</li>
                                        <li><input className="permission-check" type="checkbox" name="allselect" />Allow Work Zone For Tack Translator</li>
                                        <li><input className="permission-check" type="checkbox" name="allselect" />Allow As Quality Checker</li>
                                    </ul>
                              </div>

                              <div className="cost-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Cost</p>
                                        <li><input className="permission-check" type="checkbox" />Allow view SP & Cost</li>
                                        <li><input className="permission-check" type="checkbox" />Allow edit SP & Cost</li>
                                        <li><input className="permission-check" type="checkbox" />Delete Language Pair </li>
                                        <li><input className="permission-check" type="checkbox" />Allow create selling</li>
                                        <li><input className="permission-check" type="checkbox" />Allow export price list</li>
                                        <li><input className="permission-check" type="checkbox" />Clear complete list</li>
                                        <li><input className="permission-check" type="checkbox" />Checker</li>
                                        <li><input className="permission-check" type="checkbox" />Allow edit checker</li>
                                        <li><input className="permission-check" type="checkbox" />Re Checker</li>
                                        <li><input className="permission-check" type="checkbox" />Allow edit rechecker</li>
                                        <li><input className="permission-check" type="checkbox" />Archive</li>
                                    </ul>
                              </div>

                              <div className="once-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Once</p>
                                        <li><input className="permission-check" type="checkbox" />Allow Edit Once</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Delete Once</li>
                                        <li><input className="permission-check" type="checkbox" />Country
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Languages
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Measure
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Work Type
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Category
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Status
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Codes
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Outgoing Email Master
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Our Company
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Domain
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>
                                    </ul>
                              </div>

                              <div className="task-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Task</p>
                                        <li><input className="permission-check" type="checkbox" />Task - View Other Task</li>
                                        <li><input className="permission-check" type="checkbox" />Approval for client</li>
                                        <li><input className="permission-check" type="checkbox" />Approval for Translator </li>
                                        <li><input className="permission-check" type="checkbox" />Approval for Project</li>
                                    </ul>
                              </div>

                              <div className="tact-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Tact</p>
                                        <li><input className="permission-check" type="checkbox" />Import & Export Tact</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Tact Import</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Tact Export </li>
                                        <li><input className="permission-check" type="checkbox" />Search Tact</li>
                                        <li><input className="permission-check" type="checkbox" />Add Tact</li>
                                    </ul>
                              </div>

                              <div className="boss-check">
                                    <ul>
                                    <p> <input className="permission-check" type="checkbox" />Boss</p>
                                        <li><input className="permission-check" type="checkbox" />User Directory
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Our Company & Stationary
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Staff Mailers & Alert
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Permission
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Reports
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Backup & Restore
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Codes
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Outgoing Email Master
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Our Company
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Domain
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>
                                    </ul>
                              </div>

                              <div className="cost-check lang-check">
                              <p>
                    Language
                  </p>
                <ul>
                {languagelist.map((val, key) => {
    return (
      <>
        <li>
        <input className="permission-check" type="checkbox" />
        {val.language_name}
        </li>
      </>
    );
  })}

                </ul>
                <div className="staff-mailer-btn">
                        <button className="staff-btn">Save</button>
                </div>
              </div>
              <div className="alias f-b user-cc">
                <label>User CC(Email id)</label>
                <input type="text" placeholder="User CC(Email id)" />
              </div>

                          </div>    
                   </form>
             </div>
       </div>
   </div>
    )
}

export default Permission;


