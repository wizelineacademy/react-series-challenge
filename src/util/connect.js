import { connect } from 'react-redux';
import * as a from '../redux/actions';

let positionIfState = propType => {
  return propType.search(/State/g);
};

let positionIfAction = propType => {
  return propType.search(/Action/g);
};

let stateFromPropTypes = (component, state) => {
  let stateProps = {};

  for (let propType in component.propTypes) {
    let position = positionIfState(propType);

    if (position === -1) {
      continue;
    }

    let stateProp = propType.substring(0, position);
    if (!state.hasOwnProperty(stateProp)) {
      console.error('State option not found ' + stateProp);
      continue;
    }

    stateProps[propType] = state[stateProp];
  }

  return stateProps;
};

let actionsFromPropTypes = (component, actions, dispatch) => {
  let stateProps = {};
  for (let propType in component.propTypes) {
    let position = positionIfAction(propType);

    if (position === -1) {
      continue;
    }

    let stateProp = propType.substring(0, position);
    if (!actions.hasOwnProperty(stateProp)) {
      console.error('Action not found ' + stateProp);
      continue;
    }

    stateProps[propType] = (...args) => dispatch(actions[stateProp](...args));
  }

  return stateProps;
};

let Connect = component => {
  const mapStateToProps = state => {
    let props = stateFromPropTypes(component, state);
    return props;
  };

  const mapDispatchToProps = dispatch => {
    let actions = actionsFromPropTypes(component, a, dispatch);
    return actions;
  };

  const Component = connect(mapStateToProps, mapDispatchToProps)(component);

  return Component;
};

export default Connect;
