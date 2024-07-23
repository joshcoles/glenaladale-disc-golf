import "./App.css";
import "./output.css";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 min-h-screen flex flex-col">
        <header className="bg-purple-600 shadow-lg">
          <div className="max-w-7xl mx-auto py-12 px-8 sm:px-12 lg:px-16">
            <h1 className="text-6xl font-extrabold text-white">Landing Page</h1>
          </div>
        </header>

        <main className="flex-grow mt-24 mx-auto max-w-7xl px-8 sm:mt-36 sm:px-12 lg:mt-48 lg:px-16 text-center">
          <h2 className="text-6xl leading-tight font-extrabold text-green-500 sm:text-8xl">
            Welcome to Glenaladale Disc Golf
          </h2>
        </main>

        <footer className="bg-purple-600 border-t border-gray-300 mt-36">
          <div className="max-w-7xl mx-auto py-12 px-8 sm:px-12 lg:px-16">
            <p className="text-center text-2xl text-white">
              &copy; 2024 Glenaladale Disc Golf, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
