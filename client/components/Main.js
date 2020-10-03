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
        chrome.extension.getBackgroundPage().console.log('Main rendering');
        chrome.extension.getBackgroundPage().console.log('current page', this.props.currentPage);
        let componentToDisplay = this.whichPage();
        chrome.extension.getBackgroundPage().console.log('component to display', componentToDisplay);
        return (componentToDisplay)
    }
}

const mapState = state => {
    return {
        currentPage: state.currentPage
    }
}     

export default connect(mapState)(Main)