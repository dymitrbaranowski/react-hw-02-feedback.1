import React, { Component } from 'react';
import Container from './Container';

class App extends Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    // console.log(event.currentTarget.value);

    this.setState({ name: event.currentTarget.value });
  };
  render() {
    return (
      <Container>
        <form>
          <label htmlFore="">
            Имя{' '}
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
        </form>
      </Container>
    );
  }
}

export default App;
