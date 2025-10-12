"use client";
import React, { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { Pencil, Trash2, Check, X } from "lucide-react";

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
    <div className="relative group">
      <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-green-400/40 transition-all duration-300 p-6 flex flex-col justify-between h-full min-h-[240px] relative overflow-hidden">
        {/* Subtle glow accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full blur-2xl -translate-y-8 translate-x-8 group-hover:bg-green-200 transition-colors duration-300" />

        {isEditing ? (
          <div className="flex flex-col gap-4 relative z-10">
            <input
              className="px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Title"
            />
            <textarea
              className="px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all min-h-[100px] leading-relaxed"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Description"
            />
            <div className="flex gap-3">
              <button
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:shadow-md transition-all text-sm font-medium flex-1"
                onClick={handleConfirmUpdate}
              >
                <Check className="w-4 h-4" />
                Save
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 hover:shadow-md transition-all text-sm font-medium flex-1"
                onClick={handleCancelUpdate}
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full relative z-10">
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-xl text-gray-900 leading-tight">
                {todo.title}
              </h3>
              {todo.description && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {todo.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                  {todo.category}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  {todo.status}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-5 border-t-2 border-gray-200">
              <button
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:shadow-md transition-all text-sm font-medium flex-1"
                onClick={() => setIsEditing(true)}
              >
                <Pencil className="w-4 h-4" />
                Edit
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 border-2 border-red-200 rounded-lg hover:bg-red-600 hover:text-white hover:shadow-md transition-all text-sm font-medium flex-1"
                onClick={handleDeleteClick}
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>

      <DeleteConfirmationModal
        isOpen={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}

export default TodoCard;
