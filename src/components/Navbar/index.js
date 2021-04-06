import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../icons/menu-icon.svg";
import { ReactComponent as CartIcon } from "../../icons/cart-icon.svg";
import { ReactComponent as HeartIcon } from "../../icons/heart-icon.svg";
import { ReactComponent as Logo } from "../../icons/cricket.svg";
import SearchIcon from "../../icons/search.svg";
import { useMainContext } from "../../context/main-context";
import "./styles.css";

function Navbar() {
	const { state } = useMainContext();
	console.log(state.wishList.length);
	return (
		<div>
			<nav className="navbar--with-search">
				<div className="flex-row-space-between">
					<div className="nav-logo-container">
						<MenuIcon className="menu-icon-dimensions mb-2 mr-8 c-pointer" />
						<Logo className="mr-8" />
						<Link className="navbar__title ls-1 mb-5" to="/">
							cric shop
						</Link>
						<div className="search__wrap ml-32">
							<img className="search-icon" src={SearchIcon} alt="icon" />
							<input
								className="search-input padding-l32 padding-r8"
								type="text"
								placeholder="Search for products..."
							/>
						</div>
					</div>

					<div className="flex-row-space-between">
						<div className="profile__image ml-32 mr-32 c-pointer">
							<img
								className="avatar--medium rounded-image"
								src="https://polish-ui.netlify.app/icons/fallback.svg"
								alt="Avatar"
							/>
						</div>
						<div className="icons-div mr-32">
							{state.wishList.length > 0 && (
								<div className="notification-div">{state.wishList.length}</div>
							)}
							<Link className="display-block" to="/wishlist">
								<HeartIcon className="nav-icon-dimensions c-pointer" />
							</Link>
						</div>
						<div className="icons-div mr-32">
							{state.cartList.length > 0 && (
								<div className="notification-div">{state.cartList.length}</div>
							)}
							<Link className="display-block" to="/cart">
								<CartIcon className="nav-icon-dimensions c-pointer" />
							</Link>
						</div>
					</div>
				</div>
				{/* Remove the styles in App.css after pushing the component library  */}
				{/* <div className="search__wrap">
					<img className="search-icon" src={SearchIcon} alt="icon" />
					<input
						className="search-input padding-l32 padding-r8"
						type="text"
						placeholder="Search for products..."
					/>
				</div> */}
			</nav>
		</div>
	);
}

export default Navbar;
