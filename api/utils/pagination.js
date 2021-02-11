const pagination = (page, size) => {
  // Number of users to return, defaults to 5
  const limit = size ? Number(size) : 5

  // Page number to return via offset, defaults to 0
  const offset = page ? Number(page) * limit : 0

  return { offset, limit }
}

export default pagination
