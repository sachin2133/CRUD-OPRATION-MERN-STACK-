
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import GetUser from './Component/getuser/GetUser';
import AddUser from './Component/Adduser/AddUser';
import UpdateUser from './Component/UpdateUser';

function App() {

  const route=createBrowserRouter([
    {
      path:"/",
      element:<GetUser/>
    },
    {
      path:"/Add",
      element:<AddUser/>
    },
    {
      path:"/updateuser/:id",
      element:<UpdateUser/>
    },
    {
      path:"/",
      element:""
    },
  ])
  return (
   <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
