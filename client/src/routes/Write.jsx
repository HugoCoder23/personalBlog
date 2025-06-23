import { useUser } from "@clerk/clerk-react";
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";

export const Write = () => {

  const {isLoaded, isSignedIn} = useUser();

  if(!isLoaded){
    return <div className="">Cargando...</div>;
  }
  if(isLoaded && !isSignedIn){
    return <div className="">¡Necesitas iniciar sesión!</div>;
  }


  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Crear nueva publicación</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="self-center w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">Agregar imagen de portada</button>
        <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="Escribe tu historia aquí" />
        <div className="flex items-center gap-2">
          <label htmlFor="" className="text-sm">Escoge una categoría</label>
          <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
            <option value="general">General</option>
            <option value="derecho">Derecho</option>
            <option value="tecnologia">Tecnología</option>
            <option value="politica">Política</option>
          </select>
        </div>
        <textarea className="p-4 rounded-xl bg-white shadow-md" name="desc" placeholder="Una breve descripción"/>
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-md"/>
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">Enviar</button>
      </form>
    </div>
  )
}
