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
    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async demoLogin(e) {
    e.preventDefault();

    const demoUser = {
      username: 'demouser',
      password: 'password'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById("username").focus();
    for (let i = 1; i <= demoUser.username.length; i++) {
      this.setState({ username: demoUser.username.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('password-input').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('submit-login').click();
    document.getElementById('password-input').blur();
  }

  componentWillUnmount(){
    this.props.clearErrors();
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
      <div className="create-account-container" >
          <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="unbarreld"><h1>UNBARRELD</h1></div>
          <div className="sub-text"><p>D R I N K</p></div>
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
            <br/>
          <div className="errors">{this.renderErrors()}</div>
            <br/>
            <div className="login-form">
              <br />
              <div className="inputs">
                <label>
                  <img className="input-icon" src={window.user_icon}/>
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
                <img className="input-icon" src={window.email_icon} />
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
                  <img className="input-icon" src={window.lock_icon} />
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
              <div className="unbarreld"><h1>UNBARRELD</h1></div>
              <div className="sub-text"><p>D R I N K</p></div>
              {/* <div>
                <img className="logo" src="https://untappd.akamaized.net/assets/v3/images/untappd-login-logo@2x.png" />
              </div> */}
            <br/>
            <br />
              <div className="welcome-text">
                Please {this.props.formType} or {this.props.navLink}
              </div>
            <br />
            <br/>
              <div className="errors">{this.renderErrors()}</div>
            <br />
            <br/>
            <br/>
              <div>
                <input className="demo-user-button" type="button" value="Demo User" onClick={this.demoLogin}/>
              </div>
            <br/>
              
              <div>
                <p className="or">OR</p>
              </div>
              <div className="login-form">
                
                <div className="inputs">
                  <label>
                    <img className="input-icon" src={window.user_icon} />
                      <input type="text"
                        id="username"
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
                    <img className="input-icon" src={window.lock_icon} />
                      <input type="password"
                        id="password-input"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="|  Password"
                      />
                  </label>
                </div>
                  <br />
                <input className="session-submit" type="submit" id="submit-login" value={this.props.formType} />

              </div>
            </form>
          </div>
        );
      
    }
   };
  }


export default withRouter(SessionForm);
