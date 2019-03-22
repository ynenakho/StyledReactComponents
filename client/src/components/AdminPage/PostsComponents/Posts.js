import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  render() {
    return (
      <div className="section section-posts grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Posts</span>
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date Created</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Post One</td>
                        <td>Web Development</td>
                        <td>Jan 1, 2018</td>
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
                        <td>Jul 6, 2018</td>
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
                        <td>Jun 5, 2018</td>
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
                        <td>Post Four</td>
                        <td>Web Development</td>
                        <td>Jan 1, 2018</td>
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
                        <td>Post Five</td>
                        <td>Tech Gadgets</td>
                        <td>Jul 10, 2018</td>
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
                        <td>Post Six</td>
                        <td>Web Development</td>
                        <td>Jun 8, 2018</td>
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
                <div className="card-action">
                  <ul className="pagination">
                    <li className="disabled">
                      <a href="#!" className="blue-text">
                        <i className="material-icons">chevron_left</i>
                      </a>
                    </li>
                    <li className="active blue lighten-2">
                      <a href="#!" className="white-text">
                        1
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="blue-text">
                        2
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="blue-text">
                        3
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="blue-text">
                        4
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="blue-text">
                        5
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="blue-text">
                        <i className="material-icons">chevron_right</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
