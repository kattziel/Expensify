import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";

function App() {
  // deklaracje dwoch zmiennych za pomocą destrukturyzacji
  // const data = useAuthContext()
  // const user = data.user
  // const authIsReady = data.user

  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/signup">
              {user && user.displayName && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
