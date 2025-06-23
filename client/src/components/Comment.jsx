import { BlogImage } from "./BlogImage"

export const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <BlogImage src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Illum ea rem officia incidunt iusto, voluptates doloribus 
          iste repellat praesentium, 
          quibusdam, quasi sed error. Quae necessitatibus aut earum 
          hic quidem accusantium.
        </p>
      </div>
    </div>
  )
}
