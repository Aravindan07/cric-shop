import CarouselSlider from "./components/Carousel-slider";
import Card from "./components/Card";

function Products() {
	return (
		<>
			<CarouselSlider />
			<div className="padding-r8 padding-l8">
				<h2>Products</h2>
				<Card />
			</div>
		</>
	);
}

export default Products;
