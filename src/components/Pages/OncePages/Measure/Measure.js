import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Measure = () =>{

    const [inactive,setInactive] = useState(false);
    const [measurelist, setMeasurelist] = useState([]);
    const [measure, setMeasure] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const addMeasure = (e) => {
      Axios.post("http://localhost:3001/addmeasure", {
        measure: measure,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getMeasure = () => {
      Axios.get("http://localhost:3001/measure").then((response) => {
        setMeasurelist(response.data);
      });
    };
  
    const deleteMeasure = (measure_id) => {
      if (window.confirm("Are you sure you want to delete this measure?")) {
        Axios.delete(`http://localhost:3001/delete/measure/${measure_id}`);
        setTimeout(() => getMeasure(), 200);
      }
    };
  
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getMeasure}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Measure" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Measure</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                       <div className="measure">
                            <div className="measure-inp">
                                 <label>Measure Name</label>
                                 <input
                type="text"
                placeholder="Currency"
                onChange={(e) => setMeasure(e.target.value)}
              />
                                 <button className="save-btn" onClick={addMeasure} >Save</button>
                            </div>
                       </div>
             </form>
             <div className="once-search">
                  <h2>Search Measure</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Measure"
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
                         <th className="st-bg">Measure Name</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {measurelist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.measure_name
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
                      <td>{val.measure_name}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteMeasure(val.measure_id)}
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

export default Measure;