import React from 'react';

import classes from './Navigation.module.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
      <div>
         
          <div className={classes.sidenav}>
             <Link to="/Getting-Items-List/posts">Posts</Link>
             <Link to="/Getting-Items-List/comments">Comments</Link>
             <Link to="/Getting-Items-List/albums">Albums</Link>
             <Link to="/Getting-Items-List/photos">Photos</Link>
             <Link to="/Getting-Items-List/todos">Todos</Link>
             <Link to="/Getting-Items-List/users">Users</Link>
          </div>
         <div className={classes.main}>
            <h2 style={{textAlign: 'center'}}>Click on the sideNav buttons (Posts, Comments etc) and you will get an array of posts, comments etc</h2>
         </div>

      </div>
    
  )
}

export default Navigation