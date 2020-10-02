import React from 'react';
import { connect } from 'react-redux';

class Buttons extends React.Component {
    constructor() {
        super();
        this.clickActive = this.clickActive.bind(this);
        this.clickCompleted = this.clickCompleted.bind(this)
        this.clickAdd = this.clickAdd.bind(this);
    };

    componentDidMount() {
        this.props.changePage('main')
    }

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
        return (
            <div class="form-control-sm">
                <button 
                    id="active-goals" 
                    className="btn btn-outline-success btn-sm" 
                    type="button"
                    onClick={this.clickActive}>
                        Go to My Active Goals
                </button>
                <hr />
                <button 
                    id="completed-goals" 
                    className="btn btn-outline-danger btn-sm" 
                    type="button"
                    onClick={this.clickCompleted}>
                        See What You've Accomplished
                </button>
                <hr />
                <button 
                    id="add-goal" 
                    className ="btn btn-info btn-block btn-sm" 
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