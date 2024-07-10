import style from './Display.module.css'
export default function Display(props) {
  let product = props.arr;
  function funAction(event, x) {
    if (event.target.textContent === "Edit") {
      let newPrice = prompt("Enter the new Price:");
      console.log(newPrice);
      console.log(x.prodName);
      let upObj = { prodName: x.prodName, prodPrice: newPrice };
      console.log(upObj);
      props.getUpArr(upObj);
    } else if (event.target.textContent === "Delete") {
      props.getRemoveArr(x);
    }
    
  }
  return (
    <div>
      <table border={2}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {product.map((x, ind) => {
            return (
              <tr key={ind}>
                <td>{x.prodName}</td>
                <td>{x.prodPrice}</td>
                <td
                  onClick={(event) => {
                    event.preventDefault();
                    funAction(event, x);
                  }}
                >
                  <a href="">Edit</a>/<a href="">Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
