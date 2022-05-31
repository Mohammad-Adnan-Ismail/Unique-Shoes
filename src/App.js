import logo from './logo.svg';
import './App.css';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <h1>UNIQUE <span className='title'>SHOES</span></h1>
      <Product></Product>
      <h2 className='text-center'>Question And Answer</h2>
      <p>How React Works?</p>
      <p className='container'>Ans:   <br />  
      React is a JavaScript library that uses declaration code to create user interactions in a predictable and efficient manner. You can use it to help you build single-page applications and mobile applications, or build more complex applications when using them with other libraries. React works with declaration code. To show you what we mean by declaration code, we want you to think about the following code that displays as an app. What you can see is a screen like the one below, with Navbar, Header, Filter and List. This is because each line of code identifies what part of the application.
      </p>
      <p>How usestate Wroks?</p>      
      <p className='container'>Ans:  <br /> UseState is a hook that permits you to vicinity nation variables in purposeful additives. React has two styles of additives, one is class additives which might be ES6 training that enlarge from React and the other is practical additives. The magnificence component is a component and may contain country and lifecycle strategies: the magnificence Message extends React. The useState hook is a special feature that takes the preliminary kingdom as an issue and returns an array of  entries. UseState is a hook that allows you to region state variables in useful additives. You skip a beginning position to this feature and it returns a variable with the current function value and another function to replace this price.</p>  
 
    </div>
  );
}

export default App;
