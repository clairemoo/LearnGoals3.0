import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../store';
import SingleCompletedGoal from './SingleCompletedGoal'

class CompletedGoals extends React.Component {
    constructor() {
        super();
        this.clickBack = this.clickBack.bind(this)
    }

    clickBack() {
        this.props.changePage('buttons');
    }

    render() {
        return (
            <div class>
                {this.props.goals.length ? (
                    <ul class="list-group">{this.props.goals.map(goal => {
                        return (
                            <div>
                        <SingleCompletedGoal key={goal.name} currentGoal={goal} />    
                        </div>
                        )})}
                    </ul>
                ) : (
                    <h4 class="error">You don't have any completed goals yet!</h4>
                )}
                <button 
                id="back" 
                class="btn btn-danger btn-sm btn-block" 
                type="button"
                onClick={this.clickBack}>
                    Back
                </button>
            </div>
        )
    }
}

const mapState = state => {
    return {
        currentPage: state.currentPage,
        goals: state.goals
    }
}     

const mapDispatch = dispatch => {
    return {
        changePage: (newPage) => dispatch(changePage(newPage))
    }
}

export default connect(mapState, mapDispatch)(CompletedGoals)