import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carouselImages } from "../../constants";

export default function CarouselSlider() {
	return (
		<>
			<Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
				{carouselImages.map((image) => (
					<div key={image}>
						<img src={image} alt="Carousel" />
					</div>
				))}
			</Carousel>
		</>
	);
}
