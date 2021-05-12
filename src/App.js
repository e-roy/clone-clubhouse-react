import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Invite from "./pages/Invite";
import Calendar from "./pages/Calendar";
import Notifications from "./pages/Notifications";

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
          "/calendar",
          "/notifications",
        ]}
      >
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={() => <Home />}></Route>
            <Route exact path="/explore" component={Explore}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/invite" component={Invite}></Route>
            <Route exact path="/calendar" component={Calendar}></Route>
            <Route
              exact
              path="/notifications"
              component={Notifications}
            ></Route>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
