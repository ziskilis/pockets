import './AddWidgetModal.css'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addWidgetCreator} from '../../../store/actions';
import {useSelector} from 'react-redux'


function AddWidgetModal ({active, setActive}) {
    const user = useSelector((state) => state.user);
    const categoryList = useSelector((state) => state.category);
    const [widget, setWidget] = useState({category:0, amount:'', period:'', userId:user.id});
    const dispatch = useDispatch();
    const period = [30,180,365]

    const addWidgetHandler = (widget) => {
        addWidgetCreator(dispatch ,{...widget, categoryId: +widget.category})
        setActive(false)
        setWidget({category:0, amount:'', period:'', userId:user.id})
    };

    const changeWidgetHandler = (e) => {
        setWidget({...widget, [e.target.name]: e.target.value})
    };

    return ( 
    <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
       <div className='add-widget-modal__content' onClick={(e)=>e.stopPropagation()}>
           <h2>Добавить виджет</h2>
<input type="number" className="add-widget-modal__items" value={widget.amount} name="amount" placeholder='Сумма'  onChange={(e) => changeWidgetHandler(e)}/>
<select className="add-widget-modal__items"  value={widget.category} name="category" onChange={(e) => changeWidgetHandler(e)}>
<option className="description">Выберите категорию</option>
{categoryList.map(e => <option key={e.id} value={e.id}  >{e.name}</option> )}
</select>
<select className="add-widget-modal__items"  value={widget.period} name="period"  onChange={(e) => changeWidgetHandler(e)}>
<option >Выберите период</option>
{period.map(e => <option key={e}  >{e}</option> )}
</select>
           <button className="add-widget-modal__button" onClick={() => addWidgetHandler(widget)}>Добавить</button>
       </div>
        </div>
     );
}

export default AddWidgetModal ;