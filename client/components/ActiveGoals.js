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
        this.props.changePage('main');
    }

    render() {
        // <button 
        // id="back" 
        // className="btn btn-danger btn-sm" 
        // type="button"
        // onClick={this.clickBack}>
        //     Back
        // </button>
        return (
        <h1>HIIIIII</h1>
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