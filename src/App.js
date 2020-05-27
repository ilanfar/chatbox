import React, { Component , createRef } from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/animations.css';


import Formulaire from './components/Formulaire'
import Message from './components/Message'

//firebase
import base from './base'

//Animations
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component  {

  state = {
    messages: {}, //qui stock tous nos messages et va etre un objet
    pseudo: this.props.match.params.pseudo //chercher dans react router qui donne les info
  }

messagesRef = createRef()  //1ere etape 'scroll' pour creer ref

componentDidMount () { //3eme etape 'scroll',ensuite creer une propriete
   //suncState -> sync le state dans DB
  // le '/' c'est pour stoker les messages a la racine dans fb
  base.syncState('/' , {
    context: this, //this -> notre class
    state: 'messages' // pour sync nos messages
  })
}

//a chaques mise a jour du state, ca appel cette funct
  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

//ajouter un message au state
  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message  //on creer un timestamp pour etre sur que ce soit unique

     Object   //pour garder 10 messages
    .keys(messages)
    .slice(0,-10)
    .forEach(key => {
      messages[key] = null
    })
    this.setState({ messages })
  }

 //function qui retorune vrai ou faux
  isUser = pseudo => pseudo === this.state.pseudo

  render () {

  const messages = Object
  .keys(this.state.messages)
  // map(key) -> pour chaques clés
  .map(key =>(

    <CSSTransition
      timeout={2000}
      classNames='fade'
      key={key}>
    <Message
    isUser={this.isUser}
    message={this.state.messages[key].message}
    pseudo={this.state.messages[key].pseudo} />
  </CSSTransition>
))


//2  ref - > defini la ref sur 1 element
  return (
    <div className='box' >
      <div>


    <div className='messages' ref={this.messagesRef}>
        <TransitionGroup className='message'>
        { messages }
      </TransitionGroup>
    </div>
      </div>
    <Formulaire
      length={140}
      pseudo={this.state.pseudo}
      addMessage={this.addMessage}/>
    </div>


  );
}
}

export default App;
