import React from 'react';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state= {}
    };

    render() {
        return (
            <div class="form-control-sm">
            <button id="active-goals" class="btn btn-outline-success btn-sm" type="button">Go to My Active Goals</button>
            <hr />
            <button id="completed-goals" class="btn btn-outline-danger btn-sm" type="button">See What You've Accomplished</button>
            <hr />
            <button id="add-goal" class ="btn btn-info btn-block btn-sm" type="button">Add To Goals</button>
            <hr />
          </div>
        )
    }
}