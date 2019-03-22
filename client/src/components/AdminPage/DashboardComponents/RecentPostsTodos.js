import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

export class RecentPostsTodos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todo: ''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todo === '') return;
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ''
    });
  };

  onChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  deleteTodo = index => {
    this.setState({
      todos: this.state.todos.filter((todo, ind) => ind !== index)
    });
    M.toast({ html: 'Todo Removed' }, 2000);
  };

  renderTodos = () => {
    if (this.state.todos === []) return null;
    return this.state.todos.map((todo, index) => (
      <li className="collection-item" key={index}>
        <div>
          {todo}
          <a
            href="#!"
            className="secondary-content delete"
            onClick={() => this.deleteTodo(index)}
          >
            <i className="material-icons">close</i>
          </a>
        </div>
      </li>
    ));
  };

  render() {
    return (
      <div className="section section-recent grey lighten-4">
        <div className="row">
          <div className="col s12 m6 l8">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Recent Posts</span>
                <table className="striped">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Post One</td>
                      <td>Web Development</td>
                      <td>
                        <Link
                          to="/admin/details"
                          className="btn blue lighten-2"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Two</td>
                      <td>Graphic Design</td>
                      <td>
                        <Link
                          to="/admin/details"
                          className="btn blue lighten-2"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Three</td>
                      <td>Web Development</td>
                      <td>
                        <Link
                          to="/admin/details"
                          className="btn blue lighten-2"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Quick Todos</span>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <div className="input-field">
                    <input
                      type="text"
                      id="todo"
                      placeholder="Add todo..."
                      value={this.state.todo}
                      autoComplete="off"
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                </form>
                <ul className="collection todos">{this.renderTodos()}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentPostsTodos;
