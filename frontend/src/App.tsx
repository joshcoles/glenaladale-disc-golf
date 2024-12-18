import './index.css';
import './output.css';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import MembershipsPage from './pages/MembershipsPage';
import GalleryPage from './pages/GalleryPage';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/faq" element={<FAQPage />} />
			<Route path="/memberships" element={<MembershipsPage />} />
			<Route path="/gallery" element={<GalleryPage />} />
			<Route path="/reviews" element={<ReviewsPage />} />
			<Route path="/contact" element={<ContactPage />} />
		</Route>,
	),
);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
