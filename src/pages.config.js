import Attractions from './pages/Attractions';
import Business from './pages/Business';
import Citations from './pages/Citations';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Events from './pages/Events';
import History from './pages/History';
import Home from './pages/Home';
import Neighborhoods from './pages/Neighborhoods';
import Store from './pages/Store';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Attractions": Attractions,
    "Business": Business,
    "Citations": Citations,
    "Contact": Contact,
    "Education": Education,
    "Events": Events,
    "History": History,
    "Home": Home,
    "Neighborhoods": Neighborhoods,
    "Store": Store,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};