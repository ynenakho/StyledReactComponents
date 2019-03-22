import React, { Component } from 'react';
import M from 'materialize-css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class FixedActionButton extends Component {
  componentDidMount() {
    M.FloatingActionButton.init(this.button, {
      hoverEnabled: false
    });
    M.Modal.init(this.modal);
    M.FormSelect.init(this.select);

    ClassicEditor.create(document.querySelector('#body'))
      .then(editor => {
        console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <>
        <div
          className="fixed-action-btn"
          ref={button => (this.button = button)}
        >
          <a
            href="#post-modal"
            className="modal-trigger btn-floating btn-large red "
          >
            <i className="material-icons">add</i>
          </a>
        </div>

        {/* Add post modal */}

        <div
          id="post-modal"
          className="modal"
          ref={modal => (this.modal = modal)}
        >
          <div className="modal-content">
            <h4>Add Post</h4>
            <form action="">
              <div className="input-field">
                <input id="title" type="text" autoComplete="off" />
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field">
                <select
                  defaultValue=""
                  name=""
                  id=""
                  ref={select => (this.select = select)}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="1">Web Development</option>
                  <option value="2">Graphic Design</option>
                  <option value="3">Tech Gadgets</option>
                </select>
                <label>Category</label>
              </div>
              <div className="input-field">
                <textarea
                  name="body"
                  id="body"
                  className="materialize-textarea"
                />
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

export default FixedActionButton;
