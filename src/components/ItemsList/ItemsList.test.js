import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from './ItemsList';
import Dashboard from '../../containers/Dashboard';

describe('ItemsList', () => {
  const itemsList = new ItemsList;
  const dashboard = new Dashboard;
  const userProducts = dashboard.userProducts;

  it('should return product price', function () {
    expect(itemsList.verifyDiscount(userProducts['classic'])).toEqual(269.99);
  });

  it('should return product discounted price', function () {
    expect(itemsList.verifyDiscount(userProducts['standout'])).toEqual(322.99);
  });

  it('should return total cost and total items', function () {
    expect(itemsList.createItemList(userProducts)).toEqual({ 'totalCost': 0, 'items': [] });
  });

  it('Items List renders without crashing', () => {
    shallow(<ItemsList />);
  });

});


