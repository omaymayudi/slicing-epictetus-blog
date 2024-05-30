import CardPost from "@/components/elements/CardPost"
import Container from "@/components/elements/Container"
import SectionHeader from "@/components/elements/SectionHeader"
import mockPost from "@/utils/posts.json"



const PostPage = () => {
    const posts = mockPost

  return (
    <>
    <Container>
        <SectionHeader text= "UI Desain" />
        {!posts.length ? (
            <div className="text-center py-20 ">
                <h2 className="text-6xl text-white">No result😓</h2>
                <p className=" text-white/60 md:w-7/12 mx-auto py-6 text-2xl">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
            </div>
        ):
         (  
        <div className="flex flex-wrap -mx-4">    
        {posts.map(post => (   
          <div key={post.id} className="lg:w-4/12 w-full px-4">
            <CardPost {...post}/>
          </div>
          ))} 
        </div>
         )
}
    </Container>
    </>
  )
}

export default PostPage