import React from 'react';
import ActiveGoals from './ActiveGoals';
import CompletedGoals from './CompletedGoals';
import AddGoal from './AddGoal';
import Buttons from './Buttons'
import { connect } from 'react-redux'

class Main extends React.Component {
    constructor() {
        super();
        this.whichPage = this.whichPage.bind(this)
    }

    whichPage() {
        switch (this.props.currentPage) {
            case 'buttons':
                return <Buttons />
            case 'activeGoals':
                return <ActiveGoals />
            case 'completedGoals':
                return <CompletedGoals />
            case 'addGoal':
                return <AddGoal />
            default:
                return <h1>Not an option!</h1>
        }
    }

    render() {
        let componentToDisplay = this.whichPage();
        return (componentToDisplay)
    }
}

const mapState = state => {
    return {
        currentPage: state.currentPage
    }
}     

export default connect(mapState)(Main)