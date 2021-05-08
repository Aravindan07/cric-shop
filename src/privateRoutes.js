import { Redirect, Route } from "react-router";
import { useECommerceContext } from "./context";

export const PrivateRoute = ({ path, ...props }) => {
	const {
		state: { isAuthenticated },
	} = useECommerceContext();
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
