import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselSlider() {
	return (
		<>
			<Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
				<div>
					<img
						src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850928%2Fk%242b8454ff6592eddea943d6d764b9349e%2Fmain%2520banner%2520tennis.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
						alt="Carousel"
					/>
				</div>
				<div>
					<img
						src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850794%2Fk%24d194a2237d1e38c582cb362fc031cb49%2Fclearance%2520desktop.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
						alt="carousel"
					/>
				</div>
				<div>
					<img
						src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850928%2Fk%242b8454ff6592eddea943d6d764b9349e%2Fmain%2520banner%2520tennis.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
						alt="carousel"
					/>
				</div>
			</Carousel>
		</>
	);
}
