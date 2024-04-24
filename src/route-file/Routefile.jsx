import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateroutes ,publiceroutes } from './RoutesConfig'
import Pagenotfound from '../pages/pagenotfound/Pagenotfound'
import Publiceroutes from '../routes/publicroute/Publicroute.js'
import Praviteroute from '../routes/praviteroute/Privateroute.js'

const Routefile = () => {
  return (
    <div>
      
      <Routes>
        {privateroutes.map(({ name, component, allowedRoles }, i) => (
          <Route element={<Praviteroute/>}>
            <Route key={i} path={name} element={component} />
          </Route>
        ))}
        {publiceroutes.map(({ name, component, isRestricted }, i) => (
          <Route element={<Publiceroutes isRestricted={isRestricted} />}>
            <Route key={i} path={name} element={component} />
          </Route>
        ))}

        <Route path={'/*'} element={<Pagenotfound />} /> 
      </Routes>
    </div>
  )
}

export default Routefile
