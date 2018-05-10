import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { Input, Nav, NavItem, NavLink } from 'reactstrap';

import * as appActions from '../actions/AppActions';
import SectionContainer from './SectionContainer';
import { SECTIONS } from '../Constants';

export class HomePage extends Component {

	componentDidMount() {
		this.props.actions.fetchSectionStories(this.props.activeSection);
	}

	fireSearch = (event) => {
		if (event.key === "Enter") {
			this.props.actions.searchStories(event.target.value);
		}
  	};

	handleSectionSelection = (sectionName) => {
	    if (this.props.activeSection !== sectionName) {
	    	this.props.actions.fetchSectionStories(sectionName);
	    }
  	};

	render() {
		const sectionPills = SECTIONS.map((item) => {
	    return (
	        <NavItem key={item}>
        		<NavLink href="#"
        				className={classnames({ active: this.props.activeSection === item })}
          				onClick={() => { this.handleSectionSelection(item); }}>
          		{item}
          		</NavLink>
      		</NavItem>
	      );
	    });
		return(<div style={ {padding: '20px'}}>
			<Nav pills>
			 	{sectionPills}
          		<NavItem>
          			<Input type="text" id="searchStories"
          				placeholder="Search..." onKeyPress={this.fireSearch}/>
          		</NavItem>
          	</Nav>
          	<SectionContainer sectionStories={this.props.sectionStories}
          					loadStoryDetails={this.props.actions.loadStoryDetails}/>
		</div>);
	}
}

function mapStateToProps(state) {
  return {
    activeSection: state.activeSection,
    sectionStories: state.sectionStories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);