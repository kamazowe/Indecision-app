import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';






ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));
           
                























                
                
      //       <IndecisionApp list={arr}   />
                
// CHANGE OLD SYNTAX TO NEW SYNTAX (MUST HAVE PLUGINS IN BABELRC)               
//
//class OldSyntax{
//                constructor(){
//    this.name = 'Mike';
//    this.getGreeting = this.getGreeting.bind(this);
//}
//getGreeting(){
//    return `Hi my name is ${this.name} .`;
//}
//
//}
//
//const oldSyntax = new OldSyntax();
//const getGreeting = oldSyntax.getGreeting;
//console.log(getGreeting());
//
//
//// --------
//
//class NewSyntax{
// name = 'Jane';   
//getGreeting = () => {
//   return `Hi my name is ${this.name} .`;
//}
//}
//
//const newSyntax = new NewSyntax();
//const newGetGreeting = newSyntax.getGreeting;
//console.log(newGetGreeting());