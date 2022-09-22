// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: 'Subscribe'}

  onClickWelcome = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === 'Subscribe') {
      this.setState(() => ({isSubscribe: 'Subscribed'}))
    } else {
      this.setState(() => ({isSubscribe: 'Subscribe'}))
    }
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickWelcome}
          >
            {isSubscribe}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
