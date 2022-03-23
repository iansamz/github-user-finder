const Avatar = ({avatarURL, username}: any) => {
  return (
    <div className=" w-[120px] h-[120px] md:ml-8 ring-[5px] ring-gray-600 dark:ring-gray-300 rounded-full ">
        <img 
            src={avatarURL}
            width="120"
            height="120"
            alt={username}
            className="rounded-full "
        />
    </div>
  )
}

export default Avatar