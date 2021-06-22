/** @format */
import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ id, amountShipping, amount, items, timestamp, images }) {
  return (
    <div>
      <p>{id}</p>
      <p>{moment.unix(timestamp).format("DD MM YY")}</p>
    </div>
  );
}

export default Order;
