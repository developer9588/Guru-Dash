import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Category = () =>{

    const [inactive,setInactive] = useState(false);
    const [categorylist, setCategorylist] = useState([]);
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const addCategory = (e) => {
      Axios.post("http://localhost:3001/addcategory", {
        category: category,
      }).then((e) => {
        console.log("success");
      });
    };
  
    const getCategory = () => {
      Axios.get("http://localhost:3001/category").then((response) => {
        setCategorylist(response.data);
      });
    };
  
    const deleteCategory = (category_id) => {
      if (window.confirm("Are you sure")) {
        Axios.delete(`http://localhost:3001/delete/category/${category_id}`);
        setTimeout(() => getCategory(), 200);
      }
    };
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`} onLoad={getCategory}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Category" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Category</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                <div className="measure">
                     <div className="measure-inp">
                           <label>Category Name</label>
                           <input
                type="text"
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
              />
                           <button className="save-btn" onClick={addCategory}>Save</button>
                     </div>
                </div>
             </form>
             <div className="once-search">
                  <h2>Search Category</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input
                type="text"
                placeholder="Category"
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
                         <th className="st-bg">Category Name</th>
                         <th className="st-bg">Action</th>
                       </tr>
                    </thead>

                    <tbody>
                    {categorylist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.category_name
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
                      <td>{val.category_name}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i class="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteCategory(val.category_id)}
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

export default Category;