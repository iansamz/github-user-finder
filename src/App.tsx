import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import UserGithub from './components/UserGithub';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-all">
      {/* Header */}
      <Navbar />

      {/* Search Bar */}
      <SearchBar />

      {/* Github Users */}
      <UserGithub />

      {/* Pagination */}
    </div>
  );
}

export default App;
