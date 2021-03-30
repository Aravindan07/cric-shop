import React from "react";
import { ReactSVG } from "react-svg";
import MenuIcon from "../../icons/menu-icon.svg";
import CartIcon from "../../icons/cart-icon.svg";
import HeartIcon from "../../icons/heart-icon.svg";
import SearchIcon from "../../icons/search.svg";

function Navbar() {
	return (
		<div>
			{/* Change the className to navbar--with-search after pushing the component library  */}
			<nav className="navbar--with-search">
				{/* Change the className to flex-row-space-between after pushing the component library  */}
				<div className="flex-row-space-between">
					<div className="nav-logo-container">
						<ReactSVG
							className="menu-icon-dimensions mb-2 mr-8 c-pointer"
							src={MenuIcon}
						/>
						<a className="navbar__title ls-1 mb-5" href="/">
							cric shop
						</a>
					</div>
					<div className="navigation flex-row-space-between">
						<ReactSVG className="nav-icon-dimensions mr-16 c-pointer" src={HeartIcon} />
						<ReactSVG className="nav-icon-dimensions mr-8 c-pointer" src={CartIcon} />
					</div>
				</div>
				{/* Remove the styles in App.css after pushing the component library  */}
				<div className="search__wrap">
					<ReactSVG className="search-icon" src={SearchIcon} />
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
