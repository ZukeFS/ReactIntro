import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//JSX - SYNTAX
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));

//Example-1: Fill in the boilerplate React code required to render an 
//unordered list (<ul>) to the page. The list should contain 3 list items
//(<li>) with anything in them you want.
// ReactDOM.render(
//     <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Register</li>
//     </ul>, document.getElementById('root'));



//We can even use functional components to wrap the JSX in a easier way.
// function MyApp(){
//     return (
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Register</li>
//         </ul>
//     )
// }
// ReactDOM.render(<MyApp />, document.getElementById('root'));

//Example-2: 
//i.  Set up the basic React code from scratch
//ii. Create a functional component called MyInfo that returns the following UI:
    // - An h1 with your name
    // - A paragraph with a little blurb about yourself
    // - An ordered or unordered list of the top 3 vacation spots you'd like to visit
//iii. Render an instance of that functional component to the browser.
//iv. Extra challenge: learn on your own (:Google) how you can add some style to your page.
// function MyInfo(){
//     return (
//         <div>
//             <h1>Name: Zuke</h1>
//             <p>I am Zuke from Guwahati, Assam. I am a proud Indian.</p>
//             <ul>Top 3 vacation spots:
//                 <li>Laddakh</li>
//                 <li>Canada</li>
//                 <li>Australia</li>
//             </ul>
//         </div>
//     )
// }
// ReactDOM.render(<MyInfo />, document.getElementById('root'));


//Moving components into Separate files
// import MyInfo from './components/MyInfo.js'
// ReactDOM.render(<MyInfo />, document.getElementById('root'));


//Parent Child Components
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));


//Convert Javascript to JSX and vice-versa
//use curly braces, for example if we want to return certain variables 
//inside return call.
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));

//Example-3: Create a simple app where it tells you time of the day and 
//if it is day or night, automatically.
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));


//inline styles with the style property
//We must remember here, that we are not styling html elements, but are 
//styling JSX elements, therefore we need to write the properties in an object,
//therein we also have to write the whole style property into another curly brace,
//as we are converting Javascript into JSX. So, we need two curly braces in order 
//to style inline elements.


//PROPS in Reactjs:
//Props are arguments passed into React components. Props are passed to components via 
//HTML attributes.
// import Props from './Props'

// ReactDOM.render(<Props />, document.getElementById('root'));

//Example-4: Create a React app from scratch
//Render an App component
//App should be in its own file
//App should render 5 Joke components
//Each Joke should receive a "question" prop and a "punchLine" prop
//and render those however you'd like

//Extra-Credit:
//Some jokes are only a puch line with no question.
//Eg: "It's hard to explain puns to kleptomantacs because they always take things literally"
//If you don't pass in a "question" prop, how might you make it only show the punchline instead?
//Spend time practicing the style of your Joke component.
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));


//Mapping Components
//The goal is to take an array of strings and turn it into an array of JSX <li> elements that 
//contain the text of the string. When React sees an array of JSX elements, it knows to loop through
//that array and create new HTML elements for each JSX element in the array.

//Example-5: Given a list of products (as an array of objects, as seen in productsData.js) render a 
//<Product /> component (which you'll also need to create) for each product in the list.
//Make sure to use the array's '.map()' method to create these components and don't forget to pass a 
//'key' prop to it to avoid the warning.
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));


//CLASS BASED COMPONENTS:
//A class based component is a more complex structure. It is an instance of a class derived from React.Component 
//class. The class must implement a render() member function which returns a React component to be rendered, similar
//to a return value of a functional Component.

//Example-6: Convert all 3 components to be class based
//Fix the small bug

//#1
// class App extends React.Component{
//     render(){
//         return (
//             <div>
//                 <Header username="Zuke"/>
//                 <Greeting />
//             </div>
//         )
//     }
// }

// //#2
// class Header extends React.Component{
//     render(){
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )
//     }
// }

// //#3
// class Greeting extends Component{
//     render() {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeofDay 

//         if(hours < 12){
//             timeofDay = "morning"
//         }
//         else if(hours >=12 && hours <17){
//             timeofDay = "afternoon"
//         }
//         else{
//             timeofDay = "night"
//         }
    
//         return (
//             <h2>Good {timeofDay} to you, sir or madam!</h2>
//         )
//     }  
// }

// ReactDOM.render(<App />, document.getElementById('root'))


//STATES:
//React components has a built-in state object. The state object is where we store
//property values that belongs to the component. When the state object changes, the
//component re-renders. 
//While writing states, we should create a constructor, where we initialize values.
//Inside constructor, we should always call global constructor super(). What super() 
//does is, it calls the parent class i.e. React.Component and grabs some goodies out 
//of it and can use it in the App Component.
// import App from './App'
// ReactDOM.render(<App />, document.getElementById('root'))

//Example-7: Given an incomplete class-based component without a constructor,
//add a constructor and initialize state to fix the broken component.
// import App from './App'
// ReactDOM.render(<App />, document.getElementById('root'))

//Example-8: Given a stateless functional component, add state to it
//state should have a property called 'isLoggedIn' which is a boolean
//{true if logged in, false if not}
//then, give your best shot at rendering the word 'in' if user is logged in
//or 'out' if the user is logged out.
// import App from './App'
// ReactDOM.render(<App />, document.getElementById('root'))


//Handling Events in React:
//Handling events with React elements is very similar to handling events on DOM elements.
//There are some syntax differences: React events are named using camelCase, rather than
//lowercase. With JSX, you can pass a function as the event handler, rather than a string.


//Lifecycle methods:
//Each component in React has a lifecycle which we can monitor and manipulate during its
//three main phases.
//The three phases are: a. Mounting - means putting elements into the DOM
                      //b. Updating - means whenever a component is updated
                      //c. Unmounting - means whenever a component is removed from the DOM

//Some of which are as follows:
//static getDerivedStateFromProps(props, state){
    //return the new, update state based upon the props
//}

//getSnapshotBeforeUpdate(){
    //create a backup of the current way things are
//}

//componentDidMount(){
    //GET the data I need to correctly display
//}

//componentWillReceiveProps(nextProps){
    //if(nextProps.whatever !== this.props.whatever){
            //do something important
    //}
//}

//shouldComponentUpdate(nextProps, nextState){
    //return true if want it to update
    //return false if not
//}

//componentWillUnmount(){
    //teardown or cleanup your code before component disappears
    //{E.g. remove event listeners}
//}


//Conditional Rendering:
//In React, we can create distinct components that encapsulate 
//behavior we need. Then, we can render only some of them, depending
//on the state of our application. Conditional Rendering in React
//works the same way conditions work in Javascript.

//Example-9: Given a stateless functional component:
//1- Follow the steps necessary to add state to it.
//2- Have state keep track os whether the user is logged in or not
//3- Add a button that logs the user in/out
    //a. extra challenge - make the button display <log in> if they 
    //are not logged in and <log out> if they are
//4- Display text that says "Logged in" if the user is logged in or 
//"logged out" if they are not.


//FETCHING DATA FROM AN API:
import App from './App'
ReactDOM.render(<App />, document.getElementById('root'))