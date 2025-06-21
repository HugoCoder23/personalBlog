import { Link } from "react-router-dom"
import { BlogImage } from "./BlogImage"

export const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
        <div className="md:hidden xl:block xl:w-2/3">
            <BlogImage src="postImg.jpeg" className="rounded-2xl object-cover" w="800"/>
        </div>
        {/* details */}
        <div className="flex flex-col gap-4">
            <Link to="/test" className="text-4xl font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.            
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Written by</span>
              <Link className="text-blue-800">John Doe</Link>
              <span>on</span>
              <Link className="text-blue-800">Web Design</Link>
              <span>2 days ago</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatum reiciendis molestias dolores commodi asperiores perspiciatis 
              dignissimos quae, numquam maiores, quaerat illo rerum obcaecati alias 
              voluptates sed quo esse? Fugiat, laudantium.
            </p>
            <Link className="underline text-blue-800 text-sm" to="/test">Read More</Link>
        </div>
    </div>
  )
}
