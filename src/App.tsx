import React from "react";
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
			<Router>
				<div className='navbar'>
					<NavLink activeClassName='active' exact to='/pokemon_app'>
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
					<Route path='/pokemon_app' component={Home}></Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
