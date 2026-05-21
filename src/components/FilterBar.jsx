const filters = ["all", "active", "completed"];

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${
            filter === f
              ? "bg-violet-600 text-white shadow"
              : "bg-gray-100 text-gray-500 hover:bg-violet-50 hover:text-violet-600"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;