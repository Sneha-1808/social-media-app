// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom';
// import { KEY_ACCESS_TOKEN , getItem} from '../utils/localStorageManager'

// function RequireUser() {
//     const user = getItem(KEY_ACCESS_TOKEN);

//   return (
//     user? <Outlet/>:<Navigate to='/login'/>
//   )
// }

// export default RequireUser

import React from 'react'
import { Navigate, Outlet } from 'react-router';
import Login from '../pages/login/Login';
import { getItem, KEY_ACCESS_TOKEN } from '../utils/localStorageManager'

function RequireUser() {
    const user = getItem(KEY_ACCESS_TOKEN);
  return (
    user ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default RequireUser