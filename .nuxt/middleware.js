const middleware = {}

middleware['layoutMiddleware'] = require('../middleware/layoutMiddleware.js')
middleware['layoutMiddleware'] = middleware['layoutMiddleware'].default || middleware['layoutMiddleware']

export default middleware
