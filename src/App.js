import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import SinglePostPage from "./pages/singlePost/SinglePostPage";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //for testing
  const user = true;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <SinglePostPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
