import React from "react";
import Select from 'react-select';
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Languages = () =>{

    const [inactive,setInactive] = useState(false);
    const [language, setLanguage] = useState([]);
    const [srNo, setSrNo] = useState(0);
    const [languageName, setLanguageName] = useState("");
    const [language_alias, setLanguageAlias] = useState("");
    const [language_country, setLanguageCountry] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [countrydropdown, setCountryDropdown] = useState([]);
  
    const addLanguage = (e) => {
      Axios.post("http://localhost:3001/addlanguage", {
        srNo: srNo,
        languageName: languageName,
        language_alias: language_alias,
        language_country: language_country,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getLanguage = () => {
      Axios.get("http://localhost:3001/language").then((response) => {
        setLanguage(response.data);
      });
    };
  
    const getCountryDropDown = () => {
      Axios.get("http://localhost:3001/countrydropdown").then((response) => {
        setCountryDropdown(response.data);
      });
    };
  
    const deleteLanguage = (language_id) => {
      if (window.confirm("Are you sure you want to delete this language")) {
        Axios.delete(`http://localhost:3001/delete/language/${language_id}`);
        setTimeout(() => getLanguage(), 200);
      }
    };
  


    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getLanguage}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Language" />
       <div className="once-content">
             <div className="once-head">
                 <h2>Add Languages</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                 <div className="input-field">
                       <div className="select">
                       <div className="time-zone f-b">
                           <label>Language Name</label>
                           <input
                  type="text"
                  placeholder="Language"
                  onChange={(e) => setLanguageName(e.target.value)}
                />
                       </div>
                       <div className="alias f-b">
                           <label>{`Aliases (if any)`}</label>
                           <input
                  type="text"
                  placeholder="Alias"
                  onChange={(e) => setLanguageAlias(e.target.value)}
                />
                      </div>
                        <div className="dropdown f-b">
                          <label className="userLabel">Country-used in</label>
                          <select
                  placeholder="Select Country"
                  onClick={getCountryDropDown}
                  onChange={(e) => setLanguageCountry(e.target.value)}
                >
                  {countrydropdown.map((val, key) => {
                    return (
                      <option value={val.country_name}>
                        {val.country_name}
                      </option>
                    );
                  })}
                </select>
                      </div>
                      <div className="btn">
                          <button className="save-btn" onClick={addLanguage} >Save</button>
                      </div>
                       </div>
                 </div>
             </form>
             <div className="once-search">
                  <h2>Search Language</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Language"
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
                         <th className="st-bg">Language Name</th>
                         <th className="st-bg">Alias</th>
                         <th className="st-bg">Country-used in</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {language
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.language_name
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    val.language_alias
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    val.country_name
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
                      <td>{val.language_name}</td>
                      <td>{val.language_alias}</td>
                      <td>{val.country_name}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteLanguage(val.language_id)}
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

export default Languages;