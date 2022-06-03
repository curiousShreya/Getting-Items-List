import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './containers/Header/Header';
import CommentsDetails from './containers/Comments/CommentsDetails';
import CommentsList from './containers/Comments/CommentsList';
import PostsDetails from './containers/Posts/PostsDetails';
import PostsList from './containers/Posts/PostsList';
import AlbumsDetails from './containers/Albums/AlbumsDetails';
import AlbumsList from './containers/Albums/AlbumsList';
import PhotosDetails from './containers/Photos/PhotosDetails';
import PhotosList from './containers/Photos/PhotosList';
import TodosDetails from './containers/Todos/TodosDetails';
import TodosList from './containers/Todos/TodosList';
import UsersDetails from './containers/Users/UsersDetails';
import UsersList from './containers/Users/UsersList';
import Navigation from './containers/Navigation/Navigation';

function App() {
  return (
    <div>
        <Router>
           <Header />
           <Routes>
             <Route path='/Getting-Items-List' exact element={<Navigation />} />
             <Route path='/Getting-Items-List/posts' exact element={<PostsList />} />
             <Route path='/Getting-Items-List/posts/:postsId' exact element={<PostsDetails />} />
             <Route path='/Getting-Items-List/comments' exact element={<CommentsList />} />
             <Route path='/Getting-Items-List/comments/:commentsId' exact element={<CommentsDetails />} />
             <Route path='/Getting-Items-List/albums' exact element={<AlbumsList />} />
             <Route path='/Getting-Items-List/albums/:albumsId' exact element={<AlbumsDetails />} />
             <Route path='/Getting-Items-List/photos' exact element={<PhotosList />} />
             <Route path='/Getting-Items-List/photos/:photosId' exact element={<PhotosDetails />} />
             <Route path='/Getting-Items-List/todos' exact element={<TodosList />} />
             <Route path='/Getting-Items-List/todos/:todosId' exact element={<TodosDetails />} />
             <Route path='/Getting-Items-List/users' exact element={<UsersList />} />
             <Route path='/Getting-Items-List/users/:usersId' exact element={<UsersDetails />} /> 
             <Route>404 Not Found</Route>
           </Routes>
        </Router>
         
      
      
    </div>
  );
}

export default App;
