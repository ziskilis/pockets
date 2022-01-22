import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import RegPage from "./pages/RegPage/RegPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { useEffect, useState } from "react";
import { check } from "./store/actions";

function App() {
  let [loading, setLoading] = useState(false);
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    check(dispatch);
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {loading ? undefined : (
          <Routes>
            <Route path="/reg" element={<RegPage />} />
            <Route path="/auth" element={<AuthPage />} />
            {isAuth ? (
              <Route exact path="/" element={<MainPage />} />
            ) : undefined}
            <Route path="*" element={<AuthPage />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
