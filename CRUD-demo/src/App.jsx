import { useState } from "react";
import Display from "./componants/Display";
import AddProducts from "./componants/AddProduct";
import style from "./App.module.css"
export default function App() {
  let product = [
    { prodName: "Pen", prodPrice: 45 },
    { prodName: "Pencil", prodPrice: 50 },
    { prodName: "Book", prodPrice: 69 },
    { prodName: "NoteBook", prodPrice: 70 },
  ];
  let [flag, setFlag] = useState(false);

  function AddProduct() {
    setFlag(!flag);
  }
  let [list, setList] = useState(product);

  function getObj(newObj) {
    setList([...list, newObj]);
  }
  console.log(list);

  function upArray(upObj) {
    let upArr = list.map((x) => {
      if (x.prodName === upObj.prodName) {
        x.prodPrice = upObj.prodPrice;
      }
      return x;
    });
    setList(upArr);
  }
  function RemoveArray(remObj) {
     let arr = list.filter((x) => {
       if (x.prodName != remObj.prodName) {
         return x;
       }
     });
     setList(arr);
  }
  return (
    <div>
    <h1>Shopping List Application</h1>
      <Display arr={list} getUpArr={upArray} getRemoveArr={RemoveArray} />
      <input type="button" value="Add Product" onClick={AddProduct} />
      {flag && <AddProducts getArr={getObj} />}
    </div>
  );
}
