import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllTodo from './components/ViewAllTodo';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewAllTodo />} />
          <Route path="/add-todo" element={<AddTodo />} />
          <Route path="/search-todo" element={<SearchTodo />} />
          <Route path="/delete-todo" element={<DeleteTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
