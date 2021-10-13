// import TableBoots from "./component/TableBoots";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Header from "./component/header/Header";
import { Comment } from "./component/comments/Comment";
// import PostView from "./component/post-view/PostView";
// import PostEdit from "./component/post-edit/PostEdit";

function App() {
  return (
    <div className="App text-center ">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id" component={Comment} />
          <Route path="/about" component={About} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
