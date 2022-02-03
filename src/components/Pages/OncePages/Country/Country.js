import React from "react";
import Select from 'react-select';
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

// import Pagination from "react-pagination-library";
// import "react-pagination-library/build/css/index.css"; //for css

// import ReactPaginate from 'react-paginate';


const pageSize = 25;



const Country = () =>{

    const [inactive,setInactive] = useState(false);
      //const [timezonealias, setTimeZoneAlias] = useState([]);
  const [countrylist, setCountryList] = useState([]);
  const [timezone, setTimeZone] = useState("");
  const [alias, setAlias] = useState("");
  const [country, setCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [countrydropdown, setCountryDropdown] = useState([]);
  // const [srNO, setSrNo] = useState("");

  // const getSrNo = () => {
  //   Axios.get("http://localhost:3001/sr_no").then((response) => {
  //     setSrNo(response.data);
  //   });
  // };

  const addCountry = (e) => {
    Axios.post("http://localhost:3001/addcountry", {
      timezone: timezone,
      alias: alias,
      country: country,
    }).then((e) => {
      console.log("success");
    });
  };

  const deleteCountry = (e) => {
    Axios.post("http://localhost:3001/deletecountry", {
      country: country,
    }).then((e) => {
      console.log("success");
    });
  };

  const getCountryList = () => {
    Axios.get("http://localhost:3001/countrylist").then((response) => {
      setCountryList(response.data);
    });
  };

  const getCountryDropDown = () => {
    Axios.get("http://localhost:3001/countrydropdown").then((response) => {
      setCountryDropdown(response.data);
    });
  };

  // const dropRow = () => {
  //   Axios.get("http://localhost:3001/droprow").then((response) => {
  //     setDropRow(response.data);
  //   });
  // };



    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getCountryList}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Country" />
       <div className="once-content">
             <div className="once-head">
                 <h2>Add Country</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                 <div className="input-field">
                       <div className="select">
                        <div className="dropdown f-b">
                          <label className="userLabel">Country Name</label>
                          <select
                  placeholder="Select Country"
                  onChange={(e) => setCountry(e.target.value)}
                  onClick={getCountryDropDown}
                >
                  <option>Select Country</option>
                  {countrydropdown.map((val, key) => {
                    return (
                      <option value={val.country_name}>
                        {val.country_name}
                      </option>
                    );
                  })}
                </select>
                      </div>
                      <div className="time-zone f-b">
                           <label>Time Zone</label>
                           <input
                  type="text"
                  placeholder="Time Zone"
                  onChange={(e) => setTimeZone(e.target.value)}
                />
                      </div>
                      <div className="alias f-b">
                           <label>{`Aliases (if any)`}</label>
                           <input
                  type="text"
                  placeholder="Alias"
                  onChange={(e) => setAlias(e.target.value)}
                />
                      </div>
                      <div className="btn">
                          <button className="save-btn" onClick={addCountry}>Save</button>
                      </div>
                       </div>
                 </div>
             </form>
             <div className="once-search">
                  <h2>Search Country</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Algeria"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
                            <button className="sr-btn" >Search</button>
                      </div>
                  </form>
             </div>


             <div className="once-table">
                  <table>
                    <thead>
                       <tr>
                         <th className="st-bg">S.No</th>
                         <th className="st-bg">Country Name</th>
                         <th className="st-bg">Alias</th>
                         <th className="st-bg">Time Zone</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {countrylist.map((val, key) => {
                return (
                  <tr>
                    <td>{val.serial_number}</td>
                    <td>{val.country_name}</td>
                    <td>{val.country_timezone_alias}</td>
                    <td>{val.country_timezone}</td>
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

             {/* =========== Pagination =================== */}
       </div>
   </div>
    )
}

export default Country;