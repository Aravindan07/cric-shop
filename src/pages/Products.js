import CarouselSlider from "../components/Carousel-slider";
import Card from "../components/Card";
import { useWishList } from "../context/wishlistContext";

function Products() {
	const { state } = useWishList();
	return (
		<>
			<CarouselSlider />
			<div className="padding-r8 padding-l8">
				<h2>Products</h2>
				{state.products && state.products.map((item) => <Card key={item.id} item={item} />)}
			</div>
		</>
	);
}

export default Products;
