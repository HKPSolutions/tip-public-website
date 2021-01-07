import Frame from './frame/Frame'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Faq from './pages/faq/Faq'
import About from './pages/about/About'

export const routes = [
    {
        path: '*',
        element: <Frame />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/signup', element: <Signup /> },
            { path: '/faq', element: <Faq /> },
            { path: '/about', element: <About /> },
        ]
    }
]