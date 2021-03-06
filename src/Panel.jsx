import React from 'react';

import Category from './Category.jsx';

const { PropTypes } = React;

const Panel = React.createClass({
  propTypes: {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    selection: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    addNew: PropTypes.bool,
  },

  getCategories() {
    return this.props.categories.map((c, i) => {
      return (
        <Category key={c.id} items={c.items} category={c.id} title={c.title}
          selected={this.props.selection.category === i}
          selectedItem={this.props.selection.item}
          input={this.props.input} addNew={this.props.addNew}
          type={c.type} onAdd={this.props.onAdd} single={c.single} />
      );
    });
  },

  render() {
    return (
      <div className='cti__panel'>
        {this.getCategories()}
      </div>
    );
  }
});

export default Panel;
