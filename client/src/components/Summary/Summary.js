import {useState} from 'react';
import AddCategoryModal from '../Modals/AddCategoryModal/AddCategoryModal';
import './Summary.css'
import {useSelector} from 'react-redux'


function Summary () {
    const category = useSelector((state) => state.category);
    let [modal, setModal] = useState(false)

    return (
    <div className="summary-container" >
        <div className="summary__logo" onClick={() => console.log(category)} >Сводка</div>
        <div className="summary__logo" onClick={() => setModal(true)}>Добавить категорию</div>
        <div>
        <div className="summary__logo">Расходы</div>
        <div className="summary__logo">Сумма</div>
        </div>
        
        {category.map(e => <div key={e.id} className="summary__item" >{e.name}</div> )}
        <AddCategoryModal active={modal} setActive={setModal} />
    </div>
    )
}

export default Summary