import React from "react";


class SearchBar extends React.Component {
    onInputChange(e) {
        e.target.value
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Search for an image..." onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;