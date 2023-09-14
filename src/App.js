import React from 'react';
import './App.css';

// Define a higher-order component
const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is about to be unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Create a pure component
class PureComponentExample extends React.PureComponent {
  render() {
    return <div className="pure-component">Pure Component: {this.props.message}</div>;
  }
}

// Enhance the pure component with the HOC
const EnhancedPureComponent = withLogger(PureComponentExample);

// Create a regular component
class RegularComponentExample extends React.Component {
  render() {
    return <div className="regular-component">Regular Component: {this.props.message}</div>;
  }
}

// Enhance the regular component with the HOC
const EnhancedRegularComponent = withLogger(RegularComponentExample);

const App = () => {
  return (
    <div>
      <h1>HOC-: A higher-order component (HOC) is an advanced technique in React for reusing component logic.</h1>
      <h1>Pure Component-: React pure components are the components that do not re-render when the value of props and state has been updated with the same values. </h1>
    <h1>Example of hoc and pure component are -:</h1>
      <EnhancedPureComponent message="Hello, Pure Component!" />
      <EnhancedRegularComponent message="Hello, Regular Component!" />
    </div>
  );
};

export default App;
