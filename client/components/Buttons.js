import React from 'react';
import { connect } from 'react-redux';
import { changePage, setUrl } from '../store'

class Buttons extends React.Component {
    constructor() {
        super();
        this.clickActive = this.clickActive.bind(this);
        this.clickCompleted = this.clickCompleted.bind(this)
        this.clickAdd = this.clickAdd.bind(this);
    };

    clickActive() {
       this.props.changePage('activeGoals');
    }

    clickCompleted() {
        this.props.changePage('completedGoals');
    }

    clickAdd() {
        this.props.changePage('addGoal');
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            this.props.setUrl(url);
        });
    }

    render() {
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
            changePage: (newPage) => dispatch(changePage(newPage)),
            setUrl: (url) => dispatch(setUrl(url))
        }
    }
    
    export default connect(mapState, mapDispatch)(Buttons)