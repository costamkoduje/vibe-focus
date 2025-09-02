'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    // Error logging - można rozszerzyć o external service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-light">
          <div className="text-center max-w-md mx-auto p-8">
            <h2 className="fonts-fig-l text-dark mb-4">
              Coś poszło nie tak
            </h2>
            <p className="fonts-mono-m text-gray-dark mb-6">
              Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="buttons-primary"
            >
              Odśwież stronę
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}