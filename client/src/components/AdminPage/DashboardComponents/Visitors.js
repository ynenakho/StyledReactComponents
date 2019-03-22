import React, { Component } from 'react';
import Chart from './Chart';
import M from 'materialize-css';

export class Visitors extends Component {
  handleApprove = () => {
    M.toast({ html: 'Comment Approved!' }, 3000);
  };

  handleDeny = () => {
    M.toast({ html: 'Comment Denied!' }, 3000);
  };

  render() {
    return (
      <div className="section section-visitors blue lighten-4">
        <div className="row">
          <div className="col s12 m6 l8">
            <div className="card-panel">
              <Chart />
            </div>
          </div>
          <div className="col s12 m6 l4">
            <ul className="collection with-header latest-comments">
              <li className="collection-header">
                <h5>Latest Comments</h5>
              </li>
              <li className="collection-item avatar">
                <img src="admin-img/person1.jpg" alt="" className="circle" />
                <span className="title">John Doe</span>
                <p className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dicta at veritatis aut ullam fugit eum, aliquid numquam
                  itaque qui obcaecati ipsam, maiores cum mollitia similique
                  animi unde sed et.
                </p>
                <a
                  href="#!"
                  className="approve green-text"
                  onClick={() => M.toast({ html: 'Comment Approved!' }, 3000)}
                >
                  Approve
                </a>{' '}
                |{' '}
                <a
                  href="#!"
                  className="deny red-text"
                  onClick={() => M.toast({ html: 'Comment Denied!' }, 3000)}
                >
                  Deny
                </a>
              </li>
              <li className="collection-item avatar">
                <img src="admin-img/person2.jpg" alt="" className="circle" />
                <span className="title">Steve Smith</span>
                <p className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dicta at veritatis aut ullam fugit eum, aliquid numquam
                  itaque qui obcaecati ipsam, maiores cum mollitia similique
                  animi unde sed et.
                </p>
                <a
                  href="#!"
                  className="approve green-text"
                  onClick={() => M.toast({ html: 'Comment Approved!' }, 3000)}
                >
                  Approve
                </a>{' '}
                |{' '}
                <a
                  href="#!"
                  className="deny red-text"
                  onClick={() => M.toast({ html: 'Comment Denied!' }, 3000)}
                >
                  Deny
                </a>
              </li>
              <li className="collection-item avatar">
                <img src="admin-img/person3.jpg" alt="" className="circle" />
                <span className="title">Ellen Williams</span>
                <p className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dicta at veritatis aut ullam fugit eum, aliquid numquam
                  itaque qui obcaecati ipsam, maiores cum mollitia similique
                  animi unde sed et.
                </p>
                <a
                  href="#!"
                  className="approve green-text"
                  onClick={() => M.toast({ html: 'Comment Approved!' }, 3000)}
                >
                  Approve
                </a>{' '}
                |{' '}
                <a
                  href="#!"
                  className="deny red-text"
                  onClick={() => M.toast({ html: 'Comment Denied!' }, 3000)}
                >
                  Deny
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Visitors;
