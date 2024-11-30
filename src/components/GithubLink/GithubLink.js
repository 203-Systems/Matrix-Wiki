import React from 'react';

// Base URL for the GitHub repository
const MATRIX_OS_GIT_URL = "https://github.com/203-Systems/MatrixOS/tree/main";

// Reusable GitHub link component
const GithubLink = ({ path }) => {
  return (
    <a
      href={`${MATRIX_OS_GIT_URL}/${path}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {path}
    </a>
  );
};

export default GithubLink;
