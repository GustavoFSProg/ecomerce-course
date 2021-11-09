import { Router } from 'express'

const route = new Router()

route.get('/', (req, res) => {
  res.send({ message: 'Ecomerce API Running ' })
})

export default route
