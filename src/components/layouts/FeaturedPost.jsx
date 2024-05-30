import InfoPost from "../elements/InfoPost"


const FeaturedPost = () => {
  return (
  <>
   <article>
    <div className="flex text-white flex-wrap">
        <div className="lg:w-3/4 md:w-7/12 w-full pb-5">
            <img className="rounded-xl w-full" src="/Featured.png" alt="" />
        </div>
        <div className="lg:w-1/4 md:w-5/12 pl-8 w-full text-lg items-center ">
         <InfoPost  
         category="UI DESAIN"
         date="July 2, 2021"
         title="Understanding color theory: the color wheel and finding complementary colors"
         shortDesc="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
         authorAva="/Ellipse-1.png"
         authorName="Leslie Alexander"
         authorJob="UI Designer"
         />
        </div>
    </div>
    <hr className="border-white/10 mt-10" />
   </article></>
  )
}

export default FeaturedPost