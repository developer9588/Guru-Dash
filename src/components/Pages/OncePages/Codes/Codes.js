import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Codes = () =>{

    const [inactive,setInactive] = useState(false);
    const [codelist, setCodelist] = useState([]);
    const [codename, setCodeName] = useState("");
    const [codedefined, setCodeDefined] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const addCode = (e) => {
      Axios.post("http://localhost:3001/addcodes", {
        codename: codename,
        codedefined: codedefined,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getCode = () => {
      Axios.get("http://localhost:3001/codes").then((response) => {
        setCodelist(response.data);
      });
    };
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getCode}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Codes" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Codes</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
             <div className="input-field">
                  <div className="select">
                       <div className="alias f-b">
                           <label>Codes Name</label>
                           <input
                  type="text"
                  placeholder="Codes"
                  onChange={(e) => setCodeName(e.target.value)}
                />
                      </div>
                      <div className="time-zone f-b">
                           <label>Code Defined as</label>
                           <input
                  type="text"
                  placeholder="Defined as"
                  onChange={(e) => setCodeDefined(e.target.value)}
                />
                       </div>
                      <div className="btn">
                          <button className="save-btn" onClick={addCode}>Save</button>
                      </div>
                       </div>
                 </div>
             </form>
             <div className="once-search">
                  <h2>Search Codes</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Codes"
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
                    {codelist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.code_name
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    val.code_defined
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
                      <td>{val.code_name}</td>
                      <td>{val.code_defined}</td>
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

export default Codes;