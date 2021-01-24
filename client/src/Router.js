import HelloWorld from "./components/HelloWorld"
import Chat from "./components/Chat"
import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path : "/",
        component : HelloWorld
    },
    {
        path : "/chat",
        component : Chat
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;
