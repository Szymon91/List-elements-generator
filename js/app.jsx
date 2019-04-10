import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListElementsGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItemsArr: []
        }
        for (let i = 0; i < 100; i++) {
            this.state.listItemsArr.push(`Item nr: ${i + 1}`)
        }
    }
    toDelete = (e) => {
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
    changeStyle = (item, e) => {
        const li = this.state.listItemsArr.indexOf(item);
        if (li % 3 == 0) {
            e.target.style.color = this.props.textColor;
        }
    }
    render() {
        return (
            <ul>{this.state.listItemsArr.map((item, i) => {
                return <li onClick={(e) => this.changeStyle(item, e)} key={i}>{item} <button onClick={this.toDelete}>Delete</button></li>
            })}</ul>
        )
    }
}

class App extends Component {
    render() {
        return <ListElementsGenerator textColor="#1143ee" />
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});