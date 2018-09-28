import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
      super();
      this.state = {
        name: 'Nathan',
        picture: 'Picture URL',
        friends: [{name: 'T$', picture: 'http://http.cat/404'}]
      };
      this.updateName = this.updateName.bind(this);
      this.updatePicture = this.updatePicture.bind(this);
      this.addFriend = this.addFriend.bind(this);
    }
  
   updateName(event){
     //console.log(event.target.value);
     this.setState({
       name: event.target.value
     }) 
   }
   
   updatePicture(event){
     this.setState({
       picture: event.target.value
     })
   }

   addFriend(){
     const newFriend = {name: this.state.name, picture: this.state.picture};
     // DO NOT MUTATE STATE DIRECTLY!!
     // this.state.friends.push();
     const friendsCopy = this.state.friends.slice();
     friendsCopy.push(newFriend);
     this.setState({friends: friendsCopy});
     this.clearName();
   }

   clearName(){
     this.setState({name: ' '});
   }
  
    render() {
    //const name = this.state.name;
    //const picture = this.state.picture;

    const {name, picture, friends} = this.state;

    return (
      <div>
        <div>Name: <input value={name} onChange={this.updateName}/>
          {name}
        </div>
        <div>Picture URL: <input value={picture} onChange={this.updatePicture}/>
          {picture}
        </div>
        <button onClick={this.addFriend}>Add friend</button>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name}{' '}
            Picture: <img src={friend.picture} />
          </div>
        })}</div>
      </div>
    );
  }
}

export default App;
