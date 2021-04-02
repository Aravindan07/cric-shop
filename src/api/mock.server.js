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
			wishList: Model,
			cartList: Model,
		},

		routes() {
			this.namespace = "api";
			this.timing = 2000;
			this.resource("products");
			this.resource("wishLists");
			this.resource("cartLists");
		},

		seeds(server) {
			[...Array(50)].forEach((_) => {
				server.create("product", {
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
					wishListed: false,
				});
			});
		},
	});
}
