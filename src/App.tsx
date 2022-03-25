import { useEffect, useRef, useState } from 'react';
import { Loading } from './components/Loading';
import Navbar from './components/Navbar';
import SearchBar from './components/Search/SearchBar';
import SelectOptions from './components/Search/SelectOptions';
import GithubUsers from './components/GithubUsers';
import Pagination from './components/Pagination';

const sortOptions = [
  { name: 'Best Match', sort: '', order: '' },
  { name: 'Most Followers', sort: 'followers', order: 'desc' },
  { name: 'Fewest Followers', sort: 'followers', order: 'asc' },
  { name: 'Most Recently Joined', sort: 'joined', order: 'desc' },
  { name: 'Least Recently Joined', sort: 'joined', order: 'asc' },
  { name: 'Most Repositories', sort: 'repositories', order: 'desc' },
  { name: 'Least Repositories', sort: 'repositories', order: 'asc' },
]

const reposOptions = [
  { name: 'Repositories', repositories: '' },
  { name: '10 > Repos', repositories: 10 },
  { name: '50 > Repos', repositories: 50 },
  { name: '100 > Repos', repositories: 100  },
  { name: '500 > Repos', repositories: 500  },
]

const followersOptions = [
  { name: 'Followers', followers: '' },
  { name: '10 > Followers', followers: 10 },
  { name: '50 > Followers', followers: 50 },
  { name: '100 > Followers', followers: 100  },
  { name: '200 > Followers', followers: 200  },
  { name: '500 > Followers', followers: 500  },
  { name: '1000 > Followers', followers: 1000  },
  { name: '5000 > Followers', followers: 5000  },
  { name: '10000 > Followers', followers: 10000  },
]

const perPageOptions = [
  { name: '10', value: 10 },
  { name: '20', value: 20 },
  { name: '30', value: 30 },
  { name: '50', value: 50 },
  { name: '100', value: 100 },
] 

function App() {

  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  
  const [searchText, setSearchText] = useState('iansamz')
  const userRef = useRef<(HTMLInputElement | null)>(null)

  const onSearch = () => {
    if(userRef.current) {
      setSearchText(userRef.current.value);
    }
  }

  const onEnter = (e: KeyboardEvent) => {
    if(e.key ==='Enter'){
      onSearch()
    }
  }

  const [sort, setSort] = useState(sortOptions[0])
  const [repos, setRepos] = useState(reposOptions[0])
  const [followers, setFollowers] = useState(followersOptions[0])

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(perPageOptions[2])

  useEffect(() => {
    setLoading(true)

    const nameQuery = `${searchText === '' ? 'iansamz' : searchText}`

    const followersQuery = followers.followers ? `+followers:>${followers.followers}` : ''
    const reposQuery = repos.repositories ? `+repos:>${repos.repositories}` : ''
    const sortQuery = sort.sort ? `&sort=${sort.sort}&order=${sort.order}` : ''
    const optionsQuery = `${reposQuery}${followersQuery}${sortQuery}`;

    const perPageQuery = perPage ? `&per_page=${perPage.value}` : '';
    const pageQuery = page ? `&page=${page}` : '';

    const url = `https://api.github.com/search/users?q=${nameQuery}${optionsQuery}${perPageQuery}${pageQuery}`;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })

  }, [searchText, sort, repos, followers, page, perPage]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-all">
      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      <SearchBar 
        userRef={userRef}
        onSearch={onSearch}
        onEnter={onEnter}
      />

      {/* Search Options */}
      <div 
        className="flex flex-col md:flex-row md:align-items md:justify-between mx-auto mt-5 max-w-sm pb-2 md:max-w-4xl transition  duration-300 ease-in">
        <SelectOptions
          options={sortOptions}
          setSelected={setSort}
          selected={sort}
        />
        <SelectOptions
          options={reposOptions}
          setSelected={setRepos}
          selected={repos}
        />
        <SelectOptions
          options={followersOptions}
          setSelected={setFollowers}
          selected={followers}
        />
      </div>

      {loading 
        ? <Loading /> 
        :<>

          {/* Pagination */}
          <Pagination 
            page={page}
            setPage={setPage}
            perPageOptions={perPageOptions}
            perPage={perPage}
            setPerPage={setPerPage}
            data={data}
            borderTop={false}
          />

          {/* Github Users */}
          <GithubUsers data={data} />

          {/* Pagination */}
          <Pagination 
            page={page}
            setPage={setPage}
            perPageOptions={perPageOptions}
            perPage={perPage}
            setPerPage={setPerPage}
            data={data}
            borderTop={true}
          />
        </>
      }
    </div>
  );
}

export default App;
