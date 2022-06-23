/**
 * 路由配置文件
 */
import {createRouter, createWebHashHistory} from "vue-router";

import home from "../views/home.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";


//创建路由对象，并指定配置信息
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: {
                name: "movie"
            }
        },
        {
            path: "/home",
            component: home,
            name: "home",
            children: [
                {
                    // path: "/home/movie",
                    path: "movie",
                    component: () => import("../views/movie.vue"),
                    name: "movie",
                }, {
                    path: "hall",
                    component: () => import("../views/hall.vue"),
                    name: "hall",
                }, {
                    path: "plan",
                    component: () => import("../views/plan.vue"),
                    name: "plan"
                }, {
                    path: "my",
                    component: () => import("../views/my.vue"),
                    name: "my"
                }
            ]
        }, {
            path: "/login",
            component: login,
            name: "login"
        }, {
            path: "/register",
            component: register,
            name: "register"
        }, {
            path: "/test",
            component: () => import("../views/test.vue"),
            name: "test"
        }, {
            path: "/movieDetail",
            component: () => import("../views/movieDetail.vue"),
            name: "movieDetail"
        }, {
            path: "/planInfoList",
            component: () => import("../views/planInfoList.vue"),
            name: "planInfoList"
        }, {
            path: "/chooseSite",
            component: () => import("../views/chooseSite.vue"),
            name: "chooseSite"
        },{
            path:"/search",
            component:()=>import("../views/search.vue"),
            name:"search"
        }
    ]
});


// 二级路由加斜线 ，二级路径直接写


export default router;