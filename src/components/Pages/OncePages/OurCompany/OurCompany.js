import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const OurCompany = () =>{

    const [inactive,setInactive] = useState(false);
    const [ourcompanylist, setOurcompanylist] = useState([]);
    const [ourcompany, setOurcompany] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const addOurCompany = (e) => {
      Axios.post("http://localhost:3001/addourcompany", {
        ourcompany: ourcompany,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getOurCompany = () => {
      Axios.get("http://localhost:3001/ourcompany").then((response) => {
        setOurcompanylist(response.data);
      });
    };
  
    const deleteCompany = (companies_id) => {
      if (window.confirm("Are you sure you want to delete this company?")) {
        Axios.delete(`http://localhost:3001/delete/company/${companies_id}`);
        setTimeout(() => getOurCompany(), 200);
      }
    };
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getOurCompany} >
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Our Company" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Company</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                <div className="measure">
                     <div className="measure-inp">
                           <label>Company Name</label>
                           <input
                type="text"
                placeholder="Company"
                onChange={(e) => setOurcompany(e.target.value)}
              />
                           <button className="save-btn" onClick={addOurCompany}  >Save</button>
                     </div>
                </div>
             </form>
             <div className="once-search">
                  <h2>Search Company</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Company"
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
                         <th className="st-bg">Company Name</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {ourcompanylist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.companies_name
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
                      <td>{val.companies_name}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteCompany(val.companies_id)}
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

export default OurCompany;