import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Header from "./components/Header";
import Filters from "./components/Filters";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <BookList />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
