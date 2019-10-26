
/*function BaseObject (name, secondname ) {
    this.name = name
    this.secondname = secondname
    this.megoconst = 22;
} 

BaseObject.prototype.getFullName = function() {
    return this.name + this.secondname;
}
BaseObject.prototype.getMegoConst = function() {
    return this.megoconst;
}

function Childuser (name, secondn) {
    BaseObject.apply(this, arguments);
}

Childuser.prototype = Object.create(BaseObject.prototype);
Childuser.prototype.constructor = Childuser; 

function Admin (name) {
    this.name = name;
    this.salary = 3000;
}

function Arhitector(name) {
    BaseObject.apply(this, arguments);
}

var serg = new Childuser("Serg");
var vanya = new Arhitector("Vanya");
console.log(serg.getMegoConst());*/

/*function showThis(){
    console.log(this);
}

showThis();
var user = {
    name :'Max',
    getName: function() {
        return this.name;
    }
}

var user2 = {
    name:'Dima'
}

console.log(user.getName());
console.log(user.getName.call(user2));*/

/*function createGetFn(url) {
    return function () {
        return ['data', 'from', 'server'];
    }
}

var getMovies = createGetFn('/moviess' );
console.log(getMovies());*/

function bind(fn, context) {
    //Реализовать
  //  var newfn = fn.apply(context, arguments);
    //return newfn;
    return function (message) {
        //this = context;
        return fn.call(context, message);
    } 
  }
  
  
  function getName(message) {
    return message + this.name;
  }
  
  var user = {
    name: 'Dima',
  }
  
  var fn = bind(getName, user);
   console.log(fn('Hello '));
  
  // Hello Dima

   /* var header = document.querySelector('.header');

    var headers = document.querySelectorAll('.header');
    console.log(header);
    console.log(headers);

    var menu = document.querySelector('.menu');
    console.log(menu.closest('.phone'))*/

    /*var link  = document.querySelector('a');
    console.log(link.getAttribute('href'));
    link.setAttribute('href', 'newUrl');
    console.log(link.getAttribute('href')) 
    setTimeout(() => {
        link.classList.remove('hidden');
        console.log(link.classList.contains('hidden'));
        link.classList.toggle('hidden');
        console.log(link.classList.contains('hidden'));
    }, 5000);*/

    /*var names = ['Ira', 'Masha', 'Nastya'];
    let ul = document.querySelector('ul')
    for (i = 0; i< names.length; i++) {
        let ulItem = document.createElement('li');
        ulItem.textContent = names[i];
        ul.appendChild(ulItem);
    }
    names.forEach(element => {
        let ulItem = document.createElement('li');
        ulItem.textContent = element;
        ulItem.setAttribute('class', 'li');
        ul.appendChild(ulItem);
    });*/

