import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Domain = () =>{

    const [inactive,setInactive] = useState(false);
    const [domainlist, setDomainlist] = useState([]);
    const [domain, setDomain] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const addDomain = (e) => {
      Axios.post("http://localhost:3001/adddomain", {
        domain: domain,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getDomain = () => {
      Axios.get("http://localhost:3001/domain").then((response) => {
        setDomainlist(response.data);
      });
    };
  
    const deleteDomain = (domain_id) => {
      if (window.confirm("Are you sure")) {
        Axios.delete(`http://localhost:3001/delete/domain/${domain_id}`);
        setTimeout(() => getDomain(), 200);
        console.log(domain_id);
        console.log("clicked");
      }
    };
  
    // function passValue() {
    //   var updateDomain = document.getElementById("domainName").value;
    //   localStorage.setItem("textvalue", updateDomain);
    //   return false;
    // }
  
    // document.getElementById("domainUpdate").innerHTML =
    //   localStorage.getItem("textvalue");
    // const passValue = () => {
    //   //let edit_btn = document.getElementById("edit");
    //   let updateValue = document.getElementsByClassName("domainUpdate");
  
    //   let updateDomain = document.getElementsByClassName("domainName").innerText;
    //   updateValue.value = updateDomain;
    // };
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getDomain}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Domain" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Domain</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                <div className="measure">
                     <div className="measure-inp">
                           <label>Domain Name</label>
                           <input
                type="text"
                className="domainUpdate"
                placeholder="Domain"
                onChange={(e) => setDomain(e.target.value)}
              />
                           <button className="save-btn" onClick={addDomain}>Save</button>
                     </div>
                </div>
             </form>
             <div className="once-search">
                  <h2>Search Domain</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Domain"
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
                         <th className="st-bg">Domain Name</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {domainlist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.domain_name
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
                      <td className="domainName">{val.domain_name}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square" id="edit"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteDomain(val.domain_id)}
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

export default Domain;