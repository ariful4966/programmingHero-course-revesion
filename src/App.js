import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";
import Posts from "./components/Posts/Posts";

export const DataProvide = createContext()
function App() {
  const [posts, setPosts] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/posts`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, [])
  return (
    <DataProvide.Provider value={posts}>
      <Router>
        <Header />
        <Switch>
          <Route path="/post/:id">
            <PostDetail/>
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </DataProvide.Provider >
  );
}

export default App;
