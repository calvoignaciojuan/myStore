const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");

class productsService{

  constructor(){
    this.products = [];
    this.generate();
  }


  async generate(){
    const productLimit = 100;
    for (let index = 0; index < productLimit; index++) {

      this.products.push({
        id:   faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        photo: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean()
      });
    }
  }

  async create(body){
    const {name, price, photo} = body;

    const newProduct = {
        id:   faker.datatype.uuid(),
        name,
        price,
        photo
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    return this.products;
  }

  async findOne(id){

    const product = this.products.find( item => item.id === id);
    if(!product){
      throw boom.notFound("product not found");
    }
    if(product.isBlocked){
      throw boom.conflict("product is blocked");
    }
    return product;
  }

  async delete(id){
    const indexProduct = this.products.findIndex(item => item.id === id);
    if(indexProduct === -1){
      throw boom.notFound("product not found");
    }

    const productDeleted = this.products[indexProduct];
    this.products.splice(indexProduct,1);

    return productDeleted;
  }

  async update(id, changes){
    const indexProduct = this.products.findIndex(item => item.id === id);
    if(indexProduct === -1){
      throw boom.notFound("product not found");
    }
    const product = this.products[indexProduct];
    this.products[indexProduct] = {
      ...product,
      ...changes
    }
    return this.products[indexProduct];
  }

  async updateAll(id, changes){
    const indexProduct = this.products.findIndex(item => item.id === id);
    if(indexProduct === -1){
      throw boom.notFound("product not found");
    }

    this.products[indexProduct] = {
      id,
      ...changes
    }
    return this.products[indexProduct];
  }
}

module.exports = productsService;