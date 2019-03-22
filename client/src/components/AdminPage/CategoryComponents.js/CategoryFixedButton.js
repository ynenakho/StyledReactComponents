import React, { Component } from 'react';
import M from 'materialize-css';

class CategoryFixedButton extends Component {
  componentDidMount() {
    M.FloatingActionButton.init(this.button, {
      hoverEnabled: false
    });
    M.Modal.init(this.modal);
  }
  render() {
    return (
      <>
        <div
          className="fixed-action-btn"
          ref={button => (this.button = button)}
        >
          <a
            href="#category-modal"
            className="modal-trigger btn-floating btn-large red "
          >
            <i className="material-icons">add</i>
          </a>
        </div>
        {/* Add category modal */}
        <div
          id="category-modal"
          className="modal"
          ref={modal => (this.modal = modal)}
        >
          <div className="modal-content">
            <h4>Add Category</h4>
            <form action="">
              <div className="input-field">
                <input id="title" type="text" autoComplete="off" />
                <label htmlFor="title">Title</label>
              </div>
            </form>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-action modal-close btn blue white-text"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CategoryFixedButton;
