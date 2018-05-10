import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { connect } from 'react-redux';

export class StoryDetailsPage extends Component {
	render() {
		return (
			<div style={{textAlign: 'right'}}>
	         	<NavLink style={{height: '5vh'}} href="#/home" active>Back to Home</NavLink>
				<iframe
					src={this.props.storyDetailsUrl}
					width="100%" style={{height: '95vh'}} scrolling="auto" frameBorder="0"/>
			</div>
		);
	}
}
function mapStateToProps(state) {
  return {
    storyDetailsUrl: state.storyDetailsUrl
  };
}
export default connect(mapStateToProps, null)(StoryDetailsPage);