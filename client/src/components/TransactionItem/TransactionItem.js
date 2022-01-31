import "./TransactionItem.css";
import { useDispatch } from "react-redux";
import { deleteTransactionCreator } from "../../store/actions";

function TransactionItem({ transaction, editHandler }) {
  const { date, category, cost, type, id } = transaction;
  const dispatch = useDispatch();
  const styles = `transaction__content ${type === "INC" ? "green-text" : ""}`;
  return (
    <tr className="transaction-container">
      <td  className={styles}>{date.slice(0, 10)}</td>
      <td  className={styles}>{category.name || category}</td>
      <td  className={styles}>{cost}</td>
      <td  className={styles}>
        <button
          className="transaction__button__edit"
          onClick={() => editHandler(transaction)}
        >
          Редактировать
        </button>
        <button
          className="transaction__button__delete"
          onClick={() => deleteTransactionCreator(dispatch, id)}
        > Удалить</button>
       
      </td>
    </tr>
  );
}

export default TransactionItem;
