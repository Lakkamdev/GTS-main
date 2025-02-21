import React from 'react';

const Editor = ({ editorOpen }) => {
  if (!editorOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 p-10">
      <h2 className="text-2xl font-bold mb-4">No-Code Editor</h2>
      {/* Add your editor components here */}
      <div className="flex flex-col gap-4">
        <button className="bg-[#f06321] text-white px-4 py-2 rounded-md">Add Section</button>
        <button className="bg-[#f06321] text-white px-4 py-2 rounded-md">Edit Section</button>
        <button className="bg-[#f06321] text-white px-4 py-2 rounded-md">Delete Section</button>
      </div>
    </div>
  );
};

export default Editor;
