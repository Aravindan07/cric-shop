import CarouselSlider from "../../components/Carousel-slider";
import Card from "../../components/Card";
import { useMainContext } from "../../context/main-context";
import { getSortedData, getFilteredData } from "../../utils/Filter";
import FilterComponent from "../../components/FilterComponent";

function Products() {
	const {
		state: { showFastDeliveryOnly, sortBy, includeOutOfStock, products },
	} = useMainContext();

	const sortedData = getSortedData(products, sortBy);
	const filteredData = getFilteredData(includeOutOfStock, showFastDeliveryOnly, sortedData);

	return (
		<>
			<FilterComponent />
			<CarouselSlider />
			<h2 className="text-center mt-16">Pick & Play</h2>
			<div className="padding-r8 padding-l8 mt-16 flex-row-center">
				{filteredData && filteredData.map((item) => <Card key={item._id} item={item} />)}
			</div>
		</>
	);
}

export default Products;
