import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

faker.seed(123);

export default function setupMockServer() {
	createServer({
		serializers: {
			application: RestSerializer,
		},

		models: {
			product: Model,
			wishlist: Model,
			cartlist: Model,
		},

		routes() {
			this.namespace = "api";
			this.timing = 1000;
			this.resource("products");
			this.resource("wishlists");
			this.resource("cartlists");
		},

		seeds(server) {
			[...Array(33)].forEach((_) => {
				server.create("product", {
					id: faker.datatype.uuid(),
					name: faker.commerce.productName(),
					image: faker.random.image(),
					price: faker.commerce.price(),
					fastDelivery: faker.datatype.boolean(),
					inStock: faker.datatype.boolean(),
					offer: faker.random.arrayElement(["Save 50%", "70% off", "40% off", "20% off"]),
					wishListed: false,
					cartListed: false,
					rating: faker.random.arrayElement([
						"4.7",
						"4",
						"4.1",
						"3.7",
						"4.5",
						"4.8",
						"4.3",
					]),
					quantity: 1,
				});
			});
			[...Array(0)].forEach((_) => {
				server.create("wishlist", {
					id: faker.datatype.uuid(),
					name: faker.commerce.productName(),
					image: faker.random.image(),
					price: faker.commerce.price(),
					fastDelivery: faker.datatype.boolean(),
					inStock: faker.datatype.boolean(),
					offer: faker.random.arrayElement(["Save 50%", "70% off", "40% off", "20% off"]),
					rating: faker.random.arrayElement([
						"4.7",
						"4",
						"4.1",
						"3.7",
						"4.5",
						"4.8",
						"4.3",
					]),
					quantity: 1,
				});
			});
			[...Array(0)].forEach((_) => {
				server.create("cartlist", {
					id: faker.datatype.uuid(),
					name: faker.commerce.productName(),
					image: faker.random.image(),
					price: faker.commerce.price(),
					fastDelivery: faker.datatype.boolean(),
					inStock: faker.datatype.boolean(),
					offer: faker.random.arrayElement(["Save 50%", "70% off", "40% off", "20% off"]),
					rating: faker.random.arrayElement([
						"4.7",
						"4",
						"4.1",
						"3.7",
						"4.5",
						"4.8",
						"4.3",
					]),
					quantity: 1,
				});
			});
		},
	});
}
