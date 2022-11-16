import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const StyledError = styled.div`
  display: flex;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
 > h2 {
   color: red;
  }
`;

/**
 * Generic error boundary that catches any unforeseen 
 * errors of a page component and displays an error message.
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <StyledError>
            <h2>An error occured while loading the page. Please reload and try again.</h2>
            <p>Errormessage: {this.state.error?.message}</p>
          </StyledError>
          {this.props.children}
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;