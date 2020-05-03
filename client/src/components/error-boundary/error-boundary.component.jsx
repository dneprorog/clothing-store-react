import React from 'react';

import {
    ErrorImageContainer,
    ErrorImageOverlay,
    ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = { hasErrored: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            // You can render any custom fallback UI
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
