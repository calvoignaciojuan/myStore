const { faker } = require("@faker-js/faker");

class usersService{

  constructor(){
    this.users = [];
  }

  create(user){

    const {name, lastName, age} = user;
    const newUser = {
      id: faker.datatype.uuid(),
      name,
      lastName,
      age
    };
    this.users.push(newUser);

    return newUser;
  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.users.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }

}

module.exports = usersService;