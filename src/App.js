import "./styles.css";
import Head from "./component/Head/Head";
import Body from "./component/Body/Body";
import Footer from "./component/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./component/Body/VideoContainer/VideoContainer.js";
import Watchpage from "./component/Body/Watchpage/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="App">
      <Head />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}
