import React, { useState } from "react";
import "./UImodifier.css";

function UImodifier() {
  const [filename, setFilename] = useState("");
  const [prompt, setPrompt] = useState("");
  const [fileContent, setFileContent] = useState("");

  return (
    <div className="ui-container">
      <button className="sign-in-btn">sign-in</button>
      <h1>Copilot UI Updater</h1>

      <div className="field">
        <label>Filename</label>
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="e.g. Program.cs"
        />
      </div>

      <div className="field">
        <label>Prompt</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to change..."
        />
      </div>

      <div className="field">
        <label>File Content</label>
        <textarea
          value={fileContent}
          onChange={(e) => setFileContent(e.target.value)}
          placeholder="Paste existing code here..."
          rows={10}
        />
      </div>

      <button className="action-btn">
        Update Code
      </button>

      <p className="note">
        This is a UI-only page. No backend integration yet.
      </p>
    </div>
  );
}

export default UImodifier;
