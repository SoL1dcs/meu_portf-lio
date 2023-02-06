import NavBar from './components/NavBar/NavBar';
import GitHub from './components/GitHub/GitHub';
import Contatos from './components/Contatos/Contatos';
import Curriculo from './components/Curriculo/Curriculo';
import Sobre from './components/sobre/Sobre'
import Conhecimentos from './components/Conhecimentos/Conhecimentos.jsx'
import Blog from './components/Blog/Blog'



import { createBrowserRouter , RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children:[
      {
        path: "/gitHub",
        element:<GitHub />
      },
      {
        path:"/contatos",
        element:<Contatos />
      },
      {
        path:"/Curriculo",
        element:<Curriculo />
      },
      {
        path:"/Sobre",
        element:<Sobre />
      },
      {
        path:"/Conhecimentos",
        element:<Conhecimentos />
      },
      {
        path:"/Blog",
        element:<Blog />
      }
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
/* 
*/

export default App
