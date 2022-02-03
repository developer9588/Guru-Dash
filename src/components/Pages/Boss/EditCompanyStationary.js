import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import { Link } from "react-router-dom";
import Axios from "axios";


const EditCompanyStationary = () =>{

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
       <div className="stationary-header">
             <div className="stationary-heading">
             <h1>EDIT OUR COMPANIES & STATIONERY</h1>
             </div>
             <div className="stationary-btn">
             <Link to="/OurCompany" className="s-btn"> <span><i class="bi bi-plus"></i></span> Add New Company</Link>
             </div>
       </div>
       <div className="inner-container">
       <div className="edit-company-head">
       <h3>EDIT OUR COMPANIES & STATIONERY</h3>
       <Link to="/CompanyStationary"> <button className="edit-back-btn"> <span><i class="bi bi-arrow-left"></i></span> Back</button></Link>
       </div>     
       <div className="search-form">
             <div className="add-heading">
                   <h3>BASIC INFORMATION</h3>
             </div>
                <form>
                     <div className="search-input">
                           <div className="search-inp">
                                 <label>Company Name</label>
                                 <input type="text" placeholder="Company Name" />
                           </div>

                           <div className="search-inp">
                                 <label>Quotation Header</label>
                                 <input type="file" className="photo-inp-file"  />
                           </div>

                           <div className="search-inp">
                                 <label>Quotation Footer</label>
                                 <input type="file" className="photo-inp-file"  />
                           </div>

                           <div className="search-inp">
                                 <label>Invoice Header</label>
                                 <input type="file" className="photo-inp-file"  />
                           </div>

                           <div className="search-inp">
                                 <label>Invoice Footer</label>
                                 <input type="file" className="photo-inp-file"  />
                           </div>

                           <div className="search-inp">
                                 <label>Company Logo</label>
                                 <input type="file" className="photo-inp-file"  />
                           </div>

                           <div className="search-inp">
                                 <label>Company Icon</label>
                                 <input type="file" className="photo-inp-file"  />
                           </div>

                           <div className="search-inp">
                                 <label>Signature Image</label>
                                 <input type="file" className="photo-inp-file"  />
                           </div>

                           <div className="search-inp">
                                 <label>Contact Person</label>
                                 <input type="text" placeholder="Contact Person" />
                           </div>

                           <div className="search-inp">
                                 <label>Email ID</label>
                                 <input type="email" placeholder="Email ID" />
                           </div>

                           <div className="search-inp">
                                 <label>Skype Id</label>
                                 <input type="text" placeholder="Skype Id" />
                           </div>
                           <div className="search-inp">
                                 <label>Address</label>
                                 <input type="text" placeholder="Address" />
                           </div>
                           <div className="search-inp">
                                 <label>Mobile No.</label>
                                 <input type="text" placeholder="Position" />
                           </div>

                           <div className="search-inp">
                                 <label>Invoice Prefix</label>
                                 <textarea  cols="30" rows="10" placeholder="Invoice Prefix"></textarea>
                           </div>

                           <div className="search-inp">
                                 <label>Quotation Prefix</label>
                                 <textarea  cols="30" rows="10" placeholder="Quotation Prefix"></textarea>
                           </div>

                           <div className="search-inp">
                                 <label>Skype</label>
                                 <input type="text" placeholder="Skype" />
                           </div>

                           <div className="search-inp">
                                 <label>Website</label>
                                 <input type="text" placeholder="Website" />
                           </div>


                           <div className="search-inp">
                                 <label>Price Addition</label>
                                 <input type="text" placeholder="Price Addition" />
                           </div>


                           <div className="search-inp">
                                 {/*  <input type="text" placeholder="Google Calander Embed Code" /> */}
                           </div>

                     </div>


                     <div className="add-heading">
                          <h3>PAYMENT DETAILS</h3>
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
                                 <label>Bank Address</label>
                                 <textarea placeholder="Bank Address" cols="30" rows="10"></textarea>
                           </div>

                           <div className="search-inp">
                                 <label>Other Information</label>
                                 <input type="text" placeholder="Other Information" />
                           </div>

                           <div className="search-inp">
                                 <label>PayPal</label>
                                 <input type="text" placeholder="-" />
                           </div>

                           <div className="search-inp">
                                 <label>Skill</label>
                                 <input type="text" placeholder="-" />
                           </div>

                           <div className="search-inp">
                                 {/* <label>PayPal Id</label>
                                 <input type="text" placeholder="PayPal Id" /> */}
                           </div>

                     </div>


                     <div className="add-heading">
                          <h3>EMAIL DESIGN</h3>
                     </div>

                     <div className="search-input">
                          <div className="search-inp">
                                 <label>Orange Border Color :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="red">Red</option>
                                  <option value="maroon">Maroon</option>
                                  <option value="orange">Orange</option>
                                  <option value="yellow">Yellow</option>
                                  <option value="green">Green</option>
                                  <option value="lime">Lime</option>
                                  <option value="blue">Blue</option>
                                  <option value="purple">Purple</option>
                                  <option value="black">Black</option>
                                  <option value="gray">Gray</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>White Border Color :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="red">Red</option>
                                  <option value="maroon">Maroon</option>
                                  <option value="orange">Orange</option>
                                  <option value="yellow">Yellow</option>
                                  <option value="green">Green</option>
                                  <option value="lime">Lime</option>
                                  <option value="blue">Blue</option>
                                  <option value="purple">Purple</option>
                                  <option value="black">Black</option>
                                  <option value="gray">Gray</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Green Border Color :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="red">Red</option>
                                  <option value="maroon">Maroon</option>
                                  <option value="orange">Orange</option>
                                  <option value="yellow">Yellow</option>
                                  <option value="green">Green</option>
                                  <option value="lime">Lime</option>
                                  <option value="blue">Blue</option>
                                  <option value="purple">Purple</option>
                                  <option value="black">Black</option>
                                  <option value="gray">Gray</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Border Type :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="solid">Solid</option>
                                  <option value="dotted">Dotted</option>
                                  <option value="dashed">Dashed</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Border Width :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="px">1px</option>
                                  <option value="px">2px</option>
                                  <option value="px">3px</option>
                                  <option value="px">4px</option>
                                  <option value="px">5px</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Letter Color :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="red">Red</option>
                                  <option value="maroon">Maroon</option>
                                  <option value="orange">Orange</option>
                                  <option value="yellow">Yellow</option>
                                  <option value="green">Green</option>
                                  <option value="lime">Lime</option>
                                  <option value="blue">Blue</option>
                                  <option value="purple">Purple</option>
                                  <option value="black">Black</option>
                                  <option value="gray">Gray</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Font Family :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Font Size :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="size">10</option>
                                  <option value="size">12</option>
                                  <option value="size">14</option>
                                  <option value="size">16</option>
                                  <option value="size">18</option>
                                  <option value="size">20</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Logo Alignment :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="left">Left</option>
                                  <option value="center">Center</option>
                                  <option value="right">Right</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Signature Alignment :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="left">Left</option>
                                  <option value="center">Center</option>
                                  <option value="right">Right</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 <label>Disclaimer Alignment :</label>
                                 <select className="search-select">
                                  <option value="Select">Select</option>
                                  <option value="left">Left</option>
                                  <option value="center">Center</option>
                                  <option value="right">Right</option>
                                 </select>
                           </div>

                           <div className="search-inp">
                                 
                           </div>      

                           <div className="search-inp signature-field-txt">
                                 <label>Signature Field :</label>
                                 <input type="checkbox" className="signature-field-check"  /> Name
                                 <input type="checkbox" className="signature-field-check"  /> Position
                                 <input type="checkbox" className="signature-field-check" /> Email Id
                                 <input type="checkbox" className="signature-field-check" /> Mobile
                                 <input type="checkbox" className="signature-field-check" /> Skype Id
                                 <input type="checkbox" className="signature-field-check" /> Website
                                 <input type="checkbox" className="signature-field-check" /> Company Name
                                 <input type="checkbox" className="signature-field-check" /> Address
                           </div>                     
                           
                     </div>

                     <div className="add-heading">
                          <h3>WASP LETTERS</h3>
                     </div>

                     <div className="edit-company-letter">
                           <div className="edit-company-letter__grid">
                               <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Enquiry : </label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Offer : </label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Acceptance :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>WIP :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Delay :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Work Check :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Work Order :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Correction :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Submission :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>{`Re-submission :`}</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>{`Cancellation - Client :`}</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>{`Cancellation - Translator : `}</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>{`Payment – Client : `}</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>{`Payment – Translator :`}</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Disclaimer :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Additional : </label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>

                            <div className="edit-company-letter__input">
                                    <div className="search-inp">
                                         <label>Quality Check :</label>
                                         <input type="radio" id="wasp" name="show_in" value="yes" className="search-radio" />
                                         <label for="yes">Force</label>
                                         <input type="radio" id="tact" name="show_in" value="no" className="search-radio" />
                                         <label for="no">Default</label>
                                   <div className="textarea">
                                   <textarea  cols="30" rows="10"></textarea>
                                   </div>
                               </div>
                            </div>
                            
                           </div>
                     </div>

                     <div className="search-button">
                           <button className="s-btn">Submit</button>
                     </div>


                </form>

           </div>

           <div className="self__task">
                <h2>Add Property</h2>
                <div className="search">
                     <form>
                         <div className="title">
                              <p>Property Name :</p>
                         </div>
                         <div className="input-field">
                              <input type="text" placeholder="Property Name :" />
                              <button className="search-btn st-bg-btn">Submit</button>
                         </div>
                     </form>
                 </div>
            </div>
            <div className="selfTask-table">
            <div className="overflow-table">
                <table className="selfTask-table-data">
                 <thead>
                   <tr>
                   <th className="st-bg">Sr.No</th>
                   <th className="st-bg">Property Name</th>
                   <th className="st-bg">Action</th>
                   </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            </div>
            </div>


       </div>
   </div>
    )
}

export default EditCompanyStationary;
