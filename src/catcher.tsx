import { Component } from "react";

interface ErrorBoundaryState {
  error: string;
  hasError: boolean;
}

export default class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  state = {
    error: '',
    hasError: true,
  }

  static getDerivedStateFromError(error: ErrorBoundaryState) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>{this.state.error}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
