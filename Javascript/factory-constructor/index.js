//Factory
function createAddress(street,city,zipcode){
   return{
      street,
      city,
      zipcode
   };
}

//Constructor
function Address(street,city,zipCode){
   this.street = street;
   this.city = city;
   this.zipCode = zipCode;
}

//let address = new Address();