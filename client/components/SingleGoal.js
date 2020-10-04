import React from 'react';
import { changePage, getGoals } from '../store';
import { connect } from 'react-redux';

const SingleGoal = props => {
    const goal = props.currentGoal;

    const whichClass = (type) => {
        switch(type) {
            case 'Read':
                return 'list-group-item list-group-item-action list-group-item-danger'
            case 'Watch':
                return 'list-group-item list-group-item-action list-group-item-warning'
            case 'Listen':
                return 'list-group-item list-group-item-action list-group-item-info'
            case 'Participate':
                return 'list-group-item list-group-item-action list-group-item-success'
            case 'Other':
                return 'list-group-item list-group-item-action list-group-item-dark'                
        }   
    }

    const clickTab = () => {
        chrome.tabs.update({
            url: goal.url
       });
    }

    const markAsComplete = () => {
        let updatedGoals;
        chrome.storage.sync.get(['goals'], function(result) {
            let goals = result.goals;
            updatedGoals = goals.map(currentGoal => {
                if (currentGoal.name === goal.name) {
                    currentGoal.complete = true
                }
                    return currentGoal
            });
            chrome.storage.sync.set({goals: updatedGoals})
        });
        props.changePage('buttons');
    }

    const deleteGoal = () => {
        let updatedGoals;
        chrome.storage.sync.get(['goals'], function(result) {
            let goals = result.goals;
            updatedGoals = goals.filter(currentGoal => {
                return currentGoal.name !== goal.name
            });
            chrome.storage.sync.set({goals: updatedGoals})
        })
    }
    
    const currentClass = whichClass(goal.type);

    return (
        <div>
            <li onClick={clickTab} class={currentClass}>{goal.type} {goal.name}</li>
            <p class="right" onClick={markAsComplete}>Mark Complete</p>
            <p class="right" onClick={deleteGoal}>Delete</p>
        </div>
    )
}

const mapState = (state) => {
    return {
        goals: state.goals
    }
}

const mapDispatch = dispatch => {
    return {
        changePage: (newPage) => dispatch(changePage(newPage)),
        getGoals: (goals) => dispatch(getGoals(goals))
    }
}

export default connect(mapState, mapDispatch)(SingleGoal);