import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../store'

class Buttons extends React.Component {
    constructor() {
        super();
        this.clickActive = this.clickActive.bind(this);
        this.clickCompleted = this.clickCompleted.bind(this)
        this.clickAdd = this.clickAdd.bind(this);
    };

    clickActive() {
       chrome.extension.getBackgroundPage().console.log('We clicked active')
       this.props.changePage('activeGoals');
    }

    clickCompleted() {
        this.props.changePage('completedGoals');
    }

    clickAdd() {
        this.props.changePage('addGoal');
    }

    render() {
        chrome.extension.getBackgroundPage().console.log('current page:', this.props.currentPage);
        return (
            <div class="form-control-sm">
                <button 
                    id="active-goals" 
                    class="btn btn-outline-success btn-sm" 
                    type="button"
                    onClick={this.clickActive}>
                        Go to My Active Goals
                </button>
                <hr />
                <button 
                    id="completed-goals" 
                    class="btn btn-outline-danger btn-sm" 
                    type="button"
                    onClick={this.clickCompleted}>
                        See What You've Accomplished
                </button>
                <hr />
                <button 
                    id="add-goal" 
                    class="btn btn-info btn-block btn-sm" 
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
            changePage: (newPage) => dispatch(changePage(newPage))
        }
    }
    
    export default connect(mapState, mapDispatch)(Buttons)