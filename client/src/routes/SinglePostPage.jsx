import { Link } from "react-router-dom";
import { BlogImage } from "../components/BlogImage";
import { PostMenuAction } from "../components/PostMenuActions";
import { Search } from "../components/Search";
import { CommentSection } from "../components/CommentSection";

export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quas dolorem dicta</h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Escrito por</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
            <p className="text-gray-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Adipisci, aperiam! Veritatis, quis. Aperiam aspernatur cum vel nulla 
              optio ea voluptates velit rem expedita, quo, ratione tempora 
              explicabo exercitationem, incidunt repellat.
            </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <BlogImage src="postImg.jpeg" w="600" className="rounded-2xl"/>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ratione, blanditiis repellendus enim voluptate magni odit quasi vero, adipisci officiis doloremque ut? Exercitationem voluptatum commodi minus nesciunt fugiat eius neque.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quae itaque sed magni fuga quo sit consectetur 
            totam quibusdam, ad, adipisci  incidunt rem ipsam ut? Aspernatur 
            consequatur officiis accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt sit, ex modi numquam totam quas quisquam earum voluptates nostrum accusantium fugit odio recusandae delectus iure, quo inventore quos quidem?
          </p>                                                            
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <BlogImage src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48"/>
              <Link className="text-blue-800">John Doe</Link>
            </div>
              <p className="text-sm text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <div className="flex gap-2">
                <Link>
                  <BlogImage src="facebook.svg"/>
                </Link>
                <Link>
                  <BlogImage src="instagram.svg"/>
                </Link>
              </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">All</Link>
        <Link className="underline" to="/posts">General</Link>
        <Link className="underline" to="/posts">Derecho</Link>
        <Link className="underline" to="/posts">Política</Link>
        <Link className="underline" to="/posts">Tecnología</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Buscar</h1>
          <Search />
        </div>
      </div>
      <CommentSection />
    </div>
  )
}
