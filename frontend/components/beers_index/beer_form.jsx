import React from 'react';

import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class BeerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      abv: '',
      ibu: '',
      brewed_by: '',
      photoFile: null
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('beer[name]', this.state.name);
    formData.append('beer[ibu]', this.state.ibu);
    formData.append('beer[abv]', this.state.abv);
    formData.append('beer[brewed_by', this.state.brewed_by)
    if (this.state.photoFile) {

      formData.append('beer[photo]', this.state.photoFile);
    }
    this.props.createBeer(formData)
      .then(data => this.props.history.push(`beers/${data.beer.id}`));
  }

  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
    fileReader.readAsDataURL(file);
    }
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
   
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
    <div className="form-page">
      <HeaderContainer />
      <div className="top-background"></div>
      <ul>
        {/* {this.errors()} */}
      </ul>
      <div className="beer-form-container">
        <form className="beer-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            placeholder="Beer Name"
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
            <input
              type="text"
              value={this.state.description}
              placeholder="Description"
              onChange={this.update('description')}
            />
          <input
            className="file-btn" 
            type="file"
            placeholder="Beer Logo"
            onChange={this.handleFile}
          />
          <div className="preview">{preview}</ div>
          <input className="create-btn" type="submit" value="Create Beer" />

        </form>
      </div>  
    </div>  
    );
  }
}

export default withRouter(BeerForm);