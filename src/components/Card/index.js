import React from "react";
import { ReactSVG } from "react-svg";
import WishListIcon from "../../icons/card-wish-icon.svg";
import "./styles.css";

function Card() {
	return (
		<>
			<div className="card mt-16 mb-16">
				<div className="image-container">
					<img
						src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg"
						alt="Card Header"
					/>
				</div>
				<div className="card__body">
					<div className="wishlist-icon-container">
						<ReactSVG src={WishListIcon} />
					</div>
					<div className="product__desc">
						<p className="ls-1 product__name mb-5">English Navy</p>
						<small className="">Men Slim Fit Formal Shirt</small>
					</div>
					<div className="price__tag c-pointer mt-8 fw-600">
						<span className="highlighted__price ls-1">Rs. 333</span>
						<span className="price mr-8 ml-16">MRP</span>
						<span className="price ls-1">&#8377;333</span>
					</div>
					<div className="rating">
						4.1/5
						<img src="https://polish-ui.netlify.app/icons/star.svg" alt="Ratings" />
					</div>
				</div>
			</div>

			<div className="card mt-16 mb-16">
				<div className="image-container">
					<img
						src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6555066/2018/8/13/f286ebae-25d1-4db9-94d1-44b7d63d87ab1534157560270-HRX-by-Hrithik-Roshan-Men-Charcoal-Solid-Polo-Collar-T-shirt-1.jpg"
						alt="Card Header"
					/>
				</div>
				<div className="card__body">
					<div className="wishlist-icon-container">
						<ReactSVG src={WishListIcon} />
					</div>
					<div className="product__desc">
						<p className="ls-1 product__name mb-5">English Navy</p>
						<small className="">Men Slim Fit Formal Shirt</small>
					</div>
					<div className="price__tag c-pointer mt-8 fw-600">
						<span className="highlighted__price">Rs. 444</span>
						<span className="price mr-8 ml-16">MRP</span>
						<span className="price">&#8377;444</span>
					</div>
					<div className="rating">
						4.1/5
						<img src="https://polish-ui.netlify.app/icons/star.svg" alt="Ratings" />
					</div>
				</div>
			</div>

			<div className="card mt-16 mb-16">
				<div className="image-container">
					<img
						src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2329007/2018/2/19/11519024074012-Roadster-Men-Maroon-Solid-Round-Neck-T-shirt-7571519024073748-1.jpg"
						alt="Card Header"
					/>
				</div>
				<div className="card__body">
					<div className="wishlist-icon-container">
						<ReactSVG src={WishListIcon} />
					</div>
					<div className="product__desc">
						<p className="ls-1 product__name mb-5">English Navy</p>
						<small className="">Men Slim Fit Formal Shirt</small>
					</div>
					<div className="price__tag c-pointer mt-8 fw-600">
						<span className="highlighted__price">Rs. 444</span>
						<span className="price mr-8 ml-16">MRP</span>
						<span className="price">&#8377;444</span>
					</div>
					<div className="rating">
						4.1/5
						<img src="https://polish-ui.netlify.app/icons/star.svg" alt="Ratings" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
