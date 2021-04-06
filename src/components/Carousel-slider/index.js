import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselSlider() {
	return (
		<>
			<Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
				<div>
					<img
						src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs853980%2Fk%2474855d9d9d5920b0ca50640b2b758e7c%2Fmain%2520banners%2520galaxy%2520to%2520galaxy%2520main%2520banner%2520desktop.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
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
						src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs853979%2Fk%2442d76ebcd75e6b3a8a69081e62d80493%2Fsummer%2520desktop.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
						alt="carousel"
					/>
				</div>
			</Carousel>
		</>
	);
}
