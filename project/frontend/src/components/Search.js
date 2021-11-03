import { Component, React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiUtil from '../Utils/ApiUtil';
import HttpUtil from '../Utils/HttpUtil';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        var searchResult;
        this.state = {inputValue: 'type a search key', searchValue: ''};
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
        this.searchResult = this.state.searchValue
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.inputChange} onKeyPress={this.keyPress}/>
                <Link to='/Search'>
                    <button value={this.state.inputValue} onClick={this.search}>Search!</button>
                </Link>
                <h4>{this.state.searchValue}</h4>
            </div>
        )
    }
}

export default SearchBar;