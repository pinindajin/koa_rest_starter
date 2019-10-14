import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as cors from 'koa2-cors'
import * as bodyparser from 'koa-bodyparser'
import { initRoutes } from './router/router'

const app = new Koa()

app.use(cors)

app.use(bodyparser)

const router = new Router()
initRoutes(router)
app.use(router.routes())

app.listen(3131)

// TODO: Config, Auth, CRUD Routes, Socketio
