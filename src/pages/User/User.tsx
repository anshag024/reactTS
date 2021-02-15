import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Form from './Form';
import { addUser } from '../../redux/actions/user/add';
import { reset } from 'redux-form';
import { createSelector } from 'reselect'

export const User = (props: any) => {
  const [isLoading, setLoading] = useState(false);
  const shopItemsSelector = (state) => state.shop.items

  const subtotalSelector = createSelector(
    shopItemsSelector,
    items => items.reduce((acc, item) => acc + item.value, 0)
  )
  var exampleState = {
    shop: {
      taxPercent: 8,
      items: [
        { name: 'apple', value: 1.20 },
        { name: 'orange', value: 0.95 },
      ]
    }
  }
  
  console.log(subtotalSelector(exampleState))
  const handleSubmit = (values: any) => {
    console.log('values', values);
    props.dispatch(addUser(values));
    props.dispatch(reset('user'));
  }
  return (
    <Form onSubmit={handleSubmit} isLoading={isLoading} {...props} />
  );
}

export default connect(null)(User);