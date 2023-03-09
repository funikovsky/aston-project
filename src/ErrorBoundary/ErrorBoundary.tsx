import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorIfo } from './ErrorInfo';

interface Props {
  children: ReactNode;
}

interface State {
  errorInfo: string | null;
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    errorInfo: null,
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      errorInfo: errorInfo.componentStack,
      hasError: true,
    });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Произошла непредвиденная ошибка! </h1>
          {this.state.errorInfo && <ErrorIfo errorInfoContent={this.state.errorInfo} />}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
