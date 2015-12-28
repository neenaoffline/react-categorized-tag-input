import React from 'react';

import Input from './src/index';

const categories = [
  {
    id: 'animals',
    title: 'Animals',
    type: 'animal',
    items: ['Dog', 'Cat', 'Bird', 'Dolphin', 'Apes']
  },
  {
    id: 'something',
    title: 'Something cool',
    items: ['Something cool'],
    single: true
  },
  {
    id: 'food',
    title: 'food',
    type: 'food',
    items: ['Apple', 'Banana', 'Grapes', 'Pear']
  },
  {
    id: 'professions',
    title: 'Professions',
    type: 'profession',
    items: ['Waiter', 'Writer', 'Hairdresser', 'Policeman']
  }
];

const categoryIter = function (i) {
  return [
    {
      id: "animals",
      title: 'Animals',
      type: 'animal',
      items: [`${i}Dog`, `${i}Cat`, `${i}Bird`, `Dolphin${i}`, `Apes${i}`]
    },
    {
      id: 'something',
      title: 'Something cool',
      items: ['Something cool'],
      single: true
    },
    {
      id: 'food',
      title: 'food',
      type: 'food',
      items: ['Apple', 'Banana', 'Grapes', 'Pear']
    },
    {
      id: 'professions',
      title: 'Professions',
      type: 'profession',
      items: ['Waiter', 'Writer', 'Hairdresser', 'Policeman']
    }
  ];
};

function transformTag(category, item) {
  return `${category}/${item}`;
}

let i = 0;

const props = {
  addNew: true,
  categories,
  transformTag,
  value: ['initial'],
  getCategories: (value) => {
    console.log('suggestions', {suggestionsFor : value});
    return new Promise((resolve) => { i = i + 1; resolve(categoryIter(i)) });
  },
  onChange(tags) {
    console.log('Changed', tags);
  },
  onBlur() {
    console.log('Blur')
  }
};

React.render(
  React.createElement(Input, props),
  document.body
);
