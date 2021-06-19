import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../icons/cart-icon.svg";
import { ReactComponent as HeartIcon } from "../../icons/heart-icon.svg";
import { ReactComponent as Logo } from "../../icons/cricket.svg";
import SearchIcon from "../../icons/search.svg";
import { useECommerceContext } from "../../context";
import "./navbar.css";
import { SET__SEARCH__TEXT } from "../../constants";

function Navbar() {
	const { state, dispatch } = useECommerceContext();
	const [searchTerm, setSearchTerm] = useState("");

	const searchInputHandler = (e) => {
		setSearchTerm(e.target.value);
		return dispatch({ type: SET__SEARCH__TEXT, payload: e.target.value });
	};

	return (
		<div>
			<nav className="navbar--with-search">
				<div className="flex-row-space-between">
					<div className="nav-logo-container">
						<Logo className="mr-8" />
						<Link className="navbar__title ls-1 mb-5" to="/">
							cric shop
						</Link>
						<div className="search__wrap ml-32">
							<img className="search-icon" src={SearchIcon} alt="icon" />
							<input
								className="search-input padding-l32 padding-r8"
								type="text"
								value={searchTerm}
								onChange={(e) => searchInputHandler(e)}
								placeholder="Search for products..."
							/>
						</div>
					</div>

					<div className="flex-row-space-between">
						{state.isAuthenticated ? (
							<Link to="/my-account">
								<div className="profile__image c-pointer">
									<img
										className="avatar--medium rounded-image"
										src="https://polish-ui.netlify.app/icons/fallback.svg"
										alt="Avatar"
									/>
								</div>
							</Link>
						) : (
							<Link to="/my-account">
								<button className="button navbar--button font-color--white mr-16">
									Sign In
								</button>
							</Link>
						)}
						<div className="icons-div">
							{state.wishList?.products?.length > 0 && (
								<div className="notification-div">
									{state.wishList.products.length}
								</div>
							)}
							<Link
								className="display-block"
								to={`/user/${state?.user?._id ? state.user._id : "user"}/wishlist`}
							>
								<HeartIcon className="nav-icon-dimensions c-pointer" />
							</Link>
						</div>
						<div className="icons-div">
							{state.cartList?.products?.length > 0 && (
								<div className="notification-div">
									{state.cartList.products.length}
								</div>
							)}
							<Link
								className="display-block"
								to={`/user/${state?.user?._id ? state.user._id : "user"}/cart`}
							>
								<CartIcon className="nav-icon-dimensions c-pointer" />
							</Link>
						</div>
					</div>
				</div>
				<div className="search__wrap--mobile mt-8">
					<img className="search-icon" src={SearchIcon} alt="icon" />
					<input
						className="search-input padding-l32 padding-r8"
						type="text"
						value={searchTerm}
						onChange={(e) => searchInputHandler(e)}
						placeholder="Search for products..."
					/>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
