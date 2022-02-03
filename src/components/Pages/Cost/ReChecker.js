import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";


const ReChecker = () =>{

    const [inactive,setInactive] = useState(false);

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />

       <div className="line"> </div>
           <div className="inner-container">
           <div className="self__task">
                <h2>Re-Checker</h2>
                <div className="search">
                     <form>
                         <div className="title">
                              <p>Search Search</p>
                         </div>
                         <div className="input-field">
                              <input type="text" placeholder="Enter Reference Number"  />
                              <button className="search-btn st-bg-btn">Search</button>
                         </div>
                     </form>
                 </div>
            </div>

            <div className="selfTask-table">
            <div className="overflow-table">
                <table className="selfTask-table-data">
                 <thead>
                   <tr>
                   <th className="st-bg">#</th>
                   <th className="st-bg">Star/Square</th>
                   <th className="st-bg">Refrence No.</th>
                   <th className="st-bg">Submission Date & Time</th>
                   <th className="st-bg">Contact</th>
                   <th className="st-bg">Company</th>
                   <th className="st-bg">Our Company</th>
                   <th className="st-bg">Work Type</th>
                   <th className="st-bg">Source</th>
                   <th className="st-bg">Target</th>
                   <th className="st-bg">Translator</th>
                   <th className="st-bg">Action</th>
                   </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </div>
            </div>
            </div>
   </div>
    )
}

export default ReChecker;

