import Trending from './components/Trending'
import Home from './components/Home'
import Favorites from './components/Favorites'
 

export default [
    {
        route: '/',
        name: 'home',
        exact: true,
        component: Home
    },
    {
        route: '/trending',
        name: 'trending',
        exact: false,
        component: Trending
    },
    {
        route: '/favorites',
        name: 'favorites',
        exact: false,
        component: Favorites
    }
]