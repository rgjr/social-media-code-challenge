import * as React from 'react'
import { Admin, Resource } from 'react-admin'
// import jsonServerProvider from 'ra-data-json-server'
import dataProvider from './dataprovider'
import { UserList, UserShow } from './Users'

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={UserList} show={UserShow} />
  </Admin>
)

export default App
