"use strict";
/*
let x:number = 10

x = 550;

console.log(x);

// inferencia x annotation duas maneiras de definições de valor.

//compilar
//tsc
//compilação automatica
//tsc -w

let y = 10         //por inferencia
let z:number = 20  //por annotation

//tipos básicos
let primeiroNome: string = "Danilo"
let idade: number = 45
let eAdmin: boolean = true

console.log(typeof primeiroNome)

primeiroNome = "Jose"

console.log(primeiroNome)

//object

var   myNumbers1: number[] = [1, 2, 3];
let   myNumbers2: number[] = [1, 2, 3, 4];
const myNumbers3: number[] = [1, 2, 3, 4, 5, 6];

var   myNumbers4: number = 1
let   myNumbers5: number = 2
const myNumbers6: number = 3

myNumbers4 = 4     //
myNumbers5 = 5     //
//myNumbers6 = 6   const não pode ser redeclarada

console.log(myNumbers1);
console.log(myNumbers2);
console.log(myNumbers3);
console.log(myNumbers4);
console.log(myNumbers5);
console.log(myNumbers6);

console.log(myNumbers3.length);
console.log(primeiroNome.toUpperCase());
console.log(myNumbers1.push(10));

console.log(myNumbers1);

//tuplas

let myTuple: [number, string, string[]]

myTuple = [20, "Calixto", ["a", "b"]]

//myTuple = [true, false, true] valores invalidos

console.log(myTuple);

//object literals ->  {prop: value}

const user: {name: string; age: number}={
  name:"Pedro",
  age:18,
};

console.log(user);
console.log(user.name);

//any não recomendado usado em raros casos.
let a:any = 0;
a = "teste";
a = true;
a = []

//union type - permite mais de um tipo separado por pipe
let id: string | number = "10"

id = 200
id = "300"

//type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "20";

console.log(typeof(userId));
console.log(typeof(productId));

//enum
enum Size{
  P="Pequeno",
  M="Medio",
  G="Grande",
}

const camisa = {
  nome: "camisa gola V",
  size: Size.G,
}

console.log(camisa);


//literal types
let teste: "unicovalor"

//teste = "outrovalor";
teste = "unicovalor";
//mais de um valor

let teste2: "doisvalores" | null;

teste2 = "doisvalores"
teste2 = null

//funcoes
function sum(a: number, b:number){
  return a + b;
}

console.log(sum(10,20));

//função com retorno
function sayHelloTo(name:string):string{
  return `Olá Mundo ${name}`;
}

console.log(sayHelloTo("bão de programação com TS"));

//função sem retorno usa-se void
function logger(msg:string): void{
  console.log(msg);
}
logger("testando!!!")

//função com parametros não obrigatorios de declaração de valor

function greeting(nome:string, greet?:string) {
  console.log(`Olá ${greet} ${nome}`)
}

greeting("Danilo")
//forma tratada
function greetingTratada(nome:string, greet?:string):void {
  if(greet){
    console.log(`Olá ${greet} ${nome}`);
    //return;
  }
  console.log(`Olá ${nome}`);
}
greetingTratada("Jose", "Senhor")

//tipagem por interfaces

interface MathFuncionParams{
  n1: number;
  n2: number;

}

function sumNumbers(nums: MathFuncionParams){
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 1, n2:2}));

function multiplyNumbers(nums: MathFuncionParams){
  return nums.n1 * nums.n2;
}

const someNumbers:MathFuncionParams = {
  n1: 5,
  n2: 10,
}

console.log(multiplyNumbers(someNumbers));

//narrowing - checagem de tipos

//generic

function showArraysitems<T>(arr: T[]){
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysitems(a1);
showArraysitems(a2);

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//classes
class User {
    name;
    role;
    isAproved;
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A permissão é: ${this.role}`);
            return;
        }
        console.log("Informação Restrita.");
    }
}
const zeca = new User("Zeca", "Suporte", false);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
//heranca
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2);
console.log(a4);
a4.showBrand;
//decorators
//constructor decorator
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = (Math.random() * 100);
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
const dam = new Person("Dam");
console.log(dam);
