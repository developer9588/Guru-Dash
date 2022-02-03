import React from "react";
import { useState, useEffect } from "react";
import Axios from 'axios';


import _ from 'lodash';

import 'bootstrap/dist/css/bootstrap.css';




const WaspContent = () =>{

     const [setActive,setActiveState] = useState(false)

     const [acOpen, setAcOpen] = useState(false);

     const [acOpen4,setAcOpen4] = useState(false)

     const [showWork, setShowWork] = useState (false)

     const [showQuality , setShowQuality] = useState(false)

     const [showCancel , setShowCancel] = useState(false)

     const [translatorList, setTranslatorList] = useState(false)

     const [workCheck,setWorkCheck] = useState(false)

     const [workTranslatorList,setWorkTranslatorList] = useState(false)

     const [workOrder, setWorkOrder] = useState(false);

     const toggleTranslatorList = () =>{
           setTranslatorList(!translatorList)
     }

     const toggleWorkCheck = () =>{
           setWorkCheck(!workCheck)
     }

     const toggleWorkTranslatorList = () =>{
           setWorkTranslatorList(!workTranslatorList)
     }

     const toggleWorkOrder = () =>{
           setWorkOrder(!workOrder);
     }



     const toggleWork = () =>{
           setShowWork(!showWork);
     }

     const toggleCancel = () =>{
      setShowCancel(!showCancel);
     }



     const toggleQuality = () =>{
           setShowQuality(!showQuality);
     }

     const toggleAccordion4 = () =>{
           setAcOpen4(!acOpen4);
     }

     const toggleAccordion2 = () =>{
        setAcOpen(!acOpen);
     }

     const toggleAccordion = () =>{
          setActiveState(!setActive);
     }


  const [data,SetData] = useState();

  const [modal,setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal)
    console.log('click')
  }

  if(modal) {
    document.body.classList.add('active-modal-client')
  } else {
    document.body.classList.remove('active-modal-client')
  }

  const [inquiry,setInquiry] = useState(false);

  const toggleInquiry = () =>{
      setInquiry(!inquiry);
      console.log("Clicked");
  }

  const [note,setNote] = useState(false);

  const toggleNote = () =>{
        setNote(!note);
  }

  if(note) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }


    const [note2,setNote2] = useState(false);

    const toggleNote2 = () =>{
          setNote2(!note2);
    }
  
    if(note2) {
        document.body.classList.add('active-modal-note2')
      } else {
        document.body.classList.remove('active-modal-note2')
      }


    const [note3,setNote3] = useState(false);

    const toggleNote3 = () =>{
          setNote3(!note3);
    }
  
    if(note3) {
        document.body.classList.add('active-modal-note3')
      } else {
        document.body.classList.remove('active-modal-note3')
      }


   




//   const [searchTerm,setSearchTerm] = useState("")
//   const [paginated,setPaginated] = useState()

//   const handelSubmit = (e) =>{
//     e.preventDefault();
//   }
//   const pageSize = 10;
//   const pageCount = MockData ? Math.ceil(MockData.length/pageSize) : 0;

//   if(pageCount === 1){
//     return null;
//   }

