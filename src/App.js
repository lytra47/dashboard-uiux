import Header from "./ui/header/Header";
import Aside from "./ui/aside/Aside";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Aside />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
