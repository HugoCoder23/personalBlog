import { Link } from "react-router-dom"
import { BlogImage } from "./BlogImage"

export const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* First */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Image */}
            <BlogImage src="featured1.jpeg" className="rounded-3xl object-cover" w="895"/>
            {/* Details */}
            <div className="flex items-center gap-4">
                <h1 className="font-semibold lg:text-lg">01.</h1>
                <Link className="text-blue-800 lg:text-lg">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
            </div>
            {/* Title */}
            <Link to="/text" className="text-xl lg:text-3xl font-semibold lg:font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
        </div>
        {/* Other Posts */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* second */}
            <div className="lg:h-1/3 flex justify-between gap-4">
                <div className="w-1/3 aspect-video">
                    <BlogImage src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"/>
                </div>
                {/* details and title */}
                <div className="w-2/3">
                    {/* Details */}
                    <div className="flex items-center gap-4 text-sm lg:text-based mb-4">
                        <h1 className="font-semibold">02.</h1>
                        <Link className="text-blue-800">Web Design</Link>
                        <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    {/* title */}
                    <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>
            {/* third */}
            <div className="lg:h-1/3 flex justify-between gap-4">
                <div className="w-1/3 aspect-video">
                    <BlogImage src="featured3.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"/>
                </div>                
                {/* details and title */}
                <div className="w-2/3">
                    {/* Details */}
                    <div className="flex items-center gap-4 text-sm lg:text-based mb-4">
                        <h1 className="font-semibold">02.</h1>
                        <Link className="text-blue-800">Web Design</Link>
                        <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    {/* title */}
                    <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>
            {/* fourth */}
            <div className="lg:h-1/3 flex justify-between gap-4">
                <div className="w-1/3 aspect-video">
                    <BlogImage src="featured4.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"/>
                </div>
                {/* details and title */}
                <div className="w-2/3">
                    {/* Details */}
                    <div className="flex items-center gap-4 text-sm lg:text-based mb-4">
                        <h1 className="font-semibold">02.</h1>
                        <Link className="text-blue-800">Web Design</Link>
                        <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    {/* title */}
                    <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

