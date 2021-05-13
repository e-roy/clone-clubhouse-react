import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/AppSignIn/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/AppSignIn/PhoneConfirmation";
import CodeConfirm from "./pages/AppSignIn/CodeConfirm";
import AllowNotification from "./pages/AppSignIn/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/App/home/Home";
import Explore from "./pages/App/explore/Explore";
import Profile from "./pages/App/profile/Profile";
import Invite from "./pages/App/invite/Invite";
import Upcoming from "./pages/App/upcoming/Upcoming";
import Activity from "./pages/App/activity/Activity";

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={[
          "/",
          "/phone-confirm",
          "/get_username",
          "/code_confirm",
          "/allow_notification",
        ]}
      >
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/phone-confirm" component={PhoneConfirmation} />
            <Route exact path="/code_confirm" component={CodeConfirm} />
            <Route
              exact
              path="/allow_notification"
              component={AllowNotification}
            />
          </Switch>
        </PlanLayout>
      </Route>
      <Route
        exact
        path={[
          "/home",
          "/explore",
          "/profile",
          "/invite",
          "/upcoming",
          "/activity",
        ]}
      >
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={() => <Home />}></Route>
            <Route exact path="/explore" component={Explore}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/invite" component={Invite}></Route>
            <Route exact path="/upcoming" component={Upcoming}></Route>
            <Route exact path="/activity" component={Activity}></Route>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
