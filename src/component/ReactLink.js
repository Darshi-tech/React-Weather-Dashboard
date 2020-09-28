import React, { Component } from 'react';


const Tracking = {
  appID: 'dummyLinks',
  apiKey: 'cake',
  track: (payload) => {
    console.log('contacting tracker with: ', payload, Tracking.appID)
  }
}

//./components/Link.jsx
class Linkn extends Component {
  constructor(props) {
    super(props)
    
    //Could to some simple fails ...
    if(!props.title) return
    
    //Or add some default onClicknes ...
    this.onClick = this.onClick.bind(this)
  }

  onClick(props) {
    //Do some dummy action
    Tracking.track({
      to: props.to,
      title: props.title
    })
  }

  render() {
    return (<a href={ this.props.to } title={ this.props.altTitle || this.props.title } target={ this.props.target } onClick={ (this.props.onClick ==='Function') ? this.props.onClick() : this.onClick.bind(this, this.props) }>{this.props.title}</a>)
  }
}
export default Linkn;