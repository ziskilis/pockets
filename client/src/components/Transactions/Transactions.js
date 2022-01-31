import { useState, useEffect } from "react";
import "./Transactions.css";
import { useSelector, useDispatch } from "react-redux";
import TransactionItem from "../TransactionItem/TransactionItem";
import AddTransactionModal from "../Modals/AddTransactionModal/AddTransactionModal";
import EditTransactionModal from "../Modals/editTransactionModal/EditTransactionModal";
import { getTransactionCreator } from "../../store/actions";

function Transactions() {
  const transactions = useSelector((state) => state.transactions);
  let [addModal, setAddModal] = useState(false);
  let [editModal, setEditModal] = useState(false);
  let [editItem, setEditItem] = useState({});

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTransactionCreator(dispatch, user.id);
    setLoading(false);
  }, []);

  const editHandler = (transaction) => {
    setEditItem(transaction);
    setEditModal(true);
  };

  return (
    <table className="transactions-container">
      <tr className="transactions__header">
      <td className="transactions__header__item">Дата</td>
      <td className="transactions__header__item">Категория</td>
      <td className="transactions__header__item">Сумма</td >
      <td  className="transactions__header__add-transaction" onClick={() => setAddModal(true)}>
        Добавить транзакцию
      </td>
      </tr>
 
      {loading ? (
        null
      ) : (
        transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            editHandler={editHandler}
          />
        ))
      )}
      <AddTransactionModal active={addModal} setActive={setAddModal} />
      <EditTransactionModal
        active={editModal}
        setActive={setEditModal}
        editItem={editItem}
      />
    </table>
  );
}

export default Transactions;
