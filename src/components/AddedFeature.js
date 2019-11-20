import React from 'react';
import { removeItem } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {

  const handleRemoveItem = event => {
    event.preventDefault();
    props.removeItem(props.feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
      onClick={handleRemoveItem}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {

};

export default connect(
  mapStateToProps, 
  { removeItem }
  )(AddedFeature);
