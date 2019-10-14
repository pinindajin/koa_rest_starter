import * as Router from '@koa/router'

export const initRoutes = (router: Router) => {
    router.get('healthcheck', (ctx, next) => {
        ctx.response.status = 200
    })
} 
