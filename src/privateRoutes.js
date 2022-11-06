import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ path, ...props }) => {
	const userAuthenticated = localStorage.getItem("isAuthenticated");

	return userAuthenticated ? (
		<Route path={path} {...props} />
	) : (
		<Redirect
			to={{
				pathname: "/my-account",
				state: { from: props.location },
			}}
		/>
	);
};
