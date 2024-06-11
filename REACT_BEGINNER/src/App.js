import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

// Injected into index.js Render function as <App/>
// this is not html, it is JSX even though they look very similar.
function App() {
  return (

    /* Utilize the react router here. */
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>

            {/* Catch all as last route. Redir to 404 page */}
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>

        </div> {/* /content */}
      </div>  {/* /app */}
    </Router>
  );
}

// exported to be used elsewhere.
export default App;
