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
						src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs852987%2Fk%24691bebc336b1cd65269cbce701dc602d%2Fmain%2520banners%2520ipl%2520banner%2520desktop%2520category.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
						alt="carousel"
					/>
				</div>
				<div>
					<img
						src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs852993%2Fk%243a07031933636d8ee1bc89fea10e292c%2Fmain%2520banners%2520ipl%2520banner%2520desktop%2520category.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
						alt="carousel"
					/>
				</div>
			</Carousel>
		</>
	);
}
