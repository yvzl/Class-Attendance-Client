export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to, from)
    return navigateTo('/login')
})