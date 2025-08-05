import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center text-gray-600 py-20">
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.message || "Unknown error occurred."}</p>
          <a href="/" className="text-blue-500 hover:underline">
            Go back to Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;