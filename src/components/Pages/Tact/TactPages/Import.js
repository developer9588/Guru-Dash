import React from 'react'
import { Link } from 'react-router-dom';

const Import = () => {
    return (
        <div className="once-content currency">
             <div className="once-head">
                 <h2>Import</h2>
                 <Link to="/ImportedRecords" className="show-all-btn"> <span> <i class="bi bi-arrow-left"></i> </span> Back to listing</Link>
             </div>
             <div className="import-form">
                 <form>
                 <div class="row">
                       <div class="col-25">
                            <label>Category</label>
                       </div>
                       <div class="col-75">
                       <select id="country" name="country">
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                       </select>
                       </div>
                </div>

                <div class="row">
                       <div class="col-25">
                            <label>Status</label>
                       </div>
                       <div class="col-75">
                       <select id="country" name="country">
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                       </select>
                       </div>
                </div>

                <div class="row">
                       <div class="col-25">
                            <label>Source</label>
                       </div>
                       <div class="col-75">
                             <input type="text" />
                       </div>
                </div>

                <div class="row">
                       <div class="col-25">
                            <label>File</label>
                       </div>
                       <div class="col-75">
                             <input type="file" className='choose-file' />
                       </div>
                </div>

                <div className="import-btn-upload">
                      <div className="upload">
                            <button className='upload-btn u-btn'>Upload</button>
                            <button className='refresh-btn u-btn'><span><i class="bi bi-arrow-clockwise"></i></span> Refresh</button>
                      </div>
                </div>


                </form>
             </div>
       </div>
    )
}

export default Import;
