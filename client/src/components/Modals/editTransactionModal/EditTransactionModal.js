import './EditTransactionModal.css'
import { useDispatch } from "react-redux";
import {useEffect, useState} from 'react';
import {  editTransactionCreator } from '../../../store/actions';

function EditTransactionModal ({active, setActive, editItem}) {
    const [transaction, setTransaction] = useState({});
    useEffect(()=>{
        setTransaction(editItem)
    },[editItem])
    
    const dispatch = useDispatch();
    const editTransactionHandler = (transaction) => {
        dispatch(editTransactionCreator(transaction))
        setActive(false)
    };
    const changeTransactionHandler = (e) => {
        setTransaction({...transaction, [e.target.name]: e.target.value})
       
    };
    return ( 
    <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
       <div className='modal__content' onClick={(e)=>e.stopPropagation()}>
           <h2>Изменить транзакцию</h2>
           <select className="modal-select" name="type" value={transaction.type} onChange={(e) => changeTransactionHandler(e)}>
  <option value="INC">Доход</option>
  <option value="DEC">Расход</option>
</select>
<input className="modal__items" value={transaction.date} name="date" placeholder='Дата'  onChange={(e) => changeTransactionHandler(e)}/>
<input className="modal__items" value={transaction.category} name="category" placeholder='Категория' onChange={(e) => changeTransactionHandler(e)}/>
<input className="modal__items" value={transaction.cost} name="cost" placeholder='Сумма' onChange={(e) => changeTransactionHandler(e)}/>
           <button className="modal__button" onClick={() => editTransactionHandler(transaction)}>Изменить</button>
       </div>
        </div>
     );
}

export default EditTransactionModal ;