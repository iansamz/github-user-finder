import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/Search/SearchBar';
import SearchOptions from './components/Search/SearchOptions';
import UserGithub from './components/UserGithub';

function App() {

  const githubUsersURL = 'https://api.github.com/search/users'
  let url = githubUsersURL + '?q=';


  const [users, setUsers] = useState('')
  const [loading, setLoading] = useState(false)

  const [searchText, setSearchText] = useState('iansamz')
  const userRef = useRef<(HTMLInputElement | null)>(null)

  const onSearch = () => {
    if(userRef.current) {
      setSearchText(userRef.current.value);
    }
  }

  const onEnter = (e: KeyboardEvent) => {
    console.log(e.key)
    if(e.key ==='Enter'){

      console.log(e.key)
      // onSearch()
    }
  }

  useEffect(() => {
    setLoading(true)
    url = `${githubUsersURL}?q=${searchText}`

    fetch(url)
      .then((res) => res.json())
      .then((users) => {
        console.log(users)
        setUsers(users)
        setLoading(false)
      })
  }, [searchText]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-all">
      {/* Header */}
      <Navbar />

      {/* Search Bar */}
      <SearchBar 
        userRef={userRef}
        onSearch={onSearch}
        onEnter={onEnter}
      />

      {/* Search Options */}
      <SearchOptions />

      {/* Github Users */}
      <UserGithub />

      {/* Pagination */}
    </div>
  );
}

export default App;
