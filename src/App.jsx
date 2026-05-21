import useTasks from "./hooks/useTasks";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

function App() {
  const {
    tasks,
    totalTasks,
    filter,
    setFilter,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
  } = useTasks();

  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <Header totalTasks={totalTasks} completedTasks={completedTasks} />
        <TaskInput addTask={addTask} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;