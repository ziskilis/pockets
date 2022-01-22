import "./UserInfo.css";
import { useSelector } from "react-redux";
import { logout } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserInfo() {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  function logoutHandler() {
    dispatch(logout());
    navigate("/auth", { replace: true });
  }
  return (
    <div className="user-info__container">
      <button className="summary__logout" onClick={logoutHandler}>
        Выход
      </button>
    </div>
  );
}

export default UserInfo;
