import React, { Component } from 'react';
import { connect } from 'react-redux';


class Grid extends Component {

	render() {

		return(

			<div>
				<div className="GridPostItem">
					<img className = "" img src={this.props.post.data.thumbnail} />
				</div>
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Grid);
