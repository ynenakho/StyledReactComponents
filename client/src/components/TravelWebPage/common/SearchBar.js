import React, { Component } from 'react';
import M from 'materialize-css';

class SearchBar extends Component {
  componentDidMount() {
    M.Autocomplete.init(this.autocomplete, {
      data: {
        Aruba: null,
        'Cancun Mexico': null,
        Hawaii: null,
        Florida: null,
        California: null,
        Jamaica: null,
        Europe: null,
        'The Bahamas': null
      }
    });
  }

  render() {
    return (
      <div className="section section-search teal darken-1 white-text center">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h3>Search Destinations</h3>
              <div className="input-field">
                <input
                  ref={autocomplete => (this.autocomplete = autocomplete)}
                  type="text"
                  className="white grey-text autocomplete"
                  placeholder="Aruba, Cancun, etc..."
                  id="autocomplete-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
