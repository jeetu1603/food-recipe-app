import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";

const Logo = styled(Link)`
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: 400;
`;

const Nav = styled.div`
	padding: 4rem 0rem;
	display: flex;
	justify-content: center;
	align-items: center;

	svg{
		font-size: 2rem;
	}
`;

const App = () => {
	return(
		<div>
			<BrowserRouter>
				<Nav>
					<GiKnifeFork />
					<Logo to={"/"}>Delicious</Logo>
				</Nav>
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;