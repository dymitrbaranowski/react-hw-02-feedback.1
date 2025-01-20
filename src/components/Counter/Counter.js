import { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
  };

  handlerClickIncrement = e => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  handlerClickDecrement = e => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div>
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="card bg-dark text-white" style={{ width: '600px' }}>
            <div className="card-body">
              <h5 className="card-title text-center fs-1">Counter </h5>
              <p className="card-text text-center"></p>
              {this.state.value}
              <div className="d-flex justify-content-center px-5">
                <button
                  className="btn btn-outline-success me-5"
                  onClick={this.handlerClickIncrement}
                >
                  <i className="bi bi-plus-circle fs-1">+</i>
                </button>
                <button
                  className="btn btn-outline-success me-5"
                  onClick={this.handlerClickDecrement}
                >
                  <i className="bi bi-dush-circle fs-1">-</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
