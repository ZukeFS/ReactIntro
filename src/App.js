import React from 'react';
// // import Header from './Header';
// // import MainContent from './MainContent';
// // import Footer from './Footer';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';

// // import Joke from './Joke'
// // import JokesData from './JokesData'
// import './styles.css'

// import Products from './Products'
// import ProductsData from './ProductsData'

import Conditional from './Conditional'

// function App(){
    //DISPLAY NAME:
    // const firstName = "Zuke"
    // const lastName = "FS"
    
    // return (
    // //    <div>
    // //        <Header />
    // //        <MainContent />
    // //        <Footer />
    // //    </div>

    // <h1>Hello {`${firstName} ${lastName}`}</h1>
    // )


    //DISPLAY GREETINGS ACCORDING TO THE TIME OF THE DAY:
    // const date = new Date();
    // const hours = date.getHours();
    // const styles = {
    //     fontSize: 30
    // }
    // let timeOfDay

    // if(hours < 12){
    //     styles.color = "blue"
    //     timeOfDay = "morning"
    // }
    // else if(hours >= 12 && hours < 17){
    //     styles.color = "yellow"
    //     timeOfDay = "afternoon"
    // }
    // else{
    //     styles.color = "red"
    //     timeOfDay = "night"
    // }
     
    // return (
    //     <h1 style={styles}>Good {timeOfDay}!</h1>
    // )


    //DISPLAY JOKE:
    // const jokeComponents = JokesData.map(joke => console.log(joke));
    
    // return (
    //     <div>
    //         {jokeComponents}
    //     </div>
    // )

    //DISPLAY PRODUCT DATA using Props and .map()
//     const productsComponents = ProductsData.map(item => <Products key={item.id} products={item}/>)

//     return (
//         <div>
//             {productsComponents}
//         </div>
//     )
// }

// class App extends React.Component{
//     constructor(){
//         super()
//         // this.state = {
//         //     answer : "Yes"
//         // }
        
//         // this.state = {
//         //     name : "Aakash",
//         //     age : 23
//         // }

//         this.state = {
//             isLoggedIn : true
//         }
//     }

//     render(){
//         let wordDisplay
        
//         if(this.state.isLoggedIn){
//             wordDisplay = "in"
//         }
//         else{
//             wordDisplay = "out"
//         }

//         return (
//             <div>
//                 {/* <h2>Is state important to know? {this.state.answer}</h2> */}
                
//                 {/* <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old</h3> */}

//             <h1>You are currently logged {wordDisplay}</h1>
//             </div>
//         )
//     }
// }

// function handleClick(){
//     alert('I am clicked')
// }

// function hoverImage(){
//     alert('Oh! you like the image? Lesgoo!!')
// }

// function App(){
//     return (
//         <div>
//             <img src="https://www.fillmurray.com/200/100" onMouseOver={hoverImage}/>
//             <br />
//             <br />
//             <button onClick={handleClick}>Click me :)</button>
//         </div>
//     )
// }

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             count : 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         // alert("Let's change :)")
//         this.setState(prevState => { //updates state, but we need to bind state, in order to update correctly
//             return {
//                 count : prevState.count + 1 //prevState is the older state version which has count:0 property
//             }
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <h1 style={{textAlign:"center", marginTop: "50px"}}>{this.state.count}</h1>
//                 <button style={{marginLeft: "343px"}} onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             // isLoading : true
//             unreadMessages : ["a", "b"]
//         }
//     }

//     // componentDidMount(){
//     //     setTimeout(() => {
//     //         this.setState({
//     //             isLoading : false
//     //         })
//     //     }, 1500)
//     // }

//     render(){
//         return (
//             // <div>
//             //     <Conditional isLoading={this.state.isLoading} />
//             // </div>

//             <div>
//                 {
//                     this.state.unreadMessages.length > 0 &&
//                     <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//                 }
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn : false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState(prevState => {
//             return {
//                 isLoggedIn : !prevState.isLoggedIn
//             }
//         })
//     }

//     render(){
//         const buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//         const displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        
//         return (
//             <div>
//                 <button onClick={this.handleClick}>{buttonText}</button>
//                 <h1>{displayText}</h1>
//             </div>
//         )
//     }
// }

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            loading : false,
            character : {}
        }
    }

    componentDidMount(){
        this.setState({
            loading : true
        })

        fetch("https://swapi.dev/api/people/1")
           .then(response => response.json())
           .then(data => {
               this.setState({
                   loading : false,
                   character : data
               })
           })
    }

    render(){
        const text = this.state.loading ? "Loading..." : this.state.character.name
        return (
            <div>
                {text}
            </div>
        )
    }
}

export default App;