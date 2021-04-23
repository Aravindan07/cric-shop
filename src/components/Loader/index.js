import "./styles.css";

function Loader() {
	console.log("Running Loader");
	return (
		<div className="loading-bg">
			<div className="lds-default">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Loader;
