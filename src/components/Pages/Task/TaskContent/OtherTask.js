import React from "react";
import { useState } from "react";

const OtherTask = () =>{


    return(
        <>
           <div className="inner-container">
           <div className="otherTask">
                <h2>Search Other Task</h2>
                <div className="otherTask__content">
                     <div className="content-width">
                     <div className="input-field">
                          <label className="inputLabel">Search</label>
                          <input type="text" placeholder="Enter Reference Number"  />
                     </div>
                     <div className="dropdown">
                          <label className="userLabel">User</label>
                          <select>
                               <option value="">Select User</option>
                          </select>
                     </div>
                     </div>
                </div>
                <p>Total on going query : 0</p>
                <table className="other-task-table">
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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  </tr>
                  <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  </tr>
                  <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  </tr>
                  </tbody>
                </table>
            </div>
           </div>
        </>
    )
}

export default OtherTask;

