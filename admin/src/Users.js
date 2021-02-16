import * as React from 'react'
import {
  List, Datagrid, Show, SimpleShowLayout, TextField
} from 'react-admin'
// import { getFriends } from './dataprovider'

export const UserList = (props) => (
  <List {...props} redirect='show'>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='first_name' />
      <TextField source='last_name' />
    </Datagrid>
  </List>
)

// const UserFriends = async (props) => {
//   console.log(props)
//   const { id } = props?.record || 0
//   const friends = await getFriends(id).then((response) => {
//     console.log('FRIENDS: ', response)

//     return (
//       <List>
//         <Datagrid rowClick='show'>
//           {response.map((friend, index) => (
//             <div key={index}>
//               <TextField source='id' />
//               <TextField source='first_name' />
//               <TextField source='last_name' />
//             </div>))}

//         </Datagrid>
//       </List>
//     )
//   })

//   return friends
// }

export const UserShow = (props) => {
  console.log('PROPS: ', props)

  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
          <TextField source='id' />
          <TextField source='first_name' />
          <TextField source='last_name' />
          {/* <UserFriends source='id' /> */}
        </SimpleShowLayout>
      </Show>
    </div>
  )
}

export default UserList
