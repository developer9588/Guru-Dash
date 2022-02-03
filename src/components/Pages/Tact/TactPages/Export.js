import React from 'react'
import { Link } from 'react-router-dom';

const Export = () => {
    return (
        <div className="once-content currency">
             <div className="once-head">
                 <h2>Export</h2>
                 <Link to="/ImportedRecords" className="show-all-btn"> <span> <i class="bi bi-arrow-left"></i> </span> Back to listing</Link>
             </div>
             <div className="export-form">
                  <form className='export-grid'>
                        <div className="export-f">
                              <div className="export-inp">
                                    <label>Category</label>
                                        <select className='export-select' name="Select Category" placeholder='Select Category'>
                                                <option value="volvo">Select Category</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                        </select>
                               </div>

                               <div className="export-inp">
                                    <label>Status</label>
                                        <select className='export-select' name="Select Category" placeholder='Select Category'>
                                                <option value="volvo">Select Category</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                        </select>
                               </div>

                               <div className="export-inp">
                                    <label>Country</label>
                                        <select className='export-select' name="Select Category" placeholder='Select Category'>
                                                <option value="volvo">Select Category</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                        </select>
                               </div>
                        </div>
                        <div className="export-f">
                              <div className="export-inp">
                                    <label>Our Company</label>
                                    <select className='export-select' name="Select Category" placeholder='Select Category'>
                                                <option value="volvo">Select Category</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                    </select>
                              </div>

                              <div className="export-inp">
                                    <label>Codes</label>
                                    <select className='export-select' name="Select Category" placeholder='Select Category'>
                                                <option value="volvo">Select Category</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                    </select>
                              </div>

                              <div className="export-inp">
                                    <label>Rating From</label>
                                    <input type="text" className='rating-inp' placeholder='Rating' /> <label>To</label>
                                    <input type="text"  className='rating-inp' placeholder='Rating' />
                              </div>
                        </div>

                        <div className="export-f">
                              <div className="export-inp">
                              <label>Source Language</label>
                              <select className='export-select' name="Select Category" placeholder='Select Category'>
                                                <option value="volvo">Select Category</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                    </select>
                              </div>

                              <div className="export-inp">
                              <label>Target Language</label>
                              <select className='export-select' name="Select Category" placeholder='Select Category'>
                                                <option value="volvo">Select Category</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                    </select>
                              </div>

                              <div className="export-inp">
                                    <label>Source</label>
                                    <input type="text" className='rating-inp' placeholder='Source' />
                                    
                              </div>
                        </div>

                        <div className="export-check">
                              <ul>
                                  <li>
                                  <input type="checkbox" className='e-check' />Wasp
                                  <input type="checkbox" className='e-check'/>Tact
                                  </li>

                                  <li>
                                  <input type="checkbox" className='e-check' />Yes
                                  <input type="checkbox" className='e-check'/>No    
                                  </li>

                                  <li>
                                  <input type="checkbox" className='e-check' />Approved
                                  <input type="checkbox" className='e-check'/>Disapproved
                                  <input type="checkbox" className='e-check'/>Pending
                                  </li>
                              </ul>
                        </div>

                        <div className="export-btn">
                             <div className="export">
                             <button className='upload-btn u-btn'>Export</button>
                             <button className='refresh-btn u-btn'><span><i class="bi bi-arrow-clockwise"></i></span>Refresh</button>
                             </div>
                        </div>

                  </form>
             </div>
         </div>
    )
}

export default Export;


// <div className="export-f">
// <label>Category</label>
{/* <select name="Select Category" placeholder='Select Category'>
       <option value="volvo">Select Category</option>
       <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
</select> */}
// <label>Status</label>
// <select name="Select Category">
//        <option value="volvo">Active</option>
//        <option value="saab">Saab</option>
//        <option value="mercedes">Mercedes</option>
//        <option value="audi">Audi</option>
// </select>
// <label>Country</label>
// <select name="Select Category">
//        <option value="volvo">Select Country</option>
//        <option value="saab">Saab</option>
//        <option value="mercedes">Mercedes</option>
//        <option value="audi">Audi</option>
// </select>
// </div>
// <div className="export-f">
//  <label>Our Company</label>
//        <select name="Select" placeholder='Select Company'>
//              <option value="volvo">Select Country</option>
//              <option value="saab">Saab</option>
//              <option value="mercedes">Mercedes</option>
//              <option value="audi">Audi</option>
//        </select>
//  <label>Codes</label>
//        <select name="Select" placeholder='Select Company'>
//              <option value="volvo">Select Country</option>
//              <option value="saab">Saab</option>
//              <option value="mercedes">Mercedes</option>
//              <option value="audi">Audi</option>
//        </select>     

// </div>