// Write your code here
import {Component} from 'react'
import './index.css'

class WelcomeApp extends Component {
  state = {isSubscribe: true}

  changeBtn = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      this.setState({isSubscribe: false})
    } else {
      this.setState({isSubscribe: true})
    }
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="container">
        <div className="welcome-container">
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy Learning</p>
          {isSubscribe ? (
            <button className="button" type="button" onClick={this.changeBtn}>
              Subscribe
            </button>
          ) : (
            <button className="button" type="button" onClick={this.changeBtn}>
              Subscribed
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default WelcomeApp
