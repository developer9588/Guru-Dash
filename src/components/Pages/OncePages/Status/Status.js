import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Status = () =>{

    const [inactive,setInactive] = useState(false);
    const [statuslist, setStatuslist] = useState([]);
    const [status, setStatus] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const addStatus = (e) => {
      Axios.post("http://localhost:3001/addstatus", {
        status: status,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getStatus = () => {
      Axios.get("http://localhost:3001/status").then((response) => {
        setStatuslist(response.data);
      });
    };
  
    const deleteStatus = (status_id) => {
      if (window.confirm("Are you sure you want to delete this status?")) {
        Axios.delete(`http://localhost:3001/delete/status/${status_id}`);
        setTimeout(() => getStatus(), 200);
      }
    };
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getStatus}  >
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Status" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Status</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                <div className="measure">
                     <div className="measure-inp">
                           <label>Status Name</label>
                           <input
                type="text"
                placeholder="Status"
                onChange={(e) => setStatus(e.target.value)}
              />
                           <button className="save-btn" onClick={addStatus}>Save</button>
                     </div>
                </div>
             </form>
             <div className="once-search">
                  <h2>Search Status</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Status"
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
                         <th className="st-bg">Status Name</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {statuslist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.status_name
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
                      <td>{val.status_name}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteStatus(val.status_id)}
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

export default Status;