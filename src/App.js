import React, { useState } from "react";
import "./App.css";
import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/javascript/javascript");

function App() {
  const [code, setCode] = useState("");
  console.log(code);
  let [editorRef, setEditor] = useState({});
  let [widget, setWidget] = useState([])
  const handleEditorDidMount = (editor) => {
    // console.log(editor)
    // editorRef = editor;
    setEditor(editor);
  };
  console.log(editorRef);

  const handleClick = () => {
    let error = document.createElement("div");
    error.innerHTML = "this is error";
    console.log(editorRef.doc.lineInfo(1));
    let newWidget  = editorRef.doc.addLineWidget(0, error, {});
    setWidget([
      ...widget,
      newWidget
    ])
  };
  const handleClickClear = () => {
    widget.forEach((wid=>wid.clear()))
  };

  return (
    <div className="App">
      whatttt!
      <CodeMirror
        value={code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
        autoCursor={true}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
        onChange={(editor, data, value) => {}}
        editorDidMount={handleEditorDidMount}
      />
      <button onClick={handleClick}>add lilne widget</button>
      <button onClick={handleClickClear}>clear widget</button>

    </div>
  );
}

export default App;
