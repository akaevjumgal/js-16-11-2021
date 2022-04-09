import { Component } from "react";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>{this.state.error.toString()}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
