import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3rem] text-white">
            Todo
          </h1>
          <button className="uppercase">
            <MoonIcon />
          </button>
        </div>
        <form
          className="mt-8 flex items-center gap-4 overflow-hidden rounded-lg bg-white py-3 px-3"
          action=""
        >
          <span className="inline-block h-4 w-4 rounded-full border-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            name=""
            id=""
            placeholder="Creat a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-lg bg-white [&>article]:p-4">
          <article className="flex items-center gap-4 border-b border-b-gray-400">
            <button className="inline-block h-4 w-4 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">Compleate online course on </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <section className="flex justify-between p-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-lg bg-white p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Complete</button>
        </div>
      </section>
      <p className="mt-8 text-center">Drang and drop to reorder list</p>
    </div>
  );
};

export default App;
