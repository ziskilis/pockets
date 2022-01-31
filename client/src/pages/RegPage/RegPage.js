import { registration } from "../../store/actions";
import "./RegPage.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function RegPage() {
  const [regData, setRegData] = useState({
    email: "",
    password: "",
    login: "",
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const changeRegDataHandler = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };
  function regHandler(regData) {
    registration(dispatch, regData);
    navigate("/", { replace: true });
  }
  return (
    <div className="auth-container">
      <div className="auth-page">
        <div className="auth-page__name">Карманы</div>
        <div className="auth-page__text-container">
          <div className="auth-page__text-container-header">
            Добро пожаловать в Карманы!
          </div>
          <div className="auth-page__text-container-text">
            Пожалуйста войдите в аккаунт
          </div>
        </div>
        <label className="auth-page__label">Введите ваше имя</label>
        <input
          type="text"
          value={regData.login}
          className="auth-page__input"
          name="login"
          onChange={(e) => changeRegDataHandler(e)}
        />
        <label className="auth-page__label">Введите ваш email</label>
        <input
          type="text"
          value={regData.email}
          className="auth-page__input"
          name="email"
          onChange={(e) => changeRegDataHandler(e)}
        />
        <label className="auth-page__label">Введите ваш пароль</label>
        <input
          type="password"
          value={regData.password}
          className="auth-page__input"
          name="password"
          onChange={(e) => changeRegDataHandler(e)}
        />
        <button
          className="auth-page__submit-button"
          onClick={() => regHandler(regData)}
        >
          Зарегистрироваться
        </button>
        <div className="auth-page__redirect-text">
          У вас уже есть аккаунт? <Link to='/auth'>Войдите!</Link> 
        </div>
      </div>
    </div>
  );
}

export default RegPage;
