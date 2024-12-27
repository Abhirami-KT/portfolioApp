import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4">404 - Page Not Found</h1>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
