import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../store'

chrome.extension.getBackgroundPage().console.log('This file ran')

class ActiveGoals extends React.Component {
    constructor() {
        super();
        this.clickBack = this.clickBack.bind(this)
    }

    clickBack() {
        this.props.changePage('buttons');
    }

    render() {
        chrome.extension.getBackgroundPage().console.log('This file ran')
        return (
            <button 
            id="back" 
            class="btn btn-danger btn-sm" 
            type="button"
            onClick={this.clickBack}>
                Back
            </button>
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

export default connect(mapState, mapDispatch)(ActiveGoals)