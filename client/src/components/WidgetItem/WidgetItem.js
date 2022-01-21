import './WidgetItem.css'
import { useDispatch } from "react-redux";
import { deleteWidgetCreator } from '../../store/actions';


function WidgetItem({props}) {
    const dispatch = useDispatch();
    return ( 
<div className="widget-container">
<div className="widget-label">Тратить на {props.category.name} меньше {props.amount} рублей.</div>
<div className="widget-delete" onClick={() => deleteWidgetCreator(dispatch ,props.id)}>
    </div>
<div className="widget-period">{props.period}</div>
<div className="widget-amount">{props.count || 0}/{props.amount}</div>
        </div>
     );
}

export default WidgetItem;