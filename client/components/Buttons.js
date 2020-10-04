import React from 'react';
import { connect } from 'react-redux';
import { changePage, setUrl, getGoals } from '../store'

class Buttons extends React.Component {
    constructor() {
        super();
        this.clickActive = this.clickActive.bind(this);
        this.clickCompleted = this.clickCompleted.bind(this)
        this.clickAdd = this.clickAdd.bind(this);
    };

    clickActive() {
        chrome.storage.sync.get(['goals'], result => {
            let goals = result.goals.filter(goal => {
                return !goal.complete
            })
            this.props.getGoals(goals)
            this.props.changePage('activeGoals');
       });
    }

    clickCompleted() {
        chrome.storage.sync.get(['goals'], result => {
            let goals = result.goals.filter(goal => {
                return goal.complete
            })
            this.props.getGoals(goals)
            this.props.changePage('completedGoals');
           });
    }

    clickAdd() {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            this.props.setUrl(url);
            this.props.changePage('addGoal');
        });
    }

    render() {
        return (
            <div class="form-control-sm">
                <button 
                    id="active-goals" 
                    class="btn btn-outline-success btn-sm btn-block" 
                    type="button"
                    onClick={this.clickActive}>
                        Go to My Active Goals
                </button>
                <hr />
                <button 
                    id="completed-goals" 
                    class="btn btn-outline-danger btn-sm btn-block" 
                    type="button"
                    onClick={this.clickCompleted}>
                        See What You've Accomplished
                </button>
                <hr />
                <button 
                    id="add-goal" 
                    class="btn btn-info btn-block btn-sm btn-block" 
                    type="button"
                    onClick={this.clickAdd}>
                        Add To Goals
                </button>
                <hr />
            </div>
        )
        }
    }
    
    const mapState = state => {
        return {
            currentPage: state.currentPage
        }
    }     
    
    const mapDispatch = dispatch => {
        return {
            changePage: (newPage) => dispatch(changePage(newPage)),
            setUrl: (url) => dispatch(setUrl(url)),
            getGoals: (goals) => dispatch(getGoals(goals))
        }
    }
    
    export default connect(mapState, mapDispatch)(Buttons)