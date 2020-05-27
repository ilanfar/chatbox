import React, { Component } from 'react'


class Formulaire extends Component {

state = {
  message:'',
  length: this.props.length 
}

//on creer le message sous forme d'objet
createMessage = () => {
  const { addMessage, pseudo , length } = this.props
  const message = {
  pseudo,
  message: this.state.message
   }
  addMessage(message) //on passe le message dans la func dans App
  this.setState({ message:'' , length})  //apres soumettre le message on vide le textarea
}

handleSubmit = event => {
  event.preventDefault()
  this.createMessage()
}

handleChange = event => {

  const message = event.target.value //on stock le message dans la const
  const length = this.props.length - message.length
  this.setState({ message , length }) //on met a jour le state
}

handleKeyUp = event => {
  if (event.key === 'Enter'){
    this.createMessage()
  }
}
  render () {
     return (
       <form
       className='form'
       onSubmit={this.handleSubmit}>
       <textarea
       value={this.state.message}
       onChange={this.handleChange}
       onKeyUp={this.handleKeyUp}
       required
       maxLength={this.props.length} />

       <div className='info' >
       {this.state.length}

       </div>

       <button type='submit'>
       Envoyer!
       </button>
       </form>
     )
  }
}

export default Formulaire
