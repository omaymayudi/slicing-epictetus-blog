

const InfoPost = (
{
    category,
    date,
    title,
    shortDesc,
    authorAva,
    authorName,
    authorJob
}

) => {
  return(
    <>
    <div className="">
        <div className="flex items-center gap-2 text-white/50">
          <p>{category}</p>
            <span>&bull;</span>
            <p>{date}</p>
          </div>
          <div className="py-3 flex flex-wrap gap-3">
            <h1 className="text-2xl text-white">{title}</h1> 
            <p className="text-white/50 ">{shortDesc}</p>
          </div>
          <div className="flex py-3">
           <div className="w-14">
                <img src={authorAva} alt="" />
            </div>
           <div className="px-4">
                <h2 className="text-white">{authorName}</h2>
                <p className=" text-white/50 ">{authorJob}</p>

           </div>
          </div>
    </div>

    </>
  )
   
}

export default InfoPost