//   const pages = _.range(1,pageCount+1)



    return(
        <div className="wasp__table">
              <div className="search">
                   <form >
                       <div className="title">
                           <p>Search Clients</p>
                        </div>
                        <div className="input-field">
                             <input
                                type="text"
                                placeholder= "Search Clients"
                              />
                             <button className="wasp-search-btn">Search</button>
                        </div>
                   </form>
               </div>
               <div className="overflow-table">
                  <table className="selfTask-table-data">
                  <thead>
                   <tr>
                   <th className="wt-bg">Company Name</th>
                   <th className="wt-bg">Person</th>
                   <th className="wt-bg">Mobile</th>
                   <th className="wt-bg">Email Id</th>
                   <th className="wt-bg">Country</th>
                   <th className="wt-bg">Our Company</th>
                   <th className="wt-bg">Notes</th>
                   <th className="wt-bg">PM</th>
                   <th className="wt-bg">3 Month Sale</th>
                   <th className="wt-bg">Credit Limit</th>
                   <th className="wt-bg">W/t</th>
                   <th className="wt-bg">A/P/D</th>
                   <th className="wt-bg">Status</th>
                   <th className="wt-bg">Edit</th>
                   </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </div> 

            {/* Client  */}
            <div className="add-Client">
                  <button onClick={toggleModal} className="add-Client-btn"><span><i class="icon-plus"></i>Add New Client</span></button>
                  <button onClick={toggleInquiry} className="add-Client-btn"><span><i class="icon-plus"></i>Add New Enquiry</span></button>
                  {
                    modal && (
                      <div className="mod">
                            <div className="mod__header">
                                  <div className="text">
                                        <p>Edit Client</p>
                                  </div>
                                  <div className="mod__close-btn">
                                        <button className="modal-close" onClick={toggleModal}><i class="bi bi-x"></i></button>
                                  </div>
                            </div>
                            <div className="inner-container">
                                 <div className="search-form">
                                       <form>
                                           <div className="search-input">
                                                 <div className="search-inp">
                                                      <label>Contact Person</label>
                                                      <input type="text" placeholder="Contact Person" />
                                                 </div>

                                                 <div className="search-inp">
                                                      <label>Email ID</label>
                                                      <input type="text" placeholder="Contact Person" />
                                                 </div>

                                                 <div className="search-inp">
                                                      <label>Status</label>
                                                     <select className="search-select">
                                                             <option value="australia">Australia</option>
                                                             <option value="canada">Canada</option>
                                                             <option value="usa">USA</option>
                                                    </select>
                                                </div>
                                           </div>

                                           <div className="search-input">
                                                 <div className="search-inp">
                                                      <label>Company Name</label>
                                                      <input type="text" placeholder="Contact Person" />
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
                                                      <label>Category</label>
                                                     <select className="search-select">
                                                             <option value="australia">Australia</option>
                                                             <option value="canada">Canada</option>
                                                             <option value="usa">USA</option>
                                                    </select>
                                                </div>
                                           </div>

                                           <div className="search-input">
                                                 <div className="search-inp">
                                                      <label>Mobile No. 1</label>
                                                      <input type="tel" placeholder="Contact Person" />
                                                 </div>

                                                 <div className="search-inp">
                                                      <label>Our Company</label>
                                                       <input type="text" placeholder="Our Company" />
                                                </div>
                                                <div className="search-inp">
                                                      <label>Notes</label>
                                                      <input type="text" placeholder="Notes" />
                                                </div>
                                           </div>

                                           <div className="search-input">
                                                 <div className="search-inp">
                                                      <label>Skype</label>
                                                      <input type="text" placeholder="Skype" />
                                                 </div>

                                                 <div className="search-inp">
                                                      <label>Website</label>
                                                       <input type="text" placeholder="Website" />
                                                </div>
                                                <div className="search-inp">
                                                      <label>Show In</label>
                                                      <input type="radio" name="show" className="search-radio" />Wasp
                                                      <input type="radio" name="show"  className="search-radio"/>Tact
                                                      
                                                </div>
                                           </div>
                                           <div className="mod-btn">
                                                 <button className="mod-save"> <span><i class="bi bi-save"></i></span> Save</button>
                                                 <button className="mod-save"><span><i class="icon-share"></i></span> Send Approval</button>
                                           </div>
                                       </form>
                                 </div>
                            </div>
                      </div>
                    )
                  }
            </div>

            {
                  inquiry &&(
            <div className="inquiry-section">
                  <div className="inquiry-form">

                        <div className="inq-div-ad">
                        <div className="inq-div-1">
                              <div className="inq-id">
                                    <label>Inuiry Received ID :</label>
                                    <input type="text" placeholder="admin@anshg.com" />
                              </div>

                              <div className="inq-ref">
                                    <p>Ref No : 10112110302522</p>
                              </div>

                              <div className="inq-select">
                                    <select>
                                          <option value="inq1">Inquiry1</option>
                                    </select>

                                    <select>
                                          <option value="inq1">Inquiry1</option>
                                          <option value="inq1"></option>
                                    </select>
                              </div>

                              <div className="inq-btn">
                                   <div className="inq-save">
                                         <button className="inq-btn-bg save-btn"><span><i class="bi bi-save"></i></span>Save</button>
                                   </div>
                                   <div className="inq-delete">
                                         <button className="inq-btn-bg delete-btn"> <span><i class="icon-trash"></i></span> Delete</button>
                                   </div>
                                   <div className="inq-another">
                                         <button className="inq-btn-bg another-btn"><span><i class="bi bi-save"></i></span>Save As Another Work Order</button>
                                   </div>
                              </div>
                        </div>
                        </div>

                        <div className="inq-div-ad">
                             <div className="inq-div-2 inq-bx">
                                   <div className="inq-div-selectContent ">
                                         <div className="inq-plus-icon" onClick={toggleAccordion}>
                                              <i class="icon-plus"></i> 
                                         </div>
                                         <div className="inq-select-sec">
                                               <select>
                                                    <option value="">English en</option>
                                               </select>

                                               <select>
                                                    <option value="">Hindi hindustani</option>
                                               </select>
                                               <select>
                                                    <option value="">Translation</option>
                                               </select>
                                               <input type="text" placeholder="Project Manager" />
                                               <input type="text" placeholder="Client Other Email Id" />
                                               <div className="file" onClick={toggleNote}>
                                                     <i class="icon-file-text"></i> 
                                               </div>
                                               {note && (
                      <div className="notes-mod">
                            <div className="notes-mod__heading">
                                  <div className="text">
                                        <p>Notes</p>
                                  </div>
                                  <div className="notes-mod__close-btn">
                                       <button className="modal-close" onClick={toggleNote}><i class="bi bi-x"></i></button>
                                  </div>
                            </div>
                            <div className="inner-container">
                                  <div className="notes-form">
                                        <form>
                                               <div className="notes-inp">
                                                    <textarea className="remainder-i"  cols="30" rows="10" placeholder="Write your notes here "></textarea>
                                               </div>
                                        </form>
                                  </div>
                            </div>
                            <div className="divide"></div>
                            <div className="notes-text">
                                 <p>Note : Firstly create your order !!</p>
                            </div>
                            </div>
                    )}
                                         </div>
                                   </div>
                             </div>
                             <div className={`inq-div-2-content ${setActive ? "inq-div-2-content-open" : ""}`}>
                                   <div className="inq-div-2-content-table">
                                        <div className="inq-content-heading">
                                              <h3>Enquiry</h3>
                                              <p><span><i class="icon-time"></i></span> Last Updated</p>
                                        </div>
                                        <div className="inq-padding">
                                              <div className="inq-content-select">
                                                    <label>Our Company :</label>
                                                    <select>
                                                          <option>Select Option</option>
                                                    </select>
                                              </div>
                                              <div className="inq-table">
                                                   <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Font</th>
                                                      <th className="wt-bg">Domain</th>
                                                      <th className="wt-bg">Client Rate</th>
                                                      <th className="wt-bg">Expected Delivery</th>
                                                      <th className="wt-bg">Clients Instruction</th>
                                                      <th className="wt-bg">Letters</th>
                                                      <th className="wt-bg">Submission</th>
                                                      <th className="wt-bg">Action</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr>
                                                            <td> <input type="text" /> </td>
                                                            <td>
                                                                  <select>
                                                                        <option>Select</option>
                                                                  </select>
                                                            </td>
                                                            <td> <input type="text" /> </td>
                                                            <td> 
                                                                 <input type="date" />
                                                                 <input type="time" />
                                                                 <select>
                                                                       <option>Select</option>
                                                                 </select> 
                                                            </td>
                                                            <td> <textarea cols="30" rows="10"></textarea> </td>
                                                            <td>
                                                                  <input type="checkbox" className="inq-check" /> Enquiry <br />
                                                                  <input type="checkbox" className="inq-check" /> Disclaimer <br />
                                                                  <input type="checkbox" className="inq-check" /> Payment Client
                                                            </td>
                                                            <td>
                                                                  <input type="radio" className="inq-radio" name="inq_r"  /> Partial <br />
                                                                  <input type="radio" className="inq-radio" name="inq_r" /> Urgent <br />
                                                                  <input type="radio" className="inq-radio" name="inq_r" /> Final
                                                            </td>
                                                            <td>
                                                                  <button className="inq-table-btn">Save</button> <br />
                                                                  <button className="inq-table-btn">Preview</button><br />
                                                                  <button className="inq-table-btn">Send</button>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                              </div>
                                        </div>
                                   </div>

                                   <div className="inq-div-2-content-table">
                                        <div className="inq-content-heading">
                                              <h3>Offer</h3>
                                        </div>
                                        <div className="inq-padding">
                                              <div className="inq-table">
                                                   <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Measure</th>
                                                      <th className="wt-bg">Quantity</th>
                                                      <th className="wt-bg">Currency</th>
                                                      <th className="wt-bg">Offered Rate</th>
                                                      <th className="wt-bg">Taxes</th>
                                                      <th className="wt-bg">Invoice Amount</th>
                                                      <th className="wt-bg">Delivery Commited</th>
                                                      <th className="wt-bg">Letters</th>
                                                      <th className="wt-bg">Action</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td><input type="text" /></td>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="inq-check" /> <input type="text" className="offer-inp" />
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="inq-check" /> <input type="text" className="offer-inp"/> %
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="inq-check" /> <input type="text" className="offer-inp"/>
                                                              </td>
                                                              <td>
                                                                    <input type="text" />
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>

                                                              <td>
                                                                    <input type="checkbox" className="inq-check" />Offer <br />
                                                                    <input type="checkbox" className="inq-check" />Disclaimer <br />
                                                                    <input type="checkbox" className="inq-check" />Payment Client
                                                              </td>
                                                              <td>
                                                                  <button className="inq-table-btn">Save</button><br />
                                                                  <button className="inq-table-btn">Approval Preview</button><br />
                                                                  <button className="inq-table-btn">Approval</button><br />
                                                                  <button className="inq-table-btn">Preview</button><br />
                                                                  <button className="inq-table-btn">Send</button><br />
                                                              </td>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                              </div>
                                        </div>
                                   </div>

                                   <div className="inq-div-2-content-table">
                                        <div className="inq-content-heading">
                                              <h3>Acceptance</h3>
                                        </div>
                                        <div className="inq-padding">
                                              <div className="inq-content-select">
                                                    <label>Company for P. invoice :</label>
                                                    <select>
                                                          <option>Select Option</option>
                                                    </select>
                                              </div>
                                              <div className="inq-table">
                                                   <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Client PO</th>
                                                      <th className="wt-bg">Letters</th>
                                                      <th className="wt-bg">Special Letters</th>
                                                      <th className="wt-bg">Action</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr>
                                                              <td><input type="text"  /></td>
                                                              <td>
                                                                    <input type="checkbox" className="inq-check" />Offer <br />
                                                                    <input type="checkbox" className="inq-check" />Disclaimer <br />
                                                                    <input type="checkbox" className="inq-check" />Payment Client
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="inq-check" />WIP <br />
                                                                    <input type="checkbox" className="inq-check" />Delay <br />
                                                                    <input type="checkbox" className="inq-check" />Additional
                                                              </td>
                                                              <td>
                                                                  <button className="inq-table-btn">Save</button><br />
                                                                  <button className="inq-table-btn">Preview</button><br />
                                                                  <button className="inq-table-btn">Send</button><br />
                                                                  <button className="inq-table-btn">Quotaion Preview</button><br />
                                                                  <button className="inq-table-btn">Quotation Send</button><br />
                                                              </td>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                              </div>
                                        </div>
                                   </div>

                             </div>
                        </div>
                        {/* ================================= */}
                        <div className="inq-div-ad">
                             <div className="inq-div-3 inq-bx">
                                   <div className="inq-div-selectContent">
                                         <div className="inq-plus-icon" onClick={toggleAccordion2}>
                                              <i class="icon-plus"></i> 
                                         </div>
                                         <div className="inq-select-sec">
                                               <input type="text"  placeholder="Translator"/>
                                               <input type="text"  placeholder="Rate" />
                                               <input type="text" placeholder="Expected Delivery" />
                                               <input type="text" placeholder="" />
                                               <div className="file" onClick={toggleNote2}>
                                                     <i class="icon-file-text"></i> 
                                               </div>
                                               {note2 && (
                      <div className="notes-mod">
                            <div className="notes-mod__heading">
                                  <div className="text">
                                        <p>Notes</p>
                                  </div>
                                  <div className="notes-mod__close-btn">
                                       <button className="modal-close" onClick={toggleNote2}><i class="bi bi-x"></i></button>
                                  </div>
                            </div>
                            <div className="inner-container">
                                  <div className="notes-form">
                                        <form>
                                               <div className="notes-inp">
                                                    <textarea className="remainder-i"  cols="30" rows="10" placeholder="Write your notes here "></textarea>
                                               </div>
                                        </form>
                                  </div>
                            </div>
                            <div className="divide"></div>
                            <div className="notes-text">
                                 <p>Note : Firstly create your order !!</p>
                            </div>
                            </div>
                    )}
                                         </div>
                                   </div>
                             </div>
                             <div className={`inq-div-3-content ${acOpen ? "inq-div-3-content-open" : ""}`}>
                                   <div className="work">
                                         <div className="work-content" onClick={toggleWork}>
                                               <h4>Work</h4>
                                         </div>
                                         <div className={`work-check-content ${showWork ? "work-check-content-open" : ""}`}>
                                               <div className="translators-list">
                                                     <div className="translator-head" onClick={toggleTranslatorList}>
                                                           <h4>Translator's List</h4>
                                                           <p>Wasp Translators | Tact Translators</p>
                                                     </div>
                                                     <div className={`translators-content  ${translatorList ? "show-translator-list" : ""}`} >
                                                           <div className="translator-content-head">
                                                                 <div className="translator-content-head-flex">
                                                                 <div className="language-pair">
                                                                       <label>Language Pair :</label>
                                                                       <input type="text" />
                                                                 </div>
                                                                 <div className="translator-head-inp">
                                                                       <div className="inp">
                                                                             <label>Rating :</label>
                                                                             <input type="text" />
                                                                             <label>To :</label>
                                                                             <input type="text" />
                                                                       </div>
                                                                       <div className="translator-head-btn">
                                                                            <button className="translate-btn">Show Translator</button>
                                                                       </div>
                                                                 </div>
                                                                 </div>
                                                                 <div className="translator-table">
                                                                 <table className="selfTask-table-data">
                                                                       <thead>
                                                                           <tr>
                                                                             <th className="wt-bg">S.No:</th>
                                                                             <th className="wt-bg">Name</th>
                                                                             <th className="wt-bg">Mobile</th>
                                                                             <th className="wt-bg">Email Id</th>
                                                                             <th className="wt-bg">Countr</th>
                                                                             <th className="wt-bg">Company</th>
                                                                             <th className="wt-bg">Rating</th>
                                                                             <th className="wt-bg">Code</th>
                                                                             <th className="wt-bg">Status</th>
                                                                             <th className="wt-bg">Rate</th>
                                                                             <th className="wt-bg">$</th>
                                                                             <th className="wt-bg">W/T</th>
                                                                             <th className="wt-bg">A/P</th>
                                                                             <th className="wt-bg">WC Sent Previous</th>
                                                                             <th className="wt-bg">WO Prev / Ongoing</th>
                                                                             <th className="wt-bg">Notes</th>
                                                                             <th className="wt-bg"><input type="checkbox" className="translator-table-check" /></th>
                                                                             <th className="wt-bg">Action</th>
                                                                          </tr>
                                                                      </thead>
                                                                      <tbody>
                                                                            <tr>

                                                                            </tr>
                                                                      </tbody>
                                                                 </table>
                                                                 </div>
                                                           </div>
                                                     </div>
                                               </div>

                                               <div className="translators-list">
                                                     <div className="translator-head" onClick={toggleWorkCheck}>
                                                           <h4>Work Check</h4>
                                                     </div>
                                                     <div className={`translators-content  ${workCheck ? "show-translator-list" : ""}`} >
                                                           <div className="translator-table">
                                                           <table className="selfTask-table-data">
                                                                       <thead>
                                                                           <tr>
                                                                             <th className="wt-bg">Source File</th>
                                                                             <th className="wt-bg">Propert Change</th>
                                                                             <th className="wt-bg">Domain</th>
                                                                             <th className="wt-bg">Font</th>
                                                                             <th className="wt-bg">Quantity</th>
                                                                             <th className="wt-bg">Expected Delivery</th>
                                                                             <th className="wt-bg">Measure</th>
                                                                             <th className="wt-bg">Client Instruction</th>
                                                                             <th className="wt-bg">Letter</th>
                                                                             <th className="wt-bg">Action</th>
                                                                          </tr>
                                                                      </thead>
                                                                      <tbody>
                                                                            <tr>
                                                                                  <td><input type="file"  /></td>
                                                                                  <td>
                                                                                        <select>
                                                                                              <option>Select</option>
                                                                                        </select>
                                                                                  </td>
                                                                                  <td>
                                                                                        <select>
                                                                                              <option>Select</option>
                                                                                        </select>
                                                                                  </td>
                                                                                  <td><input type="text" /></td>
                                                                                  <td><input type="text" /></td>
                                                                                  <td>
                                                                                        <input type="date" placeholder="Expected Date" />
                                                                                        <input type="date" placeholder="Expected Hour" />
                                                                                        <select>
                                                                                              <option>Select</option>
                                                                                        </select>
                                                                                  </td>
                                                                                  <td>
                                                                                        <select>
                                                                                              <option>Select</option>
                                                                                        </select>
                                                                                  </td>
                                                                                  <td>
                                                                                        <textarea  cols="30" rows="10"></textarea>
                                                                                  </td>
                                                                                  <td>
                                                                                        <input type="checkbox" className="translator-check" /> Work Check <br />
                                                                                        <input type="checkbox" className="translator-check" /> Disclaimer <br />
                                                                                        <input type="checkbox" className="translator-check" /> Payment -Translator 
                                                                                  </td>
                                                                                  <td>
                                                                                        <button className="translator-table-btn">Save</button> <br />
                                                                                        <button className="translator-table-btn">Preview</button> <br />
                                                                                        <button className="translator-table-btn">Send</button>
                                                                                  </td>
                                                                            </tr>
                                                                      </tbody>
                                                                 </table>
                                                           </div>
                                                     </div>
                                               </div>

                                               <div className="translators-list">
                                                     <div className="translator-head" onClick={toggleWorkTranslatorList}>
                                                           <h4>Work Check Translator's List</h4>
                                                     </div>
                                                     <div className={`translators-content  ${workTranslatorList ? "show-translator-list" : ""}`} >
                                                           <div className="translator-table">
                                                           <table className="selfTask-table-data">
                                                                       <thead>
                                                                           <tr>
                                                                             <th className="wt-bg">Sr.No</th>
                                                                             <th className="wt-bg">Name</th>
                                                                             <th className="wt-bg">Mobile</th>
                                                                             <th className="wt-bg">Email Id</th>
                                                                             <th className="wt-bg">Country</th>
                                                                             <th className="wt-bg">Expected Delivery</th>
                                                                             <th className="wt-bg">Comapny</th>
                                                                             <th className="wt-bg">Rating</th>
                                                                             <th className="wt-bg">Code</th>
                                                                             <th className="wt-bg">Status</th>
                                                                             <th className="wt-bg">Rate</th>
                                                                             <th className="wt-bg">$</th>
                                                                             <th className="wt-bg">W/t</th>
                                                                             <th className="wt-bg">Notes</th>
                                                                          </tr>
                                                                      </thead>
                                                                      <tbody>
                                                                      </tbody>
                                                                 </table>
                                                           </div>
                                                     </div>
                                               </div>

                                               <div className="translators-list">
                                                     <div className="translator-head" onClick={toggleWorkOrder}>
                                                           <h4>Work Order</h4>
                                                     </div>
                                                     <div className={`translators-content  ${workOrder ? "show-translator-list" : ""}`} >
                                                           <div className="translator-table">
                                                           <table className="selfTask-table-data">
                                                                       <thead>
                                                                           <tr>
                                                                             <th className="wt-bg">Translator</th>
                                                                             <th className="wt-bg">Rate</th>
                                                                             <th className="wt-bg">Total Amount</th>
                                                                             <th className="wt-bg">Delivery Committed</th>
                                                                             <th className="wt-bg">Email CC</th>
                                                                             <th className="wt-bg">Letter</th>
                                                                             <th className="wt-bg">Action</th>
                                                                          </tr>
                                                                      </thead>
                                                                      <tbody>
                                                                            <tr>
                                                                                  <td><input type="text"  /></td>
                                                                                  <td>
                                                                                        <input type="checkbox" className="translator-check"/> <input type="text" className="translator-check-inp" />
                                                                                  </td>
                                                                                  <td>
                                                                                        <input type="checkbox" className="translator-check"/> <input type="text" className="translator-check-inp"/>
                                                                                  </td>
                                                                                  <td>
                                                                                         <input type="text" />
                                                                                         <select>
                                                                                               <option>Select</option>
                                                                                         </select>
                                                                                  </td>
                                                                                  <td><input type="text" /></td>
                                                                                  <td>
                                                                                        <input type="checkbox" className="translator-check" /> Work Check <br />
                                                                                        <input type="checkbox" className="translator-check" /> Disclaimer <br />
                                                                                        <input type="checkbox" className="translator-check" /> Payment -Translator 
                                                                                  </td>
                                                                                  <td>
                                                                                        <button className="translator-table-btn">Save</button><br />
                                                                                        <button className="translator-table-btn">Preview</button><br />
                                                                                        <button className="translator-table-btn">Send</button>
                                                                                  </td>
                                                                            </tr>
                                                                      </tbody>
                                                                 </table>
                                                           </div>
                                                     </div>
                                               </div>
                                         </div>
                                   </div>

                                   <div className="work">
                                        <div className="work-content" onClick={toggleQuality}>
                                             <h4>Quality Check</h4>
                                         </div>
                                         <div className={`quality-check ${showQuality ? "quality-check-open" : ""}`}>
                                               <div className="quality-check-content">
                                                     <p>Quality Check - To Reviewer</p>
                                                     <div className="quality-table">
                                                     <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Reveiwer</th>
                                                      <th className="wt-bg">Source File</th>
                                                      <th className="wt-bg">Target File</th>
                                                      <th className="wt-bg">Clients Instruction</th>
                                                      <th className="wt-bg">Our Instruction</th>
                                                      <th className="wt-bg">Hours</th>
                                                      <th className="wt-bg">Action</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="file" className="quality-file" />
                                                              </td>
                                                              <td>
                                                                    <input type="file" className="quality-file" />
                                                              </td>
                                                              <td>
                                                                    <textarea  cols="30" rows="10"></textarea>
                                                              </td>
                                                              <td>
                                                                    <textarea  cols="30" rows="10"></textarea>
                                                              </td>
                                                              <td>
                                                                    <input type="text" />
                                                              </td>
                                                              <td>
                                                                    <button className="quality-btn">Preview</button><br />
                                                                    <button className="quality-btn">send</button>
                                                              </td>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                                     </div>
                                               </div>

                                               <div className="quality-check-content">
                                                     <p>Quality Check - From Reviewer</p>
                                                     <div className="quality-table">
                                                     <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Translator</th>
                                                      <th className="wt-bg">Reviewed File</th>
                                                      <th className="wt-bg">Property Change</th>
                                                      <th className="wt-bg">Notes</th>
                                                      <th className="wt-bg">Letter</th>
                                                      <th className="wt-bg">Action</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="file" className="quality-file" />
                                                              </td>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <textarea  cols="30" rows="10"></textarea>
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="quality-checkbox" /> Quality Check
                                                              </td>
                                                              <td>
                                                                    <button className="quality-btn">Preview</button><br />
                                                                    <button className="quality-btn">send</button>
                                                              </td>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                                     </div>
                                               </div>
                                         </div>
                                   </div>

                                   <div className="work">
                                        <div className="work-content" onClick={toggleCancel}>
                                             <h4>Cancel / Correction</h4>
                                        </div>     
                                             <div className={`cancel-content ${showCancel ? "cancel-content-open" : ""}`}>
                                             <div className="quality-table">
                                                     <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Activity</th>
                                                      <th className="wt-bg">Translator</th>
                                                      <th className="wt-bg">File Attachment</th>
                                                      <th className="wt-bg">Reason</th>
                                                      <th className="wt-bg">Email CC</th>
                                                      <th className="wt-bg">Action</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr>
                                                              <td>
                                                                    <input type="radio" name="cancel" className="work-radio" /> Correction <br />
                                                                    <input type="radio" name="cancel" className="work-radio" /> Cancellation
                                                              </td>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <p>{`(Bring Down Quality Check - From Reviewer Files)`}</p>
                                                                    <input type="file" />
                                                              </td>
                                                              <td>
                                                                    <textarea  cols="30" rows="10"></textarea>
                                                              </td>
                                                              <td>
                                                                    <input type="text" />
                                                              </td>
                                                              <td>
                                                                    <button className="quality-btn">Preview</button> <br />
                                                                    <button className="quality-btn">send</button>
                                                              </td>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                         </div>
                                             </div>
                                   </div>
                             </div>
                        </div>

                        {/*==================================== Green Box ============================= */}

                        <div className="inq-div-ad">
                        <div className="inq-div-4 inq-bx">
                              <div className="inq-div-selectContent">
                                    <div className="inq-plus-icon" onClick={toggleAccordion4}>
                                         <i class="icon-plus"></i> 
                                    </div>
                                    <div className="inq-select-sec">
                                         <input type="text" />
                                         <input type="text" placeholder="Quantity"/>
                                         <input type="text" placeholder="Confirmed Delivery" />
                                         <input type="text" placeholder="Client PO" />
                                         <div className="file" onClick={toggleNote3}>
                                              <i class="icon-file-text"></i> 
                                         </div>
                                         {note3 && (
                      <div className="notes-mod">
                            <div className="notes-mod__heading">
                                  <div className="text">
                                        <p>Notes</p>
                                  </div>
                                  <div className="notes-mod__close-btn">
                                       <button className="modal-close" onClick={toggleNote3}><i class="bi bi-x"></i></button>
                                  </div>
                            </div>
                            <div className="inner-container">
                                  <div className="notes-form">
                                        <form>
                                               <div className="notes-inp">
                                                    <textarea className="remainder-i"  cols="30" rows="10" placeholder="Write your notes here "></textarea>
                                               </div>
                                        </form>
                                  </div>
                            </div>
                            <div className="divide"></div>
                            <div className="notes-text">
                                 <p>Note : Firstly create your order !!</p>
                            </div>
                            </div>
                    )}
                                   </div>
                              </div>
                        </div>
                        <div className={`inq-div-4-content ${acOpen4 ? "inq-div-4-content-open" : ""}` }>
                              <div className="submission">
                                    <div className="submission-content">
                                          <div className="submission-header">
                                                <h4>Submission</h4>
                                          </div>
                                          <div className="submission-table">
                                          <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Final File</th>
                                                      <th className="wt-bg">Property Change</th>
                                                      <th className="wt-bg">Client's PO</th>
                                                      <th className="wt-bg">Measure</th>
                                                      <th className="wt-bg">Quantity</th>
                                                      <th className="wt-bg">Offered Rate</th>
                                                      <th className="wt-bg">Currency</th>
                                                      <th className="wt-bg">Taxes</th>
                                                      <th className="wt-bg">Invoice Amount</th>
                                                      <th className="wt-bg">Notes</th>
                                                      <th className="wt-bg">Letter</th>
                                                      <th className="wt-bg">Action</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr> 
                                                              <td><input type="file" className="submission-file" /></td>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="text" />
                                                              </td>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="text" />
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="submission-check" />
                                                                    <input type="text"  className="submission-inp"/>
                                                              </td>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="submission-check" />
                                                                    <input type="text"  className="submission-inp"/>
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="submission-check" />
                                                                    <input type="text"  className="submission-inp"/>
                                                              </td>
                                                              <td>
                                                                    <textarea cols="30" rows="10"></textarea>
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="submission-check" />Submission <br />
                                                                    <input type="checkbox" className="submission-check" />Disclaimer <br />
                                                                    <input type="checkbox" className="submission-check" />Payment Client <br />
                                                              </td>
                                                              <td>
                                                                  <button className="submission-btn">Save</button><br />
                                                                  <button className="submission-btn"> Preview</button><br />
                                                                  <button className="submission-btn">Send</button><br />
                                                                  <button className="submission-btn">Invoice Preview</button><br />
                                                                  <button className="submission-btn">Send Invoice</button><br />
                                                              </td>
                                                              <td></td>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                          </div>
                                    </div>
                              </div>

                              <div className="submission">
                                    <div className="submission-content">
                                          <div className="submission-header">
                                                <h4>Re-Submission / Cancellation</h4>
                                          </div>
                                          <div className="submission-table">
                                          <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Comments</th>
                                                      <th className="wt-bg">Upload File</th>
                                                      <th className="wt-bg">Property Change</th>
                                                      <th className="wt-bg">Letter</th>
                                                      <th className="wt-bg">Action</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr>
                                                              <td>
                                                                    <textarea cols="30" rows="10"></textarea>
                                                              </td>
                                                              <td>
                                                                    <p>{`(Bring Down Submission Files)`}</p>
                                                                    <input type="file" className="submission-file" />
                                                              </td>
                                                              <td>
                                                                    <select>
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="checkbox" className="submission-check" /> Re-Submission <br />
                                                                    <input type="checkbox" className="submission-check" /> Cancellation-client
                                                              </td>
                                                              <td>
                                                                  <button className="submission-btn">Save</button><br />
                                                                  <button className="submission-btn"> Preview</button><br />
                                                                  <button className="submission-btn">Send</button><br />
                                                              </td>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                          </div>
                                    </div>
                              </div>

                              <div className="submission">
                                    <div className="submission-content">
                                          <div className="submission-header">
                                                <h4>Accounts</h4>
                                          </div>
                                          <div className="notes-account">
                                                <div className="notes-account-content">
                                                      <label>Notes For Account</label>
                                                      <input type="text" className="account-inp" />
                                                      <button className="account-btn">Send</button>
                                                </div>
                                          </div>
                                          <div className="submission-table">
                                          <p>Sales</p>
                                          <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Client</th>
                                                      <th className="wt-bg">Client's PO</th>
                                                      <th className="wt-bg">Source</th>
                                                      <th className="wt-bg">Target</th>
                                                      <th className="wt-bg">Measure</th>
                                                      <th className="wt-bg">Quantity</th>
                                                      <th className="wt-bg">Offered Rate</th>
                                                      <th className="wt-bg">Currency</th>
                                                      <th className="wt-bg">Taxes</th>
                                                      <th className="wt-bg">Invoice Amount</th>
                                                      <th className="wt-bg">File</th>
                                                      <th className="wt-bg">Our Company</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr>
                                                              <td></td>
                                                              <td></td>
                                                              <td></td>
                                                              <td></td>
                                                              <td>
                                                                    <select className="submission-select">
                                                                          <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="text" className="submission-inp"/>
                                                              </td>
                                                              <td>
                                                                    <input type="text" className="submission-inp"/>
                                                              </td>
                                                              <td>
                                                                    <select className="submission-select">
                                                                           <option>Select</option>
                                                                    </select>
                                                              </td>
                                                              <td>
                                                                    <input type="text" className="submission-inp"/>
                                                              </td>
                                                              <td>
                                                                    <input type="text" className="submission-inp"/>
                                                              </td>
                                                              <td></td>
                                                              <td></td>
                                                        </tr>
                                                   </tbody>
                                                  </table>
                                          </div>

                                          <div className="submission-table">
                                          <p>Purchase</p>
                                          <table className="selfTask-table-data">
                                                     <thead>
                                                      <tr>
                                                      <th className="wt-bg">Client</th>
                                                      <th className="wt-bg">Client's PO</th>
                                                      <th className="wt-bg">Source</th>
                                                      <th className="wt-bg">Target</th>
                                                      <th className="wt-bg">Measure</th>
                                                      <th className="wt-bg">Quantity</th>
                                                      <th className="wt-bg">Offered Rate</th>
                                                      <th className="wt-bg">Currency</th>
                                                      <th className="wt-bg">Taxes</th>
                                                      <th className="wt-bg">Invoice Amount</th>
                                                      <th className="wt-bg">File</th>
                                                      <th className="wt-bg">Our Company</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        
                                                   </tbody>
                                                  </table>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        </div>

                  </div>
            </div>
                  )
            }
           </div>
    )
}

export default WaspContent;