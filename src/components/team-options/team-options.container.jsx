import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsTeamFetching } from '../../redux/team/team.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import TeamOptions from './team-options.component'

const mapStateToProps = createStructuredSelector({
   isLoading: (state) => selectIsTeamFetching(state)
})

const TeamOptionsContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(TeamOptions)

export default TeamOptionsContainer