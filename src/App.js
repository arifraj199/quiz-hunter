import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import PageError from './components/PageError/PageError';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'topics',
          element:<Topics></Topics>
        },
        {
          path:'statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path:'*',
      element:<PageError></PageError>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
