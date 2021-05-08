import { useState } from "react";
import { SET__LOGIN, SET__LOGOUT, SHOW__MESSAGE } from "../../constants";
import { useECommerceContext } from "../../context";
import { toast } from "react-toastify";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDocumentTitle } from "../../utils/useDocumentTitle";

function AccountPage() {
	const { dispatch, state } = useECommerceContext();
	useDocumentTitle("My Account | CricShop");
	let history = useHistory();
	let location = useLocation();
	const initialValues = {
		email: "",
		password: "",
	};
	const [{ email, password }, setState] = useState(initialValues);

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		return setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const signInClickHandler = () => {
		if (email === "test123@gmail.com" && password === "test@123") {
			dispatch({ type: SET__LOGIN });
			dispatch(
				{ type: SHOW__MESSAGE, payload: "Logged In successfully" },
				toast.success("Logged in successfully", {
					style: { backgroundColor: "##15b996" },
					autoClose: 2000,
					hideProgressBar: true,
				})
			);
			let { from } = location.state || { from: { pathname: "/" } };
			return history.replace(from);
		}
		return dispatch(
			{ type: SHOW__MESSAGE, payload: "Invalid Credentials" },
			toast.error("Invalid Credentials", {
				style: { backgroundColor: "#b91538" },
				autoClose: 2000,
				hideProgressBar: true,
			})
		);
	};

	const logoutClickHandler = () => {
		dispatch({ type: SET__LOGOUT });
		return dispatch(
			{ type: SHOW__MESSAGE, payload: "Logged out successfully" },
			toast.error("Logged out successfully", {
				style: { backgroundColor: "#b91538" },
				autoClose: 2000,
				hideProgressBar: true,
			})
		);
	};

	return (
		<div className="flex-col-center">
			{state.isAuthenticated ? (
				<>
					<button
						className="button button--error font-color--white mt-16 mb-16"
						onClick={logoutClickHandler}
					>
						Logout
					</button>
					<Link to="/">Home</Link>
				</>
			) : (
				<>
					<h2>Login to your account</h2>
					<input
						type="text"
						className="input__control mt-16 mb-16"
						name="email"
						value={email}
						onChange={onChangeHandler}
						placeholder="Enter your email"
						required
					/>
					<input
						type="password"
						className="input__control mt-16 mb-16"
						name="password"
						value={password}
						onChange={onChangeHandler}
						placeholder="Enter your password"
						required
					/>
					<button
						className="button navbar--button font-color--white mt-16 mb-16"
						onClick={signInClickHandler}
					>
						Sign In
					</button>
					<p>Test Credentials</p>
					<p>Email: test123@gmail.com</p>
					<p>Password: test@123</p>
				</>
			)}
		</div>
	);
}

export default AccountPage;
