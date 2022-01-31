import "./AuthPage.css";
import { login } from "../../store/actions";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AuthPage() {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const changeAuthDataHandler = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  function authHandler(authData) {
    login(dispatch, authData);
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
        <label className="auth-page__label">Email</label>
        <input
          type="text"
          value={authData.email}
          className="auth-page__input"
          name="email"
          onChange={(e) => changeAuthDataHandler(e)}
        />
        <label className="auth-page__label">Пароль</label>
        <input
          type="password"
          value={authData.password}
          className="auth-page__input"
          name="password"
          onChange={(e) => changeAuthDataHandler(e)}
        />
        <button
          className="auth-page__submit-button"
          onClick={() => authHandler(authData)}
        >
          Войти
        </button>
        <div className="auth-page__redirect-text">
          Впервые здесь? <Link to="/reg">создайте аккаунт.</Link> 
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
