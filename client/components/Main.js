import React from 'react';
import ActiveGoals from './ActiveGoals';
import CompletedGoals from './CompletedGoals';
import AddGoal from './AddGoal';
import Buttons from './Buttons'
import { connect } from 'react-redux'

export default class Main extends React.Component {

    render() {
        // let componentToDisplay = () => {
        //     switch (this.props.currentPage) {
        //         case 'buttons':
        //             return <Buttons />
        //         case 'activeGoals':
        //             return <ActiveGoals />
        //         case 'completedGoals':
        //             return <CompletedGoals />
        //         case 'addGoal':
        //             return <AddGoal />
        //         default:
        //             return <h1>Not an option!</h1>
        //     }
        // }
        return (
        <Buttons />
        )
    }
}

const mapState = state => {
    return {
        currentPage: state.currentPage
    }
}     

// const mapDispatch = dispatch => {
//     return {
//         changePage: (newPage) => dispatch(changePage(newPage))
//     }
// }

export default connect(mapState)(Main)