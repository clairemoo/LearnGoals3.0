import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../store'

class AddGoal extends React.Component {
    constructor() {
        super();
        this.clickBack = this.clickBack.bind(this)
    }

    clickBack() {
        this.props.changePage('main');
    }

    render() {
        return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="goalURL" placeholder=""/>
            </div>
            <div className="form-group">
                    <select className="form-control" id="typeOfGoal">
                        <option value="none" selected disabled hidden>Type</option> 
                        <option>READ</option>
                        <option>WATCH</option>
                        <option>LISTEN</option>
                        <option>GIVE</option>
                        <option>SIGN</option>
                        <option>SHARE</option>
                        <option>OTHER</option>
                    </select>
            </div>
            <button 
                    id="back" 
                    className="btn btn-danger btn-sm" 
                    type="button"
                    onClick={this.clickBack}>
                        Back
            </button>
        </form>
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

export default connect(mapState, mapDispatch)(AddGoal)