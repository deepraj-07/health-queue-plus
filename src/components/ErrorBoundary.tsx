import React from "react";
import logger from "@/lib/logger";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  errorMessage: string;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error.message || "An unexpected error occurred.",
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    logger.error("Unhandled UI error", { error, errorInfo });
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: "#f8fafc",
          }}
        >
          <div
            style={{
              maxWidth: "640px",
              width: "100%",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "1.25rem", color: "#0f172a" }}>Something went wrong</h1>
            <p style={{ marginTop: "0.75rem", marginBottom: "1rem", color: "#334155" }}>
              {this.state.errorMessage}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                background: "#0f766e",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "0.625rem 1rem",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
