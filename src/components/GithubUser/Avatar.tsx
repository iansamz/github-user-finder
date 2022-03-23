const Avatar = ({imageURL, login}: any) => {
  return (
    <div className=" w-[120px] h-[120px] md:ml-8 ring-[5px] ring-gray-600 dark:ring-gray-300 rounded-full ">
        <img 
            src={imageURL}
            width="120"
            height="120"
            alt={login}
            className="rounded-full "
        />
    </div>
  )
}

export default Avatar