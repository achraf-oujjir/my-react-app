import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Achraf's React App</h2>
        <p>
          If you are seeing this page, the pipeline has successfully run!
        </p>
        <p>It included multiple components of the AWS CI/CD stack (CodeCommit, CodeBuild, CodeDeploy and CodePipeline)
        </p>
      </header>
    </div>
  );
}

export default App;
