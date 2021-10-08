import { Component, React, useEffect, useState } from 'react';
import ApiUtil from '../Utils/ApiUtil';
import HttpUtil from '../Utils/HttpUtil';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: 'iPhone', searchValue: ''};
        this.inputChange = this.inputChange.bind(this);
        this.search = this.search.bind(this);
    }

    inputChange(event) {
        this.setState({inputValue: event.target.value});
    }

    // when the user press Enter.
    keyPress = (e) => {
        if (e.nativeEvent.keyCode === 13) {this.search(e);}
    }

    search(event) {
        // use the post to send (url, data) to flask
        HttpUtil.post(ApiUtil.API_SEARCH, event.target.value)
            // when the results return
            .then(
                res=> this.setState({searchValue: res.message})
            )
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.inputChange} onKeyPress={this.keyPress}/>
                <button value={this.state.inputValue} onClick={this.search}>Search!</button>
                {/* Pretend we got the results */}
                <h4>{this.state.searchValue}</h4>
            </div>
        )
    }
}

export default SearchBar;