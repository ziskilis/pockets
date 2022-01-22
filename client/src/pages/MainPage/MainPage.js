import { useEffect } from "react";
import Summary from "../../components/Summary/Summary";
import Transactions from "../../components/Transactions/Transactions";
import Widgets from "../../components/Widgets/Widgets";
import { getCategoryCreator } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../../components/UserInfo/UserInfo";

function MainPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getCategoryCreator(dispatch, user.id);
  }, []);
  return (
    <div>
      <Transactions />
      <UserInfo />
      <Summary />
      <Widgets />
    </div>
  );
}

export default MainPage;
