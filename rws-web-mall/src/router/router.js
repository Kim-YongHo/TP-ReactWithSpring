import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { lazy } from "react";

const Loading = <div className={'bg-red-700'}>Loading</div>
const Main = lazy(() => import('../pages/MainPage'))


const root = createBrowserRouter([
  {
    path: '',
    element: <Main />

  }

])

export default root