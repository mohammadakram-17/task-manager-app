import { useState } from "react";

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (!editText.trim()) return;
    editTask(task.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-3 rounded-xl shadow-sm mb-3 group">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="w-5 h-5 accent-violet-600 cursor-pointer"
      />

      {isEditing ? (
        <input
          autoFocus
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          className="flex-1 px-2 py-1 border-b-2 border-violet-400 focus:outline-none text-gray-700"
        />
      ) : (
        <span
          className={`flex-1 text-gray-700 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {!task.completed && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs text-violet-500 hover:text-violet-700 font-medium"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="text-xs text-red-400 hover:text-red-600 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;