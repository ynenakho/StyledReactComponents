import React, { Component } from 'react';
import Categories from './CategoryComponents.js/Categories';
import CategoryFixedButton from './CategoryComponents.js/CategoryFixedButton';

class CategoriesPage extends Component {
  render() {
    return (
      <div>
        <Categories />
        <CategoryFixedButton />
      </div>
    );
  }
}

export default CategoriesPage;
