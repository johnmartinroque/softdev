import React from "react";

function DeleteConfirmationModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg w-80 p-6">
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
          Confirm Deletion
        </h3>
        <p className="text-sm text-gray-600 text-center mb-6">
          Are you sure you want to delete this task? This action cannot be
          undone.
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2.5 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
