import Home from './pages/Home';
import History from './pages/History';
import Attractions from './pages/Attractions';
import Events from './pages/Events';
import Neighborhoods from './pages/Neighborhoods';
import Business from './pages/Business';
import Education from './pages/Education';
import Gallery from './pages/Gallery';
import Store from './pages/Store';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "History": History,
    "Attractions": Attractions,
    "Events": Events,
    "Neighborhoods": Neighborhoods,
    "Business": Business,
    "Education": Education,
    "Gallery": Gallery,
    "Store": Store,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};