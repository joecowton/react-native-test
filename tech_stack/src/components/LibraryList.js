import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
	componentWillMount() {}
	render() {
		console.log(this.props);
		return;
	}
}

const mapStateToProps = state => {
	return { state };
};

export default connect(mapStateToProps)(LibraryList);
