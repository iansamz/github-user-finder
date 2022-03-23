import Avatar from "./Avatar"

const GithubUser = ({ user }: any) => {

  return (
    <div className="w-full bg-gray-300 dark:bg-gray-700 py-8 px-8">
        
      <Avatar imageURL={user.avatar_url} login={user.login} />
      <p className="text-sm font-bold text-gray-900 dark:text-white">@{user.login}</p>
                
    </div>
  )
}

export default GithubUser