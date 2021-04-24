import CarouselSlider from "../../components/Carousel-slider";
import Card from "../../components/Card";
import { useMainContext } from "../../context/main-context";
import { getSortedData, getFilteredData } from "../../utils/Filter";
import FilterComponent from "../../components/FilterComponent";
import "./styles.css";
import { NavLink } from "react-router-dom";

function Products() {
	const {
		state: { showFastDeliveryOnly, sortBy, includeOutOfStock, products, categories },
	} = useMainContext();

	const sortedData = getSortedData(products, sortBy);
	const filteredData = getFilteredData(includeOutOfStock, showFastDeliveryOnly, sortedData);

	return (
		<>
			<FilterComponent />
			<CarouselSlider />
			<h2 className="text-center mt-16">Pick & Play</h2>
			<div className="flex-row-center mt-16 mb-16">
				<NavLink
					to="/"
					className="category-button padding-t8 padding-b8 padding-l8 padding-r8 ml-16 mr-16 c-pointer br-10 ls-1"
				>
					All
				</NavLink>
				{categories.map((category) => (
					<NavLink
						to={{
							pathname: `/categories/${category.categoryName}`,
						}}
						key={category._id}
						className="category-button padding-t8 padding-b8 padding-l8 padding-r8 ml-16 mr-16 c-pointer br-10 ls-1"
						activeStyle={{
							boxShadow: "0px 0px 20px rgba(243, 244, 246, 0.8)",
							transform: "scale(1.03)",
							backgroundColor: "var(--primary-color)",
							color: "#fff",
						}}
					>
						{category.categoryName}
					</NavLink>
				))}
			</div>
			<div className="padding-r8 padding-l8 mt-16 flex-row-center">
				{filteredData && filteredData.map((item) => <Card key={item._id} item={item} />)}
			</div>
		</>
	);
}

export default Products;
