import { useMainContext } from "../../context/main-context";
import {
	PRICE__HIGH__TO__LOW,
	PRICE__LOW__TO__HIGH,
	INCLUDE__FAST__DELIVERY,
	INCLUDE__OUT__OF__STOCK,
} from "../../constants";
import "./styles.css";

export default function FilterComponent() {
	const {
		state: { showFastDeliveryOnly, sortBy, includeOutOfStock },
		dispatch,
	} = useMainContext();

	return (
		<div className="mb-32 mr-8 ml-8 padding-l8 padding-r8 padding-t16 padding-b16 filter-container border-5 flex-row-center">
			<fieldset className="flex-col padding-l16 padding-r16 padding-t16 padding-b16 border-none ml-16 mr-16">
				<legend className="color-success fw-600 text-center">Sort By</legend>
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
	);
}
