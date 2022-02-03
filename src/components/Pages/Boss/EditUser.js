import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";


const EditUser = () =>{

    const [inactive,setInactive] = useState(false);

    const [hide,setHide] = useState(false);


    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading="Edit User" />
       <div className="inner-container">
       <div className="search-form">
             <div className="add-heading">
                   <h3>User</h3>
             </div>
                <form>
                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Salutation</label>
                                 <input type="text" placeholder="Salutation" />
                           </div>

                           <div className="search-inp">
                                 <label>Nick Name</label>
                                 <input type="text" placeholder="Nick Name" />
                           </div>

                           <div className="search-inp user-surname">
                                 <label>Sur Name</label>
                                 <input type="text" placeholder="Sur Name" className="surname-inp" />
                                 <label>First Name</label>
                                 <input type="text" placeholder="First Name" className="surname-inp" />
                           </div>

                           <div className="search-inp">
                                 <label>Email Id</label>
                                 <input type="text" placeholder="Email Id" />
                           </div>

                           <div className="search-inp">
                                 <label>Skype Id</label>
                                 <input type="text" placeholder="Skype Id" />
                           </div>
                           <div className="search-inp">
                                 <label>Mobile No.</label>
                                 <input type="text" placeholder="Mobile No." />
                           </div>
                           <div className="search-inp">
                                 <label>Position</label>
                                 <input type="text" placeholder="Position" />
                           </div>

                           <div className="search-inp">
                                 <label>Department</label>
                                 <input type="text" placeholder="Department" />
                           </div>

                           <div className="search-inp">
                                 <label>Work</label>
                                 <input type="text" placeholder="Work" />
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
                                 <label>Star / Square</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Color</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>DOJ</label>
                                 <input type="text" placeholder="DOJ" />
                           </div>

                           <div className="search-inp">
                                 <label>Salary Today</label>
                                 <input type="text" placeholder="Salary Today" />
                           </div>

                           <div className="search-inp">
                                 <label>Current Email Password</label>
                                 <input type="text" placeholder="Current Email Password" />
                           </div>

                     </div>

                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Current Skype Password</label>
                                 <input type="text" placeholder="Current Skype Password" />
                           </div>

                           <div className="search-inp">
                                 <label>Google Calander Embed Code</label>
                                 <input type="text" placeholder="Google Calander Embed Code" />
                           </div>

                           <div className="search-inp">
                                 {/*  <input type="text" placeholder="Google Calander Embed Code" /> */}
                           </div>

                     </div>

                     <div className="add-heading">
                          <h3>Personal Details</h3>
                     </div>

                     <div className="search-input">

                           <div className="search-inp">
                                 <label>Personal Mobile No.</label>
                                 <input type="text" placeholder="Personal Mobile No." />
                           </div>

                           <div className="search-inp">
                                 <label>Communication Address</label>
                                 <input type="text" placeholder="Communication Address" />
                           </div>

                           <div className="search-inp">
                                 <label>Personal Email Id</label>
                                 <input type="text" placeholder="Personal Email Id" />
                           </div>

                           <div className="search-inp">
                                 <label>City</label>
                                 <input type="text" placeholder="City" />
                           </div>

                           <div className="search-inp">
                                 <label>DOB</label>
                                 <input type="date" placeholder="DOB" />
                           </div>

                           <div className="search-inp">
                                 <label>Pincode</label>
                                 <input type="number" placeholder="Pincode" />
                           </div>

                           <div className="search-inp">
                                 <label>Country</label>
                                 <select>
                                     <option>Select</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Photo</label>
                                 <input type="file" className="photo-inp-file"  />
                           </div>

                           <div className="search-inp">
                                 {/* <label>Photo</label>
                                 <input type="file"  /> */}
                           </div>

                     </div>

                     <div className="add-heading">
                          <h3>Bank Details</h3>
                     </div>

                     <div className="search-input">

                           <div className="search-inp">
                                 <label>Benificiary Name</label>
                                 <input type="text" placeholder="Benificiary Name" />
                           </div>

                           <div className="search-inp">
                                 <label>Bank Name</label>
                                 <input type="text" placeholder="Bank Name" />
                           </div>

                           <div className="search-inp">
                                 <label>Bank Account No.</label>
                                 <input type="text" placeholder="Bank Account No" />
                           </div>

                           <div className="search-inp">
                                 <label>Bank IFSC Code</label>
                                 <input type="text" placeholder="Bank IFSC Code" />
                           </div>

                           <div className="search-inp">
                                 <label>PayPal Id</label>
                                 <input type="text" placeholder="PayPal Id" />
                           </div>

                           <div className="search-inp">
                                 {/* <label>PayPal Id</label>
                                 <input type="text" placeholder="PayPal Id" /> */}
                           </div>

                     </div>

                     <div className="add-heading">
                          <h3>Password</h3>
                     </div>

                     <div className="search-input">

                           <div className="search-inp">
                                 <label>Password</label>
                                 <input type="password" placeholder="Password" />
                           </div>

                           <div className="search-inp">
                                 <label>Confirm Password</label>
                                 <input type="password" placeholder="Password" />
                           </div>

                           <div className="search-inp">
                                 {/* <label>Confirm Password</label>
                                 <input type="password" placeholder="Password" /> */}
                           </div>
                     </div>

                     <div className="add-heading">
                          <h3>Attendance</h3>
                     </div>

                     <div className="search-input">
                          <div className="search-inp">
                                 <label>Holiday Allowed</label>
                                 <input type="text" placeholder="Holiday Allowed" />
                           </div>

                           <div className="search-inp">
                                 <label>Temporary Holiday</label>
                                 <input type="text" placeholder="Temporary Holiday" />
                           </div>

                           <div className="search-inp">
                                 <label>{`Lunch Allowed (minutes)`}</label>
                                 <input type="text" placeholder="Bank Account No" />
                           </div>

                           <div className="search-inp">
                                 <label>Idling Allowed</label>
                                 <input type="text" placeholder="Idling Allowed" />
                           </div>

                           <div className="search-inp">
                                 <label>Login Permitted</label>
                                 <input type="text" placeholder="Login Permitted" />
                           </div>

                           <div className="search-inp">
                                 <label>Logout Permitted</label>
                                 <input type="text" placeholder="Logout Permitted" />
                           </div>

                           <div className="search-inp">
                                 <label>Login Compulsory</label>
                                 <input type="text" placeholder="Login Compulsory" />
                           </div>

                           <div className="search-inp">
                                 <label>Logout Compulsory</label>
                                 <input type="text" placeholder="Logout Compulsory" />
                           </div>

                           <div className="search-inp">
                                 <label>Warning</label>
                                 <input type="text" placeholder="Warning" />
                           </div>

                           <div className="search-inp">
                                 <label>Serious</label>
                                 <input type="text" placeholder="Serious" />
                           </div>

                           <div className="search-inp">
                                 <label>Weekly Off</label>
                                 <input type="text" placeholder="Weekly Off" />
                           </div>

                           <div className="search-inp">
                                 <label>Hours of Work</label>
                                 <input type="text" placeholder="Hours of Work" />
                           </div>

                           
                           
                     </div>

                     <div className="search-button">
                           <button className="s-btn">Save</button>
                     </div>


                </form>


                {/* ===== Pament Details ====== */}

           </div>
       </div>
   </div>
    )
}

export default EditUser;
