import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from './ProfileFormActions';

@connect(
    state => ({
      name: state.user.data.name
    }),
    {
        updateUser
    })
export default class ProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name
    }
  }

  onInputChange: Function = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit: Function = (event) => {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }
    this.props.updateUser(this.state.name)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={this.state.name} onChange={this.onInputChange} placeholder="Name" />
          <span className="pure-form-message">This is a required field.</span>

          <br />

          <button type="submit" className="pure-button pure-button-primary">Update</button>
        </fieldset>
      </form>
    )
  }
}