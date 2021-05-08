import CarouselSlider from "../../components/Carousel-slider";
import Card from "../../components/Card";
import { useECommerceContext } from "../../context";
import { getSortedData, getFilteredData } from "../../utils/Filter";
import FilterComponent from "../../components/FilterComponent";
import "./products.css";
import { NavLink } from "react-router-dom";

function Products() {
	const {
		state: { showFastDeliveryOnly, sortBy, includeOutOfStock, products, categories },
	} = useECommerceContext();
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
						activeClassName="active-style"
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
