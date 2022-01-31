import "./Widgets.sass";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WidgetItem from "../WidgetItem/WidgetItem";
import AddWidgetModal from "../Modals/AddWidgetModal/AddWidgetModal";
import { getWidgetCreator } from "../../store/actions";

function Widgets() {
  const widgets = useSelector((state) => state.widgets);
  let [modal, setModal] = useState(false);
  let [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    getWidgetCreator(dispatch, user.id);
    setLoading(false);
  }, []);

  return (
    <div className="widgets__block">
      <div className="widgets-container">
        {loading ? (
          <div> Тут могла быть ваша реклама</div>
        ) : (
          widgets.map((widget) => {
            return <WidgetItem key={widget.id} props={widget} />;
          })
        )}
      </div>
      <div className="widgets__control-panel">
        <div className="widgets__add" onClick={() => setModal(true)}>
          Добавить виджет
        </div>
      </div>
      <AddWidgetModal active={modal} setActive={setModal} />
    </div>
  );
}

export default Widgets;
