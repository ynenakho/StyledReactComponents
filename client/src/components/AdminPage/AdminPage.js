import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './layout/NavBar';
import DashboardPage from './DashboardPage';
import Footer from './layout/Footer';
import PostsPage from './PostsPage';
import CategoriesPage from './CategoriesPage';
import UsersPage from './UsersPage';
import CommentsPage from './CommentsPage';
import LoginPage from './LoginPage';

class AdminPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/admin/dashboard" component={DashboardPage} />
        <Route exact path="/admin/posts" component={PostsPage} />
        <Route exact path="/admin/users" component={UsersPage} />
        <Route exact path="/admin/categories" component={CategoriesPage} />
        <Route exact path="/admin/comments" component={CommentsPage} />
        <Route exact path="/admin" component={LoginPage} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default AdminPage;
