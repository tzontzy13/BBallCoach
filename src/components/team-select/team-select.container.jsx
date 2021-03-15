import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsTeamFetching } from '../../redux/team/team.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import TeamSelect from './team-select.component'

const mapStateToProps = createStructuredSelector({
   isLoading: (state) => selectIsTeamFetching(state)
})

const TeamSelectContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(TeamSelect)

export default TeamSelectContainer