
import CardPost from "@/components/elements/CardPost";
import FeaturedPost from "@/components/layouts/FeaturedPost";
import Container  from "@/components/elements/Container";
import mockPost from "@/utils/posts.json"


const Homepage = () => {
  const posts = (mockPost)
  return (
      <>
      <Container>
        <FeaturedPost/>
        <div className="flex flex-wrap -mx-4">    
        {posts.map(post => (   
          <div key={post.id} className="lg:w-4/12 md:w-4/12 w-full px-4">
            <CardPost {...post}/>
          </div>
          ))} 
        </div>
        </Container>
      </>
  );
};

export default Homepage;
