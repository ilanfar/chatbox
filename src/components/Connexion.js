import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

//redirect -> pour amener a la page suivante apres la connextion
// pour ca, on créer une variable (ici -> goToChat) pour savoir si ca ete cliquer


class Connexion extends Component {

state = {
  pseudo:'',
  goToChat: false
}

//event => pour recuperer la valeur du input
//handleChange -> pour mettre la valeur dans le state
handleChange = event => {
  const pseudo = event.target.value  //target -> input , value -> valeur dans le event
  this.setState( {pseudo})
}

handleSubmit = event => {
event.preventDefault() //je gere ca par moi meme
this.setState({ goToChat:true })

}



  render () {

if(this.state.goToChat){
  return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>  // push -> envoie sur une nouvelle page et quand on fait retour on retombe sur page d acceuil
}

    return (
      <div className = 'ConnexionBox'>



      <form className = 'connexion' onSubmit={this.handleSubmit}>
        <h1 className = 'welcome'>CHATBOX</h1>

<input
value={this.state.pseudo}
onChange={this.handleChange}
placeholder="Pseudo"
type='text'
required />

<button type= 'submit'> GO </button>

      </form>
      </div>
    )
  }
}

export default Connexion
