import { Router } from 'express'

const route = new Router()

route.get('/', (req, res) => {
  res.send({ message: `Ecomerce API Running on PORT: ${PORT}` })
})

export default route
