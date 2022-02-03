import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../../OncePages/OnceHeader";

const AddTact  = () =>{

    const [inactive,setInactive] = useState(false)

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Add Tact" />
       <div className="inner-container">
       <div className="search-form">
             <div className="add-heading">
                   <h3>Basic Information</h3>
             </div>
                <form>
                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Entered by</label>
                                 <input type="text" />
                           </div>

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
                                 <label>Company Name</label>
                                 <input type="text"  placeholder="Company Name" />
                           </div>
                     </div>

                     <div className="search-input">
                           
                           <div className="search-inp">
                                 <label>Salutation</label>
                                 <input type="text" placeholder="Salutation" />
                           </div>

                           <div className="search-inp">
                                 <label>Contact Person</label>
                                 <input type="text" placeholder="Contact Preson" />
                           </div>

                           <div className="search-inp">
                                 <label>Email Id</label>
                                 <input type="email" placeholder="Email ID" />
                           </div>
                     </div>

                     <div className="search-input">
                           
                           <div className="search-inp">
                                 <label>Secondary Email Id</label>
                                 <input type="email" placeholder="Secondary Email Id" />
                           </div>

                           <div className="search-inp">
                                 <label>Mobile No.1</label>
                                 <input type="tel" placeholder="Mobile Number" />
                           </div>

                           <div className="search-inp">
                                 <label>Mobile No.2</label>
                                 <input type="tel" placeholder="Mobile Number" />
                           </div>
                     </div>

                     <div className="search-input">
                           

                           <div className="search-inp">
                                 <label>Skype</label>
                                 <input type="text" placeholder="Skype" />
                           </div>

                           <div className="search-inp">
                                 <label>Website</label>
                                 <input type="url" placeholder="Website" />
                           </div>

                           <div className="search-inp">
                                 <label>Note</label>
                                 <input type="text" placeholder="Note" />
                           </div>

                     </div>

                     <div className="search-input">
                           
                           <div className="search-inp">
                                 <label>Attach CV</label>
                                 <input className="inp-src-choose" type="file"  />
                           </div>

                           <div className="search-inp">
                                 <label>Address Line 1</label>
                                 <input type="text" placeholder="Address Line 1" />
                           </div>

                           <div className="search-inp">
                                 <label>Address Line 2</label>
                                 <input type="text" placeholder="Address Line 2" />
                           </div>

                     </div>

                     <div className="search-input">
                          

                           <div className="search-inp">
                                 <label>City</label>
                                 <input type="text" placeholder="City"  />
                           </div>

                           <div className="search-inp">
                                 <label>Pin or Zip Code</label>
                                 <input type="text" placeholder="Pin or Zip Code" />
                           </div>

                           <div className="search-inp">
                                 <label>Project Manager</label>
                                 <input type="text" placeholder="Project Manager" />
                           </div>

                           <div className="search-inp">
                                 <label>Source</label>
                                 <input type="text" placeholder="Source"  />
                           </div>
                     </div>

                     <div className="search-button">
                           <button className="s-btn">Search</button>
                     </div>
                </form>

                {/* ===== Pament Details ====== */}

                <div className="add-heading2">
                    <h3>Payment Details</h3>
                </div>

                <form>
                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Bank Name</label>
                                 <input type="text" placeholder="Bank Name" />
                           </div>

                           <div className="search-inp">
                                 <label>Bank Account No.</label>
                                 <input type="text" placeholder="Banck Account No." />
                           </div>

                           <div className="search-inp">
                                 <label>IFSC Code</label>
                                 <input type="text" placeholder="IFSC Code" />
                           </div>
                     </div>

                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Bank Details</label>
                                 <input type="text" placeholder="Bank Details" />
                           </div>
                           
                           <div className="search-inp">
                                 <label>Bank Address</label>
                                 <input type="text" placeholder="Bank Address" />
                                 
                           </div>

                           <div className="search-inp">
                                 <label>Swift Code</label>
                                 <input type="text"  placeholder="Swift Code" />
                           </div>

                           <div className="search-inp">
                                 <label>PayPal</label>
                                 <input type="text" placeholder="PayPal" />
                           </div>

                           <div className="search-inp">
                                 <label>Money Booker</label>
                                 <input type="text" placeholder="Money Booker" />
                           </div>

                           <div className="search-inp">
                                 <label>Select Currency</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                     </div>

                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Select Currency</label>
                                 <select className="search-select">
                                  <option value="australia">Australia</option>
                                  <option value="canada">Canada</option>
                                  <option value="usa">USA</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Min Bill Indian Language</label>
                                 <input type="email" placeholder="Min Bill Indian Language" />
                           </div>

                           <div className="search-inp">
                                 <label>Min Bill Foreign Language</label>
                                 <input type="tel" placeholder="Min Bill Foreign Language" />
                           </div>
                     </div>

                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Limit Alloted</label>
                                 <input type="text" placeholder="Limit Alloted" />
                           </div>
                           <div className="search-inp">
                                 <p className="gst-inp">GST Applicable</p>
                                 <input type="radio" id="yes" name="GST_applicable" value="CSS" className="search-radio" />
                                 <label for="yes">Yes</label>
                                 <input type="radio" id="no" name="GST_applicable" value="JavaScript" className="search-radio" />
                                 <label for="no">No</label>
                           </div>

                           <div className="search-inp show-inp">
                                 <label>Show in</label>
                                 <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                 <label for="yes">Wasp</label>
                                 <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                 <label for="no">Tact</label>
                           </div>
                     </div>

                     <div className="search-input approve-inp">
                           <div className="search-inp">
                                 <input type="radio" name="approve" value="Approved" className="search-radio" />
                                 <label htmlFor="Approved">Approved</label>
                                 <input type="radio" name="approve" value="Disapproved" className="search-radio"/>
                                 <label htmlFor="Disapproved">Disapproved</label>
                           </div>
                     </div>

                     <div className="search-button">
                           <button className="s-btn">Save</button>
                     </div>
                </form>

           </div>
       </div>
    </div>
    )
}

export default AddTact;