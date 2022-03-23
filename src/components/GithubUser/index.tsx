import { useEffect, useState } from "react"
import { Loading } from "../Loading"
import UserBio from "./UserBio"
import UserData from "./UserData"
import UserProfile from "./UserProfile"
import UserStats from "./UserStats"

const GithubUser = ({ user }: any) => {

  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails] = useState<any>(null)

  useEffect(() => {
    setLoading(true)
    const url = `https://api.github.com/users/${user.login}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUserDetails(data)
        setLoading(false)
      })
  },[user]);



  return (
    <div className="w-full bg-gray-300 dark:bg-gray-700 py-8 px-8 rounded-lg">
      {
        loading 
        ? <Loading /> 
        : 
        <div className="flex flex-col md:grid md:grid-cols-3">
          <UserProfile 
            avatarURL={user.avatar_url}
            username={user.login} 
            name={userDetails.name}
            created_at={userDetails.created_at}
            html_url={userDetails.html_url}
          />

          <div className="flex w-full md:grid md:col-span-2 flex-col space-y-6 px-6 py-3">
            <UserBio bio={userDetails.bio} />
            {/* <UserStats
              repos={userDetails.public_repos}
              followers={userDetails.followers}
              following={userDetails.following}
            />

            <UserData
              location={userDetails.location}
              twitterUsername={userDetails.twitter_username}
              blog={userDetails.blog}
              company={userDetails.company}
            /> */}
          </div> 
        </div>
      }
                
    </div>
  )
}

export default GithubUser