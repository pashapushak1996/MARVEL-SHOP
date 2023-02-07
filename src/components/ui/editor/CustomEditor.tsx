import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { editorConfig } from './editorConfig';

import './CustomEditor.scss';

interface ICustomEditorProps {
  /** This is placeholder for Editor*/
  placeholder?: string;
}

export const CustomEditor: React.FC<ICustomEditorProps> = ({ placeholder }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <Editor editorState={editorState}
            wrapperClassName={'editor-wrapper'}
            editorClassName={'editor'}
            toolbarClassName={'editor-toolbar'}
            toolbar={editorConfig}
            onEditorStateChange={onEditorStateChange}
            placeholder={placeholder}
    />
  );
};
