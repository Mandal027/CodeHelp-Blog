import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {

  const context = useContext(AppContext);
  console.log("AppContext:", context);  // Log the context object here

  const { fetchBlogPosts } = context;

  useEffect(() => {
    fetchBlogPosts();
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}