import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class IndexPage extends PureComponent {

  render() {
		{console.log('Hello!')}
		if (this.props.currentUser === null) return (
			<Redirect to="/login" />
		)

		return (
			<div>

				<h1>Welcome</h1>
        Wellcome
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(IndexPage)
