import React, { useState } from "react";
import "./AddProduct.css";

export default function AddProduct(props) {
  let [prodDetails, setprodDetails] = useState();
  function funChange(event) {
    setprodDetails({ ...prodDetails, [event.target.id]: event.target.value });
  }
  console.log(prodDetails);

  function funInsert() {
    let obj = prodDetails;
    props.getArr(obj);
    console.log(obj);
  }
  return (
    <div>
      <form action="">
       
          {" "}
          <h3>Product Details</h3>
  
        <table className="tbl">
          <tbody>
            <tr>
              <th> Product:</th>
              <td>
                <input type="text" onChange={funChange} id="prodName" />
              </td>
            </tr>
            <tr>
              <th>Price:</th>
              <td>
                <input type="text" onChange={funChange} id="prodPrice" />
              </td>
            </tr>
            <input type="button" value="Insert" onClick={funInsert} />
          </tbody>
        </table>
      </form>
    </div>
  );
}
