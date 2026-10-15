import React from 'react'
import { NavLink, Outlet } from 'react-router'

function AppLayout() {
  const[isAppReady, updateAppStatus] = React.useState(false)
 
  setTimeout(() => {
    updateAppStatus(true)
  }, 3*1000)
 
  if(!isAppReady) {
    return (<div>
        page is loading
    </div>)
  }
  
    return (
    <div>
        <header>HEADER</header>
        <nav>
            <ul>
                <li><NavLink to={"/"}>Dashboard</NavLink></li>
                <li><NavLink to={"/student"}>student</NavLink></li>
                <li><NavLink to={"/teacher"}>teacher</NavLink></li>
                <li><NavLink to={"/staff"}>staff</NavLink></li>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>FOOTER</footer>
    </div>
  )
}

export default AppLayout