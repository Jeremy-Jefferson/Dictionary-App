import React, { useEffect } from "react";
import "./LoadScripts.css";

function LoadScripts() {
  useEffect(() => {
    // Create script elements for word.js and quote2.js
    var wordScript = document.createElement("script");
    var quoteScript = document.createElement("script");

    // Set the src attribute for the scripts
    wordScript.src = "https://wordsmith.org/words/word.js";
    quoteScript.src = "https://wordsmith.org/words/quote2.js";

    // Set the type attribute for the scripts
    wordScript.type = "text/javascript";
    quoteScript.type = "text/javascript";

    // Append the scripts to the #wordScripts div
    document.getElementById("wordScripts").appendChild(wordScript);
    document.getElementById("wordScripts").appendChild(quoteScript);

    // Clean up function if necessary
    return (
      () => {
        // Remove the appended scripts if needed when the component unmounts
        // For example: document.getElementById("wordScripts").innerHTML = '';
      },
      []
    );
  }, []); // The empty dependency array ensures useEffect runs once after initial render

  return <div id="wordScripts"></div>;
}

export default LoadScripts;
