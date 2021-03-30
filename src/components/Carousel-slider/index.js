import "./styles.css";

export default function CarouselSlider() {
	return (
		<>
			<section className="carousel" aria-label="Gallery">
				<ol className="carousel__viewport">
					<li id="carousel__slide1" tabIndex="0" className="carousel__slide">
						<div className="carousel__snapper">
							<a href="#carousel__slide4" className="carousel__prev">
								Go to last slide
							</a>
							<img
								src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850928%2Fk%242b8454ff6592eddea943d6d764b9349e%2Fmain%2520banner%2520tennis.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
								alt="carousel"
								loading="lazy"
								width="100%"
								height="100%"
							/>
							<a href="#carousel__slide2" className="carousel__next">
								Go to next slide
							</a>
						</div>
					</li>
					<li id="carousel__slide2" tabIndex="0" className="carousel__slide">
						<div className="carousel__snapper"></div>
						<a href="#carousel__slide1" className="carousel__prev">
							Go to previous slide
						</a>
						<img
							src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850794%2Fk%24d194a2237d1e38c582cb362fc031cb49%2Fclearance%2520desktop.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
							alt="carousel"
							loading="lazy"
							width="100%"
							height="100%"
						/>
						<a href="#carousel__slide3" className="carousel__next">
							Go to next slide
						</a>
					</li>
					<li id="carousel__slide3" tabIndex="0" className="carousel__slide">
						<div className="carousel__snapper"></div>
						<a href="#carousel__slide2" className="carousel__prev">
							Go to previous slide
						</a>
						<img
							src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850928%2Fk%242b8454ff6592eddea943d6d764b9349e%2Fmain%2520banner%2520tennis.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
							alt="carousel"
							loading="lazy"
							width="100%"
							height="100%"
						/>
						<a href="#carousel__slide4" className="carousel__next">
							Go to next slide
						</a>
					</li>
					<li id="carousel__slide4" tabIndex="0" className="carousel__slide">
						<div className="carousel__snapper"></div>
						<a href="#carousel__slide3" className="carousel__prev">
							Go to previous slide
						</a>
						<img
							src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850794%2Fk%24d194a2237d1e38c582cb362fc031cb49%2Fclearance%2520desktop.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75"
							alt="carousel"
							loading="lazy"
							width="100%"
							height="100%"
						/>
						<a href="#carousel__slide1" className="carousel__next">
							Go to first slide
						</a>
					</li>
				</ol>
				<aside className="carousel__navigation">
					<ol className="carousel__navigation-list">
						<li className="carousel__navigation-item">
							<a href="#carousel__slide1" className="carousel__navigation-button">
								Go to slide 1
							</a>
						</li>
						<li className="carousel__navigation-item">
							<a href="#carousel__slide2" className="carousel__navigation-button">
								Go to slide 2
							</a>
						</li>
						<li className="carousel__navigation-item">
							<a href="#carousel__slide3" className="carousel__navigation-button">
								Go to slide 3
							</a>
						</li>
						<li className="carousel__navigation-item">
							<a href="#carousel__slide4" className="carousel__navigation-button">
								Go to slide 4
							</a>
						</li>
					</ol>
				</aside>
			</section>
		</>
	);
}
