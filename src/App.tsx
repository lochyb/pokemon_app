import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  NavLink,
} from "react-router-dom";
import "./App.css";
import ShinyCards from "./components/ShinyList/ShinyTop";
import Searchpage from "./components/Search/Searchpage";
import { Home } from "./components/Home/Home";
import Footer from "./components/Home/Footer";

function Search() {
  let match = useRouteMatch();
  return (
    <div className='search'>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <PokemonSearch />
        </Route>
        <Route path={match.path}>
          <Searchpage selectedId={"1"} />
        </Route>
      </Switch>
    </div>
  );
}

function PokemonSearch() {
  let { topicId }: any = useParams();
  return <Searchpage selectedId={topicId} />;
}

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className='navbar'>
          <NavLink activeClassName='active' exact to='/'>
            Home
          </NavLink>
          <NavLink activeClassName='active' to='/shinylist'>
            Shiny List
          </NavLink>
          <NavLink activeClassName='active' to='/search'>
            Search
          </NavLink>
        </div>
        <Switch>
          <Route path='/shinylist' component={ShinyCards}></Route>
          <Route path='/search' component={Search}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
