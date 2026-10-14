import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
            <h1 className="display-4 fw-bold mb-3">
                Welcome to <span className="text-primary">FeudjoWorld</span>
            </h1>

            <p className="lead mb-5 text-muted" style={{ maxWidth: '600px' }}>
                I'm Franklin Feudjo Tsopni, a Fullstack Software Engineer.
                Discover my portfolio, my projects, and my skills.
            </p>

            <div className="d-flex gap-3">
                <Link
                    to="/profile?unique_uid=e5dc1532-1501-4c88-a23a-f78e5e82d2fc"
                    className="btn btn-primary btn-lg px-4"
                >
                    View my portfolio
                </Link>

                <a
                    href="https://github.com/feudjo-franklin"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-lg px-4"
                >
                    GitHub
                </a>
            </div>

            <p className="mt-5 text-muted small">
                © {new Date().getFullYear()} Franklin Feudjo Tsopni
            </p>
        </div>
    );
};