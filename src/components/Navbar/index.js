import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../icons/menu-icon.svg";
import { ReactComponent as CartIcon } from "../../icons/cart-icon.svg";
import { ReactComponent as HeartIcon } from "../../icons/heart-icon.svg";
import SearchIcon from "../../icons/search.svg";
import { useWishList } from "../../context/wishlistContext";
import "./styles.css";

function Navbar() {
	const { state } = useWishList();
	console.log(state.wishList.length);
	return (
		<div>
			{/* Change the className to navbar--with-search after pushing the component library  */}
			<nav className="navbar--with-search">
				{/* Change the className to flex-row-space-between after pushing the component library  */}
				<div className="flex-row-space-between">
					<div className="nav-logo-container">
						<MenuIcon className="menu-icon-dimensions mb-2 mr-8 c-pointer" />
						<Link className="navbar__title ls-1 mb-5" to="/">
							cric shop
						</Link>
					</div>
					<div className="navigation flex-row-space-between">
						{state.wishList.length > 0 && (
							<div className="notification-div">{state.wishList.length}</div>
						)}
						<Link to="/wishlist">
							<HeartIcon className="nav-icon-dimensions mr-16 c-pointer" />
						</Link>
						<Link to="/cart">
							<CartIcon className="nav-icon-dimensions mr-8 c-pointer" />
						</Link>
					</div>
				</div>
				{/* Remove the styles in App.css after pushing the component library  */}
				<div className="search__wrap">
					<img className="search-icon" src={SearchIcon} alt="icon" />
					<input
						className="search-input padding-l32 padding-r8"
						type="text"
						placeholder="Search for products..."
					/>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
