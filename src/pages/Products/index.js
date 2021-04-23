import CarouselSlider from "../../components/Carousel-slider";
import Card from "../../components/Card";
import { useMainContext } from "../../context/main-context";
import { getSortedData, getFilteredData } from "../../utils/Filter";
import FilterComponent from "../../components/FilterComponent";
import "./styles.css";
import { useHistory } from "react-router";

function Products() {
	const history = useHistory();
	const {
		state: { showFastDeliveryOnly, sortBy, includeOutOfStock, products, categories },
	} = useMainContext();

	const sortedData = getSortedData(products, sortBy);
	const filteredData = getFilteredData(includeOutOfStock, showFastDeliveryOnly, sortedData);

	const showCategoryPage = (categoryName) => {
		return history.push(`/categories/${categoryName}`);
	};

	return (
		<>
			<FilterComponent />
			<CarouselSlider />
			<h2 className="text-center mt-16">Pick & Play</h2>
			<div className="flex-row-center mt-16 mb-16">
				<button className="category-button padding-t8 padding-b8 padding-l8 padding-r8 ml-16 mr-16 c-pointer br-10 ls-1">
					All
				</button>
				{categories.map((category) => (
					<button
						key={category._id}
						className="category-button padding-t8 padding-b8 padding-l8 padding-r8 ml-16 mr-16 c-pointer br-10 ls-1"
						onClick={() => showCategoryPage(category.categoryName)}
					>
						{category.categoryName}
					</button>
				))}
			</div>
			<div className="padding-r8 padding-l8 mt-16 flex-row-center">
				{filteredData && filteredData.map((item) => <Card key={item._id} item={item} />)}
			</div>
		</>
	);
}

export default Products;
