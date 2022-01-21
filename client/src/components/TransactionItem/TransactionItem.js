import './TransactionItem.css'
import { useDispatch } from "react-redux";
import { deleteTransactionCreator } from '../../store/actions';

function TransactionItem ({transaction, editHandler}) {
    const {date,category,cost,type,id} = transaction
    const dispatch = useDispatch();
    const styles = `transaction__content ${type === 'INC' ? 'green-text': ''}`
    return (
    <div className="transaction-container" >
       <div className={styles} >{date.slice(0,10)}</div>
       <div className={styles} >{category.name || category}</div>
       <div className={styles} >{cost}</div>
       <div className={styles} >
           <button className="transaction__button" onClick={() => editHandler(transaction)}>Редактировать</button>
           <button className="transaction__button" onClick={() => deleteTransactionCreator(dispatch, id)}>Удалить</button>
       </div>
    </div>
    )
}

export default TransactionItem