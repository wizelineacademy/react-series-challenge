import HomeView from './components/HomeView';
import FavsView from './components/FavsView';

const ROUTES = [
    {
        path: '/home',
        exact: true,
        content: 'Home',
        component: HomeView
    },
    {
        path: '/favs',
        content: 'Favorites',
        component: FavsView
    }
];

export default ROUTES;