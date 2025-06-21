import { Comment } from "./Comment"

export const CommentSection = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-lg text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea placeholder="Escribe un comentario..." className="w-full p-4 rounded-xl"/>
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl ">Enviar</button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

