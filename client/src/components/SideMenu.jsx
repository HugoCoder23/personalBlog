import { Link } from 'react-router-dom'
import { Search } from './Search'

export const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className='mb-4 text-sm font-medium'>Buscar</h1>
      <Search />
      <h1 className='mt-8 mb-4 text-sm font-medium'>Filtrar</h1>
      <div className='flex flex-col gap-2 text-sm'>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
          <input type="radio" name='sort' value="masNuevo" className='bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800'/>
          Más nuevo
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
          <input type="radio" name='sort' value="popular" className='bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800'/>
          Popular
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
          <input type="radio" name='sort' value="masAntiguo" className='bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800'/>
          Más antiguos
        </label>

      </div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Categorías</h1>
      <div className='flex flex-col gap-2 text-sm'>
        <Link className="underline" to="/posts?cat=all">Todo</Link>
        <Link className="underline" to="/posts?cat=general">General</Link>
        <Link className="underline" to="/posts?cat=derecho">Derecho</Link>
        <Link className="underline" to="/posts?cat=politica">Política</Link>
        <Link className="underline" to="/posts?cat=tecnologia">Tecnología</Link>
      </div>
    </div>
  )
}
