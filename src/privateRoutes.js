// import {} from

import { Redirect, Route } from "react-router";
import { useMainContext } from "./context/main-context";

// export const PrivateRoute = ({ path, ...props }) => {
// 	const { authState } = useAuth();
// 	return authState.isLoggedIn ? (
// 		<Route path={path} {...props} />
// 	) : (
// 		<Navigate state={{ from: path }} replace to="/login" />
// 	);
// };

export const PrivateRoute = ({ path, ...props }) => {
	const {
		state: { isAuthenticated },
	} = useMainContext();
	return isAuthenticated ? (
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
