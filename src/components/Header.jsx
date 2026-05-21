const Header = ({ totalTasks, completedTasks }) => {
  return (
    <header className="bg-gradient-to-right from-violet-600 to-indigo-600 text-white py-8 px-6 rounded-2xl shadow-lg mb-8">
      <h1 className="text-3xl font-bold tracking-tight">Task Manager</h1>
      <p className="mt-1 text-violet-200 text-sm">
        {completedTasks} / {totalTasks} tasks completed
      </p>
    </header>
  );
};

export default Header;