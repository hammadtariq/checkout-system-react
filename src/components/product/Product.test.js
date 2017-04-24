import React from 'react';
import Product from './Product';
import Dashboard from '../../containers/Dashboard';
import { shallow } from 'enzyme';

describe('Product', () => {
  const product = new Product;
  const dashboard = new Dashboard;

  it('product renders without crashing', () => {
    shallow(<Product selectedPlan={dashboard.selectedPlan} id='classic' name="Classic Ad" price={269.99} />);
  });

  // it('should send product detail to parent component', () => {
  //   console.log('props => ', product);
  //   expect(product.selectPlan()).toEqual(undefined);
  // });

});

