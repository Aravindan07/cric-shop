import { useECommerceContext } from "../context";

export function useHelperMethods(itemId) {
	const {
		state: { wishList },
	} = useECommerceContext();

	const checkWishlist = () =>
		wishList?.products &&
		wishList.products?.length > 0 &&
		wishList.products.find((el) => el._id === itemId);

	const wishlistItems =
		wishList?.products &&
		wishList.products?.length &&
		wishList.products.filter((el) => el._id === itemId);

	const fillColorAssigner = () => {
		let color = "#9b9999";
		wishlistItems &&
			wishlistItems.forEach((el) => {
				if (el._id === itemId) {
					color = "var(--complementary-color)";
				} else {
					color = "#9b9999";
				}
			});
		return color;
	};

	return { fillColorAssigner, checkWishlist };
}
