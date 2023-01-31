import { Navigate, Outlet , useLocation } from 'react-router-dom'
const PrivateRoutes = () => {
  const location =useLocation()  
  let auth =localStorage.userCode &&(localStorage.userCode==1 || localStorage.userCode==2 || localStorage.userCode==3);
return (
    auth ? <Outlet/> : <Navigate to='/login' state={{path:location.pathname}} />
  )
}

export default PrivateRoutes;