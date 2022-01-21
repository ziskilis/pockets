import './AddCategoryModal.css'
import { useDispatch } from "react-redux";
import { addCategoryCreator } from '../../../store/actions';
import {useState} from 'react';
import {useSelector} from 'react-redux'

function AddCategoryModal ({active, setActive}) {
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const addCategoryHandler = (category) => {
        addCategoryCreator(dispatch,category,user.id)
        setActive(false)
        setCategory('')
    };

    return ( 
        <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
       <div className='modal__content' onClick={(e)=>e.stopPropagation()}>
           <label>Добавить категорию</label>
           <input type='text' 
           value={category}
           onChange={(e) => setCategory(e.target.value)}
           />
           <button onClick={() => addCategoryHandler(category)}>Добавить</button>
       </div>
        </div>
     );
}

export default AddCategoryModal ;