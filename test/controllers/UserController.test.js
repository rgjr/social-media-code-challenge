import 'core-js/stable'
import 'regenerator-runtime/runtime'
import UserMock from '../index'

test('Checks if User data comes through correctly', async () => {
  const result = await UserMock
    .findOne('1').then((user) => user)

  // check user values
  expect(result.first_name).toBe('Tony')
  expect(result.last_name).toBe('Montana')
})

test('Checks that User table has data', async () => {
  const result = await UserMock.findAndCountAll().then((count) => count)

  // check user values
  expect(result).toBeTruthy()
})
