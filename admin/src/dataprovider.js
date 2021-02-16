import { fetchUtils } from 'react-admin'
import { stringify } from 'query-string'

const apiUrl = 'http://localhost:3000/v1'
const httpClient = fetchUtils.fetchJson

export const getFriends = (userId) => httpClient(`${apiUrl}/users/${userId}/friends`).then(({ json }) => {
  console.log('FRIENDS JSON: ', json.friendsList)

  return json.friendsList
})

export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination
    const url = `${apiUrl}/${resource}/list/${page - 1}/${perPage}`

    return httpClient(url).then(({ json }) => {
      const { userList: data, total } = json

      return {
        data,
        total
      }
    })
  },

  getOne: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`).then(async ({ json }) => {
    const friends = await getFriends(params.id)

    console.log({
      ...json,
      friends
    })

    return {
      data: {
        ...json,
        friends
      }
    }
  }),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`
    return httpClient(url).then(({ json }) => ({ data: json }))
  },

  getFriends: (params) => {
    const query = {
      filter: JSON.stringify({ id: params.id })
    }
    const url = `${apiUrl}/users?${stringify(query)}/friends`

    return httpClient(url).then(({ json }) => ({ data: json }))
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10)
    }))
  }
}
