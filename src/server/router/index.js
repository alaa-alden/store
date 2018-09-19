import {
  ReactApp
} from './get'
function initRoutes(app) {
  app.get('*', ReactApp)
}

export default initRoutes
