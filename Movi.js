function bind(fn, context) {
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
  
