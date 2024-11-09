import { Cart } from "../../interfaces/Cart";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const checkoutData = { ...cart, ...user };
  const handleCheckout = () => {
    localStorage.setItem("checkout", JSON.stringify(checkoutData));
    localStorage.setItem("cart", "[]");
    alert("Checkout successfully!");
    window.location.reload();
  };
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr className="text-center">
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Sumary</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item: Cart) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.price * item.quantity}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={3}>
            <strong>Total: </strong>
          </td>
          <td className="text-danger">
            {cart.reduce(
              (sum: number, item: Cart) => sum + item.price * item.quantity,
              0
            )}
          </td>
        </tr>
        <tr>
          <td colSpan={3}></td>
          <td>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;
