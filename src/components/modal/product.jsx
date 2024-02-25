class Product {
	id;
	name;
	price;


	constructor(id, name, price) {
		this.id = id
		this.name = name
		this.price = price



}


	
	
	
	
}




const PRODUCTS_DB = [
	new Product(1, 'Product 1', 100),
	new Product(2, 'Product 2', 100),
	new Product(3, 'Product 3', 100),
	new Product(4, 'Product 4', 200),
	new Product(5, 'Product 5', 100)
];

export { PRODUCTS_DB, Product }

