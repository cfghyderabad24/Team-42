import './App.css';
import Rootlayout from './Components/Rootlayout';
import Home from './Components/Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Tactile from './Components/Tactile';
import Contact from './Components/Contact';
import School from './Components/School';
import About from './Components/About';
function App() {

let BrowserRouter=createBrowserRouter([
  {
    path:'',
    element:<Rootlayout/>,
    children:[
    {
      path:'',
      element:<Home/>
    },
    {
      path:'/signin',
      element:<Signin/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/tactile',
      element:<Tactile/>
    }
    ,{
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/school',
      element:<School/>
    },
    {
      path:'/about',
      element:<About/>
    }
  
  ]
  }

])

  return (
    <div className="App">
      <RouterProvider router={BrowserRouter}/>
    </div>
  );
}

export default App;
