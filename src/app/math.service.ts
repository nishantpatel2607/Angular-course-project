//A service  is a class. You need to register the class in module or component
// under providers array.
//The object of service is provided to the component through dependency injection. 
//Angular will take care of creating the object

export class MathService {   

  constructor() { }

  add(a:number, b:number){
    return (a+b);
  }

  subtract(a:number, b:number){
    return (a-b);
  }

  multiply(a:number, b:number){
    return (a*b);
  }

  divide(a:number, b:number){
    return (a/b);
  }
}
