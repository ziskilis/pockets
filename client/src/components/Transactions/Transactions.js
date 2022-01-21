import {useState, useEffect} from 'react';
import './Transactions.css'
import {useSelector, useDispatch} from 'react-redux'
import TransactionItem from '../TransactionItem/TransactionItem';
import AddTransactionModal from '../Modals/AddTransactionModal/AddTransactionModal';
import EditTransactionModal from '../Modals/editTransactionModal/EditTransactionModal';
import { getTransactionCreator} from '../../store/actions';

function Transactions () {
    const transactions = useSelector((state) => state.transactions);
    let [addModal, setAddModal] = useState(false);
    let [editModal, setEditModal] = useState(false);
    let [editItem, setEditItem] = useState({});

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    let [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        getTransactionCreator(dispatch,user.id)
        setLoading(false)
    },[])

    const editHandler = (transaction) => {
        setEditItem(transaction)
        setEditModal(true)
    };

    return (
    <div className="transactions-container" >
       <div className="transactions__header" >Дата</div>
       <div className="transactions__header" >Категория</div>
       <div className="transactions__header" >Сумма</div>
       <div className="transactions__header" onClick={() => setAddModal(true)} >Добавить транзакцию</div>
      {  loading
      ?
      <div>Идет загрузка...</div>
           :
          transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} editHandler={editHandler} />)
      }
       <AddTransactionModal active={addModal} setActive={setAddModal} />
       <EditTransactionModal active={editModal} setActive={setEditModal} editItem={editItem} />
    </div>
    )
}

export default Transactions