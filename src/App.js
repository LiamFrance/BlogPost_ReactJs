import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PostPage from "./pages/PostPage";
import PostDetailPage from "./pages/PostDetailPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import LoginSuccess from "./shared/components/LoginSuccess";
function App() {
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));
  const [userId, setUserId] = useState(localStorage.getItem("USERID"));
  useEffect(() => {
    if (token) {
      localStorage.setItem("TOKEN", token);
    } else {
      localStorage.removeItem("TOKEN");
    }
    if (userId) {
      localStorage.setItem("USERID", userId);
    } else {
      localStorage.removeItem("USERID");
    }
    return () => {};
  }, [token, userId]);
  console.log("token: ", token);
  console.log("userId: ", userId);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/posts" exact>
            <PostPage />
          </Route>
          <Route path="/posts/:id" exact>
            <PostDetailPage />
          </Route>
          <Route
            path="/login"
            exact
            render={() => {
              if (token) {
                return <LoginSuccess />;
              }
              return <LoginPage setToken={setToken} setUserId={setUserId} />;
            }}
          ></Route>
          <Route
            path="/profile"
            exact
            render={() => {
              if (!token) {
                return <LoginPage setToken={setToken} setUserId={setUserId} />;
              }
              return <ProfilePage />;
            }}
          ></Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
