import CarouselSlider from "../../components/Carousel-slider";
import Card from "../../components/Card";
import { useECommerceContext } from "../../context";
import { getSortedData, getFilteredData } from "../../utils/Filter";
import FilterComponent from "../../components/FilterComponent";
import { NavLink } from "react-router-dom";
import "./products.css";
import { useEffect, useState } from "react";
import { useScrollToTop } from "../../utils/scrollToTop";

function Products() {
	const {
		state: {
			showFastDeliveryOnly,
			sortBy,
			includeOutOfStock,
			products,
			categories,
			searchText,
			showFilters,
		},
	} = useECommerceContext();
	const [searchItems, setSearchedItems] = useState([]);
	const sortedData = getSortedData(products, sortBy);
	const filteredData = getFilteredData(includeOutOfStock, showFastDeliveryOnly, sortedData);

	const sortedDataAfterSearch = getSortedData(searchItems, sortBy);
	const filteredDataAfterSearch = getFilteredData(
		includeOutOfStock,
		showFastDeliveryOnly,
		sortedDataAfterSearch
	);

	useScrollToTop();

	useEffect(() => {
		if (searchText === "") {
			return setSearchedItems([]);
		}
		let searchedData =
			filteredData &&
			filteredData.filter((data) =>
				data.name.toLowerCase().includes(searchText.toLowerCase())
					? data.name.toLowerCase().includes(searchText.toLowerCase())
					: data.brand.toLowerCase().includes(searchText.toLowerCase())
			);
		setSearchedItems(searchedData);

		return () => setSearchedItems([]);
	}, [searchText]);

	return (
		<>
			{showFilters && <FilterComponent />}
			<CarouselSlider />
			<h2 className="text-center mt-16">Pick & Play</h2>
			<div className="flex-row-center mt-16 mb-16">
				<NavLink
					to="/"
					className="category-button padding-t8 padding-b8 padding-l8 padding-r8 ml-16 mr-16 mt-8 mb-8 c-pointer br-10 ls-1"
				>
					All
				</NavLink>
				{categories.map((category) => (
					<NavLink
						to={{
							pathname: `/categories/${category.categoryName}`,
						}}
						key={category._id}
						className="category-button padding-t8 padding-b8 padding-l8 padding-r8 ml-16 mr-16 mt-8 mb-8 c-pointer br-10 ls-1"
						activeClassName="active-style"
					>
						{category.categoryName}
					</NavLink>
				))}
			</div>
			<div className="padding-r8 padding-l8 mt-16 flex-row-center">
				{!searchItems || searchItems.length === 0 ? (
					filteredData?.map((item) => <Card key={item._id} item={item} />)
				) : (
					<>
						{filteredDataAfterSearch.length > 0 &&
							filteredDataAfterSearch.map((item) => (
								<Card key={item._id} item={item} />
							))}
					</>
				)}
			</div>
		</>
	);
}

export default Products;
