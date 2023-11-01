import { Route } from 'react-router-dom'
import { lazy } from 'react'

const routes = [
    {
        path: "",
        element: lazy(() => import("../Template")),
        nested: [
            {
                path: "",
                element: lazy(() => import('../pages/About'))
            },
            {
                path: "contact",
                element: lazy(() => import('../pages/Contact'))
            },
            {
                path: "skills",
                element: lazy(() => import('../pages/Skills'))
            },
            {
                path: "works",
                element: lazy(() => import('../pages/Works'))
            },
        ]
    },

]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}
export default renderRoutes;