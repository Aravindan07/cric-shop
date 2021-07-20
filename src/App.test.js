// import { initialState } from "./context/eCommerceContext";
// import { describe, it } from "@jest/globals";
import { mainReducer } from "./reducers/mainReducer";

// function sum(a, b) {
// 	return a + b;
// }

// test("add 1+2 equals 3", () => {
// 	expect(sum(1, 2)).toBe(3);
// });

describe("testing cart", () => {
	it("should add item to cart", () => {
		const initialState = {
			user: {},
			products: [],
			wishList: [],
			cartList: [],
			categories: [],
			includeOutOfStock: true,
			showFastDeliveryOnly: false,
			sortBy: "",
			searchText: "",
			isLoading: false,
			message: null,
			isAuthenticated: false,
		};
		const addToCart = {
			type: "ADD__OR__REMOVE__ITEM__FROM__CART",
			payload: {
				item: {
					products: {
						product: {
							brand: "Kookaburra",
							category: "607e9011c111ca0b464e575c",
							createdAt: "2021-04-20T08:25:21.520Z",
							delivery: "Fast",
							description:
								"Breathable, Durable Upper Low weight, maximum agility. The lightweight low-profile upper of Kookaburra KC 2.0 Cricket Spikes offer lightweight agility that keeps you fast and responsive on your feet will offering excellent support.",
							imageUrl:
								"https://m.media-amazon.com/images/I/51uZHiqOYGL._AC_UL480_FMwebp_QL65_.jpg",
							inStock: true,
							modelNo: "CS-01",
							name: "Kookaburra KC 2.0 Rubber Cricket Shoes ",
							offer: "10%",
							price: 4900,
							ratings: "4.7",
							updatedAt: "2021-05-08T19:50:45.956Z",
							__v: 0,
							_id: "607e8ff1c111ca0b464e575b",
						},
						quantity: 1,
						_id: "60cdb76372a3490004bcef9c",
					},
				},
			},
		};
		let state = mainReducer(initialState, addToCart);

		expect(state).toEqual({
			cartList: [
				{
					products: {
						product: {
							brand: "Kookaburra",
							category: "607e9011c111ca0b464e575c",
							createdAt: "2021-04-20T08:25:21.520Z",
							delivery: "Fast",
							description:
								"Breathable, Durable Upper Low weight, maximum agility. The lightweight low-profile upper of Kookaburra KC 2.0 Cricket Spikes offer lightweight agility that keeps you fast and responsive on your feet will offering excellent support.",
							imageUrl:
								"https://m.media-amazon.com/images/I/51uZHiqOYGL._AC_UL480_FMwebp_QL65_.jpg",
							inStock: true,
							modelNo: "CS-01",
							name: "Kookaburra KC 2.0 Rubber Cricket Shoes ",
							offer: "10%",
							price: 4900,
							ratings: "4.7",
							updatedAt: "2021-05-08T19:50:45.956Z",
							__v: 0,
							_id: "607e8ff1c111ca0b464e575b",
						},
						quantity: 1,
						_id: "60cdb76372a3490004bcef9c",
					},
				},
			],
		});
	});
});
