import FilterBar from "./components/FilterBar";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import MovieSlider from "./components/MovieSlider"
import Footer from "./components/Footer";
import StarRating from "./components/StarRating";
import Register from "./components/Register";
import Login from "./components/Login";

const footerLinks = [
    {
        title: 'neoflemaTV',
        links: [
            {name: 'Documentation'},
            {name: 'FAQ'},
            {name: 'Application'},
            {name: 'Get in Touch'}
        ]
    },
    {
        title: 'How to Reach Us?',
        links: [
            {name: 'neoflematv@email.com',logo: '/mail-icon.svg'},
            {name: '+1 508-203-9070',logo:'/phone-icon.svg'}
        ]
    },
    {
        title: 'social media',
        links: [
            {logo: '/instagram.svg'},
            {logo: '/facebook.svg'},
            {logo: 'twitter.svg'},
            {logo: 'tv.svg'}
        ]
    }
]
export {
    FilterBar,
    MovieList,
    Navbar,
    MovieSlider,
    Footer,
    footerLinks,
    StarRating,
    Register,
    Login
}