import { Route, Switch } from "wouter"
import Home from "@/pages/user/Home"
import Title from "@/pages/user/Title"
import Read from "@/pages/user/Read"
import Login from "@/pages/user/Login"
import Register from "@/pages/user/Register"
import News from "@/pages/user/News"
import Search from "@/pages/user/Search"
import NotFound from "@/pages/user/NotFound"

function App() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/title/:titleId" component={Title} />
                <Route path="/read/:titleId/:chapterId" component={Read} />
                <Route path="/search" component={Search} />
                <Route path="/news" component={News} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default App
