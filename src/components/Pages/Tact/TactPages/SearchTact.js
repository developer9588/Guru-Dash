import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../../OncePages/OnceHeader";
import { Link } from "react-router-dom";

const SearchTact  = () =>{

    const [inactive,setInactive] = useState(false)

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Search Tact" />
       <div className="inner-container">
           <div className="add-remainder-btn add-tact">
                <Link to="/AddTact" className="remainder-btn"><span className="tact-i-log"><i class="bi bi-folder-symlink"></i></span>Add Tact</Link>
           </div>
           <div className="search-form">
                <form>
                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Category</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Status</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Country</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Our Company</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Select Codes</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Email Id</label>
                                 <input type="email"  placeholder="Email" />
                           </div>

                     </div>

                     <div className="search-input">

                           <div className="search-inp approve-inp">
                                 <label>Rating From</label>
                                 <input type="text" placeholder="From" className="surname-inp" />
                                 <label>To</label>
                                 <input type="text" placeholder="To"  className="surname-inp" />
                           </div>

                           <div className="search-inp approve-inp">
                                 <input type="checkbox" className="search-check" />Wasp
                                 <input type="checkbox" className="search-check" />Tact
                           </div>

                           <div className="search-inp">
                                 <label>Source Language</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Target Language</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Other Keywords</label>
                                 <input type="text" placeholder="Other Keywords" />
                           </div>

                           <div className="search-inp">
                                 {/* <label>Other Keywords</label>
                                 <input type="text" placeholder="Other Keywords" /> */}
                           </div>

                     </div>

                     <div className="search-button">
                           <button className="s-btn">Search</button>
                     </div>
                </form>
           </div>
       </div>
    </div>
    )
}

export default SearchTact;