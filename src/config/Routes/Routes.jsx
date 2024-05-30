import RootLayout from "@/components/layouts/RootLayout"
import { DetailPost } from "@/pages/DetailPost";


import Homepage from "@/pages/Homepage";
import NoteFound from "@/pages/NotFound";
import PostPage from "@/pages/PostPage";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="posts" element={<PostPage/>}/>
        <Route path="detail" element={<DetailPost/>}/>

        <Route path="*" element={<NoteFound/>}/>
    </Route>

      
  
    </>
  )
);

export default router;
