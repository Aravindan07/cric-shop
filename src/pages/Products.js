import CarouselSlider from "../components/Carousel-slider";
import Card from "../components/Card";
import { useMainContext } from "../context/main-context";
import {
	INCLUDE__FAST__DELIVERY,
	INCLUDE__OUT__OF__STOCK,
	PRICE__HIGH__TO__LOW,
	PRICE__LOW__TO__HIGH,
} from "../constants";
import { getSortedData, getFilteredData } from "../utils/Filter";

function Products() {
	const {
		state: { showFastDeliveryOnly, sortBy, includeOutOfStock, products },
		dispatch,
	} = useMainContext();
	console.log("State in products page", products);

	const sortedData = getSortedData(products, sortBy);
	const filteredData = getFilteredData(includeOutOfStock, showFastDeliveryOnly, sortedData);

	return (
		<>
			<div className="mb-16 padding-l8 padding-r8 padding-t8 padding-b8">
				<fieldset className="flex-col padding-l16 padding-r16 padding-t16 padding-b16 border-5">
					<legend>Sort By</legend>
					<label className="mb-8">
						<input
							type="radio"
							name="sort"
							onChange={() => dispatch({ type: PRICE__HIGH__TO__LOW })}
							checked={sortBy && sortBy === PRICE__HIGH__TO__LOW}
						></input>{" "}
						Price - High to Low
					</label>
					<label className="mb-8">
						<input
							type="radio"
							name="sort"
							onChange={() => dispatch({ type: PRICE__LOW__TO__HIGH })}
							checked={sortBy && sortBy === PRICE__LOW__TO__HIGH}
						></input>{" "}
						Price - Low to High
					</label>
				</fieldset>

				<fieldset className="mt-16 flex-col padding-l16 padding-r16 padding-t16 padding-b16 border-5">
					<legend> Filters </legend>
					<label className="mb-8">
						<input
							className="mr-8"
							type="checkbox"
							checked={includeOutOfStock}
							onChange={() => dispatch({ type: INCLUDE__OUT__OF__STOCK })}
						/>
						Include Out of Stock
					</label>

					<label className="mb-8">
						<input
							className="mr-8"
							type="checkbox"
							checked={showFastDeliveryOnly}
							onChange={() => dispatch({ type: INCLUDE__FAST__DELIVERY })}
						/>
						Fast Delivery Only
					</label>
				</fieldset>
			</div>
			<CarouselSlider />
			<div className="padding-r8 padding-l8 mt-16">
				<h2>Products</h2>
				{filteredData && filteredData.map((item) => <Card key={item.id} item={item} />)}
			</div>
		</>
	);
}

export default Products;
