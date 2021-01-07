import { Outlet } from "react-router";
import NavHeader from './nav-header/NavHeader';
import NavFooter from './nav-footer/NavFooter';

function Frame() {
    return (
        <div className="App">
            <NavHeader />
            <Outlet />
            <NavFooter />
        </div>
    );
}

export default Frame;
