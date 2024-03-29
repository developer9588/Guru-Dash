import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const WorkType = () =>{

    const [inactive,setInactive] = useState(false);
    const [worklist, setWorklist] = useState([]);
    const [workname, setWorkName] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const addWork = (e) => {
      Axios.post("http://localhost:3001/addworktype", {
        workname: workname,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getWorkType = () => {
      Axios.get("http://localhost:3001/worktype").then((response) => {
        setWorklist(response.data);
      });
    };
  
    const deleteWorkType = (work_type_id) => {
      if (window.confirm("Are you sure")) {
        Axios.delete(`http://localhost:3001/delete/work/${work_type_id}`);
        setTimeout(() => getWorkType(), 200);
      }
    };
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getWorkType} >
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Work Type" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Work Type</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                <div className="measure">
                     <div className="measure-inp">
                           <label>Work Type Name</label>
                           <input
                type="text"
                placeholder="Work Type"
                onChange={(e) => setWorkName(e.target.value)}
              />
                           <button className="save-btn" onClick={addWork}>Save</button>
                     </div>
                </div>
             </form>
             <div className="once-search">
                  <h2>Search Work Type</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Work Type"
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
                         <th className="st-bg">Work Type Name</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {worklist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.work_type
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
                      <td>{val.work_type}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteWorkType(val.work_type_id)}
                            ></i>
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

export default WorkType;