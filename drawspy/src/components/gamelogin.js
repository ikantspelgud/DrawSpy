import {Button,Well,Col} from 'react-bootstrap';
import React, {Component} from 'react';

export default (props) => {
  return (
		<GameLogin/>
    );
}

class GameLogin extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
    	<div>
        <Col xs={3}/>          
        <Col xs={6}>
          <Well>
            <CreateGame/>
            <JoinGame/>
          </Well>
        </Col>
        <Col xs={3}/>    		  
    	</div>
    )
  }
}


class CreateGame extends Component {

  constructor(props) {
    super(props);
  }

  onCreate(){
    console.log("Go To Create")
  }

  render(){
    return (
      <Button bsStyle="primary" bsSize="large" block 
        onClick={this.onCreate}>
          Create Game
      </Button>
    )
  }


}

class JoinGame extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Button bsStyle="secondary" bsSize="large" block>Join Game</Button>
    )
  }
}