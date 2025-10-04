import React, { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

function TodoCard({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleConfirmUpdate = () => {
    onUpdate(todo.id, { title: editTitle, description: editDescription });
    setIsEditing(false);
  };

  const handleCancelUpdate = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    onDelete(todo.id);
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <div className="bg-gray-500 p-4 rounded-lg text-white shadow-md flex flex-col justify-between w-full h-56">
        {isEditing ? (
          <div className="flex flex-col space-y-2">
            <input
              className="p-1 rounded text-black"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              className="p-1 rounded text-black resize-none"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <div className="flex space-x-2">
              <button
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleConfirmUpdate}
              >
                ✅
              </button>
              <button
                className="px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={handleCancelUpdate}
              >
                ❌
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="font-semibold text-lg mb-1">{todo.title}</div>
              <div className="text-sm mb-1">
                Description: {todo.description}
              </div>
              <div className="text-sm">Category: {todo.category}</div>
              <div className="text-sm">Status: {todo.status}</div>
            </div>
            <div className="flex space-x-2 mt-2">
              <button
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <DeleteConfirmationModal
        isOpen={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}

export default TodoCard;
