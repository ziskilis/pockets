import "./AddTransactionModal.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addTransactionCreator } from "../../../store/actions";
import { useSelector } from "react-redux";

function AddTransactionModal({ active, setActive }) {
  const user = useSelector((state) => state.user);
  const [transaction, setTransaction] = useState({
    date: "",
    category: "",
    cost: "",
    type: "DEC",
    userId: user.id,
  });
  const categoryList = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const addTransactionHandler = (transaction) => {
    addTransactionCreator(dispatch, transaction);
    setActive(false);
    setTransaction({
      date: "",
      category: "",
      cost: "",
      type: "DEC",
      userId: user.id,
    });
  };
  const changeTransactionHandler = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (categoryList[0])
      setTransaction({ ...transaction, category: categoryList[0].name });
  }, [categoryList]);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2>Добавить транзакцию</h2>
        <select
          className="modal-select"
          name="type"
          value={transaction.type}
          onChange={(e) => changeTransactionHandler(e)}
        >
          <option value="INC">Доход</option>
          <option value="DEC">Расход</option>
        </select>
        <input
          type="date"
          className="modal__items"
          value={transaction.date}
          name="date"
          placeholder="Дата"
          onChange={(e) => changeTransactionHandler(e)}
        />
        <select
          className="modal__items"
          value={transaction.category}
          name="category"
          onChange={(e) => changeTransactionHandler(e)}
        >
          {categoryList.map((e) => (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="modal__items"
          value={transaction.cost}
          name="cost"
          placeholder="Сумма"
          onChange={(e) => changeTransactionHandler(e)}
        />
        <button
          className="modal__button"
          onClick={() => addTransactionHandler(transaction)}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default AddTransactionModal;
