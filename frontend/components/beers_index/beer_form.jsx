import React from 'react';

import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BeerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      abv: '',
      ibu: '',
      brewed_by: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createBeer(this.state)
      .then(data => this.props.history.push(`beers/${data.beer.id}`));
  }

  update(property){
    return e => this.setState({ [property]: e.target.value});
  }

  // errors(){
  //   if (this.props.errors) {
  //     return (
  //       this.props.errors.map(error => {
  //         return (<li className="error" key={error}>{error}</li>);
  //       })
  //     );
  //   }
  // }

  render() {
    return (
    <div>
      <ul>
        {/* {this.errors()} */}
      </ul>
      <form className="beer-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          placeholder="Name"
          onChange={this.update('name')}
        />
        <input
          type="float"
          value={this.state.ibu}
          placeholder="IBU"
          onChange={this.update('ibu')}
        />
        <input
          type="float"
          value={this.state.abv}
          placeholder="ABV"
          onChange={this.update('abv')}
        />
        <input
          type="text"
          value={this.state.brewed_by}
          placeholder="Brewed By"
          onChange={this.update('brewed_by')}
        />
        <input type="submit" value="Create Beer" />

      </form>  
    </div>  
    );
  }
}

export default withRouter(BeerForm);