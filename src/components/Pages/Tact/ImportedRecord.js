import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from 'react-router-dom';
import OnceHeader from "../OncePages/OnceHeader";


const ImportedRecord = () =>{

    const [inactive,setInactive] = useState(false);

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Imported Records" />
        <div className="inner-container tact">
                 <div className="add-remainder-btn">
                       <Link to="/ImportExport" className="remainder-btn"><span className="tact-i-log"><i class="bi bi-folder-symlink"></i></span>Import & Export Tact</Link>
                 </div>
                <div className="remainder__tabel">
                      <table>
                      <thead>
                   <tr>
                   <th className="st-bg">S. No.</th>
                   <th className="st-bg">Uploaded By</th>
                   <th className="st-bg">File</th>
                   <th className="st-bg">Total Records</th>
                   <th className="st-bg">Uploaded At</th>
                   <th className="st-bg">Mapped For</th>
                   <th className="st-bg">Source</th>
                   <th className="st-bg">Action</th>

                   </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  </tr>
                  <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  </tr>
                  <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  </tr>
                  </tbody>
                </table>
                </div>
          </div>
       


   </div>
    )
}

export default ImportedRecord;
