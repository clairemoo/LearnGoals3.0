import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../store'

class AddGoal extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            type: ''
        }
        this.clickBack = this.clickBack.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    clickBack() {
        this.props.changePage('buttons');
    }

    handleChange(e) {
        const currentKey = e.target.name;
        this.setState({
            [ currentKey ] : e.target.value,
        });
    }

    handleSubmit() {
        const goal = {
            name: this.state.name,
            url: this.props.url,
            type: this.state.type,
            complete: false
        }
        // chrome.storage.sync.get(['goals'], function (result) {
        //     if (result === null) {
                chrome.storage.sync.set({goals: [goal]})
            // } else {
            //     result.push(goal);
            // }
    }

    render () {
        const url = `${this.props.url.slice(0, 40)}...`
        return (
            <form onSubmit={this.handleSubmit} class="form-control-sm">
                <hr />
                <div>
                    <input 
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text" 
                        name="name" 
                        placeholder="Name of Goal"
                    />
                </div>
                <hr />
                <p>{url}</p>
                <hr />
                <div>
                    <select value={this.state.type} onChange={this.handleChange} name="type">
                        <option>Type</option> 
                        <option>Read</option>
                        <option>Watch</option>
                        <option>Listen</option>
                        <option>Give</option>
                        <option>Sign</option>
                        <option>Share</option>
                        <option>Other</option>
                    </select>
                </div>
                <hr />
                <button 
                    id="add-goal" 
                    class="btn btn-info btn-sm" 
                    type="submit">Add Goal</button>
                <button 
                    id="back" 
                    class="btn btn-danger btn-sm" 
                    type="button"
                    onClick={this.clickBack}>Back</button>
                <hr />
            </form>
        )
    }
}

const mapState = state => {
    return {
        currentPage: state.currentPage,
        url: state.url
    }
}     

const mapDispatch = dispatch => {
    return {
        changePage: (newPage) => dispatch(changePage(newPage)),
    }
}

export default connect(mapState, mapDispatch)(AddGoal)