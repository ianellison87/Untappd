import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
      if (this.props.formType === 'Create Account') {
    
    return (
      <div className="create-account">
          <form onSubmit={this.handleSubmit} className="login-form-box">
        <div>
            <img className="logo" src="https://untappd.akamaized.net/assets/v3/images/untappd-login-logo@2x.png"/>
        </div>
          {/* <div>
            <a href=""></a>
            <h4>DRINK RESPONSIBLY</h4>
          </div> */}
          <br/>
          <br/>
          <br/>
            <div className="welcome-text">
              Welcome to Your Ale Paradise!
              <br />
              Please {this.props.formType} or {this.props.navLink}
            </div>
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <div className="inputs">
                <label>
                <img className="input-icon" src="https://untappd.akamaized.net/assets/v3/images/login_user_ico.png"/>
                    <input type="text" 
                      value={this.state.username}
                      onChange={this.update('username')}
                      className="login-input"
                      placeholder="|  Username"
                   />
                </label>
              </div>
              <br />
              <div className="inputs">
                <label>
                  <img className="input-icon" src="https://untappd.akamaized.net/assets/v3/images/login_email_ico.png" />
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="login-input"
                      placeholder="|  Email"
                    />
                  </label>
              </div>
              <br />
              <div className="inputs">
                <label>
                  <img className="input-icon" src="https://untappd.akamaized.net/assets/v3/images/login_lock_ico.png" />
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="login-input"
                      placeholder="|  Password"
                    />
                </label>
              </div>
              <br/>
                <div className ="disclaimer">
              <p>You must be of legal drinking age in your country to join Unbarreld.</p>
                </div>
              <br />
                <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        
      </div> 
      );
    } else {
        return (
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              Welcome to Your Ale Paradise!
          <br />
              Please {this.props.formType} or {this.props.navLink}
              {this.renderErrors()}
              <div className="login-form">
                <br />
                <label>Username:
              <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br />
                <label>Password:
              <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        );
      
    }
   };
  }


export default withRouter(SessionForm);
