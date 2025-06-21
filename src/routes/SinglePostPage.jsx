import { BlogImage } from "../components/BlogImage";

export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="">
        <div className=""></div>
        <div className="">
          <BlogImage src="postImg.jpeg"/>
        </div>
      </div>
      {/* content */}
      <div className=""></div>
    </div>
  )
}
