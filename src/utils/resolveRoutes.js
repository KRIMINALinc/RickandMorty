
const resolveRoutes = (route) => {
    if (route != 'about'){
        if (route === '/'){
            return route
        }else if (route.length <= 3){
            return '/:id'
        }else if (route.includes('page')){
            return '/:pages'
        }
    }
    console.log('se fue por route: ' + route)
    return `/${route}`;
}

export default resolveRoutes