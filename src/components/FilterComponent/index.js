import { useECommerceContext } from "../../context";
import {
	PRICE__HIGH__TO__LOW,
	PRICE__LOW__TO__HIGH,
	INCLUDE__FAST__DELIVERY,
	INCLUDE__OUT__OF__STOCK,
	CLEAR__FILTERS,
} from "../../constants";
import "./filter.css";

export default function FilterComponent() {
	const {
		state: { showFastDeliveryOnly, sortBy, includeOutOfStock },
		dispatch,
	} = useECommerceContext();

	const clearFilters = () => {
		return dispatch({ type: CLEAR__FILTERS });
	};

	return (
		<div className="flex-col-center filter-container mb-32 mr-8 ml-8 mt-8 padding-l8 padding-r8 padding-t16 padding-b16 border-5">
			<div className="flex-row-center">
				<fieldset className="flex-col padding-l16 padding-r16 padding-t16 padding-b16 border-none ml-16 mr-16">
					<legend className="color-success fw-600 text-center">Sort By</legend>
					<label className="mb-8">
						<input
							type="radio"
							name="sort"
							className="mr-5"
							onChange={() => dispatch({ type: PRICE__HIGH__TO__LOW })}
							checked={sortBy && sortBy === PRICE__HIGH__TO__LOW}
						></input>
						Price - High to Low
					</label>
					<label className="mb-8">
						<input
							type="radio"
							name="sort"
							className="mr-5"
							onChange={() => dispatch({ type: PRICE__LOW__TO__HIGH })}
							checked={sortBy && sortBy === PRICE__LOW__TO__HIGH}
						></input>
						Price - Low to High
					</label>
				</fieldset>

				<fieldset className="flex-col padding-l16 padding-r16 padding-t16 padding-b16 border-none ml-16 mr-16">
					<legend className="color-success fw-600 text-center"> Filters </legend>
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
			<div className="danger-text fw-600 c-pointer" onClick={clearFilters}>
				Clear Filters
			</div>
		</div>
	);
}
