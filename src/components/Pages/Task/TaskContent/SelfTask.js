import React from "react";
import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";


const SelfTask = () =>{


    

    const [searchTerm,setSearchTerm] = useState("")

    const handelSubmit = (e) =>{
      e.preventDefault();
    }


    const deleteData = () =>{
      alert("Are you sure you want to delete")
    }



    return(
        <>
            <div className="inner-container">
            <div className="self__task">
                <h2>Search Self Task</h2>
                <div className="search">
                     <form onSubmit={handelSubmit}>
                         <div className="title">
                              <p>Search Self Task</p>
                         </div>
                         <div className="input-field">
                              <input type="text" placeholder="Enter Reference Number" onChange={(e)=>{
                                  setSearchTerm(e.target.value)
                              }}  />
                              <button className="search-btn st-bg-btn">Search</button>
                         </div>
                     </form>
                 </div>
            </div>
            <div className="selfTask-table">
            <p>Total on going query : 0</p>
            <div className="overflow-table">
                <table className="selfTask-table-data">
                 <thead>
                   <tr>
                   <th className="st-bg">#</th>
                   <th className="st-bg">Star/Square</th>
                   <th className="st-bg">Work Status</th>
                   <th className="st-bg">Client/User</th>
                   <th className="st-bg">3 Month Sale</th>
                   <th className="st-bg">Target</th>
                   <th className="st-bg">Translator</th>
                   <th className="st-bg">Translator Mobile Number</th>
                   <th className="st-bg">Refrence.No</th>
                   <th className="st-bg">Delivery Date Time</th>
                   <th className="st-bg">Action</th>
                   </tr>
                </thead>
                <tbody>
                     <td className="action"> 
                                   <ul>
                                        <li className="edit-icon"><i class="bi bi-pencil-square"></i></li>
                                        <li className="delete-icon" onClick={deleteData}><i class="bi bi-trash"></i></li>
                                   </ul> 
                               </td>
                </tbody>
            </table>
            </div>
            </div>
            </div>
        </>
    )
}

export default SelfTask;