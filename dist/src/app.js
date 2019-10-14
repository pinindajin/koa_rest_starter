"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const bodyparser = require("koa-bodyparser");
const router_1 = require("./router/router");
const app = new Koa();
app.use(cors);
app.use(bodyparser);
const router = new Router();
router_1.initRoutes(router);
app.use(router.routes());
app.listen(3131);
// TODO: Config, Auth, CRUD Routes, Socketio
//# sourceMappingURL=app.js.map