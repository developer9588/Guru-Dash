import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Currency = () =>{

    const [inactive,setInactive] = useState(false);
    const [currency, setCurrency] = useState([]);
    const [currencyName, setCurrencyName] = useState("");
    const [currency_alias, setCurrencyAlias] = useState("");
    const [currency_image, setCurrencyImage] = useState("");
    const [currency_symbol, setCurrencySymbol] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const addCurrency = (e) => {
      Axios.post("http://localhost:3001/addcurrency", {
        currencyName: currencyName,
        currency_alias: currency_alias,
        currency_symbol: currency_symbol,
        currency_image: currency_image,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getCurrency = () => {
      Axios.get("http://localhost:3001/currency").then((response) => {
        setCurrency(response.data);
      });
    };
  
    const deleteCurrency = (currency_id) => {
      if (window.confirm("Are you sure")) {
        Axios.delete(`http://localhost:3001/delete/currency/${currency_id}`);
        setTimeout(() => getCurrency(), 200);
      }
    };

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getCurrency}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Currency" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Currency</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                 <div className="input-field">
                       <div className="select">
                       <div className="time-zone f-b">
                           <label>Currency Name</label>
                           <input
                  type="text"
                  placeholder="Currency Name"
                  onChange={(e) => setCurrencyName(e.target.value)}
                />
                       </div>
                       <div className="alias f-b">
                           <label>{`Aliases (if any)`}</label>
                           <input
                  type="text"
                  placeholder="Alias"
                  onChange={(e) => setCurrencyAlias(e.target.value)}
                />
                      </div>
                      <div className="time-zone f-b">
                           <label>Currency Symbol</label>
                           <input
                  type="text"
                  placeholder="Currency"
                  onChange={(e) => setCurrencySymbol(e.target.value)}
                />
                       </div>
                        <div className="Choose-file">
                          <input type="file"className="choose" onChange={(e) => setCurrencyImage(e.target.value)} />
                      </div>
                      <div className="btn">
                          <button className="save-btn curr-btn" onClick={addCurrency}>Save</button>
                      </div>
                       </div>
                 </div>
             </form>
             <div className="once-search">
                  <h2>Search Currency</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Currency"
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
                         <th className="st-bg">Currency Name</th>
                         <th className="st-bg">Alias</th>
                         <th className="st-bg">Symbol</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {currency
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.currency_name
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <tr>
                      <td>{val.sr_no}</td>
                      <td>{val.currency_name}</td>
                      <td>{val.alias}</td>
                      <td>{val.symbol}</td>
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

             <div className="once-head">
                 <h2>Currency Conversion Rate</h2>
             </div>

             <form>
                 <div className="input-field">
                       <div className="select">
                       <div className="time-zone f-b">
                           <label>Base Rate</label>
                           <select>
                               <option>Select Base Rate</option>
                           </select>
                       </div>
                       <div className="alias f-b">
                           <label> Required Rate</label>
                           <select>
                               <option>Select Required Rate</option>
                           </select>
                      </div>
                      <div className="time-zone f-b">
                           <label>Rate</label>
                           <input type="text" placeholder="Rate" />
                       </div>
                      <div className="btn">
                          <button className="save-btn curr-btn">Save</button>
                      </div>
                       </div>
                 </div>
             </form>

             <div className="once-table conversion-table">
                  <table>
                    <thead>
                       <tr>
                         <th className="st-bg">S.No</th>
                         <th className="st-bg">Base Rate</th>
                         <th className="st-bg">Required Rate</th>
                         <th className="st-bg">Rate</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {currency
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.currency_name
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.serial_number}</td>
                      <td>{val.currency_name}</td>
                      <td>{val.currency_alias}</td>
                      <td>
                        <img
                          src={val.currency_image}
                          enctype="multipart/form-data"
                        />
                        {val.currency_symbol}
                      </td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteCurrency(val.currency_id)}
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

export default Currency;