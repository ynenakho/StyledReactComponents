import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import TravelWebPage from './TravelWebPage/TravelWebPage';
import CloudHostingPage from './CloudHostingPage/CloudHostingPage';
import AdminPage from './AdminPage/AdminPage';

// import PostsPage from './AdminPage/PostsPage';
// import CategoriesPage from './AdminPage/CategoriesPage';
// import UsersPage from './AdminPage/UsersPage';
// import CommentsPage from './AdminPage/CommentsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/travel" component={TravelWebPage} />
        <Route exact path="/cloudhosting" component={CloudHostingPage} />
        <Route exct path="/admin" component={AdminPage} />
        {/* <Route exact path="/admin/posts" component={PostsPage} />
        <Route exact path="/admin/users" component={UsersPage} />
        <Route exact path="/admin/categories" component={CategoriesPage} />
        <Route exact path="/admin/comments" component={CommentsPage} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
