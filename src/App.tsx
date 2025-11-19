import { BrowserRouter, Route, Routes } from "react-router-dom";
import PixelArt from "./pages/PixelArt.tsx";
import Background from "./components/Background.tsx";
import About from "./pages/About.tsx";
import Programming from "./pages/Programming.tsx";
import Contact from "./pages/Contact.tsx";
import PageLayout from "./components/PageLayout.tsx";
import type React from "react";

function App() {
	function formatPage(component: React.ReactNode) {
		return <PageLayout>{component}</PageLayout>;
	}

	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Routes>
				<Route index element={formatPage(<About/>)}></Route>
				{/* <Route path="/about" element={formatPage(<About />)}></Route> */}
				<Route path="/programming" element={formatPage(<Programming />)}></Route>
				{/* <Route path="/av-tech" element={formatPage(<AvTech />)}></Route> */}
				{/* <Route path="/origami" element={formatPage(<Origami />)}></Route> */}
				<Route path="/pixel-art" element={formatPage(<PixelArt />)}></Route>
				<Route path="/contact" element={formatPage(<Contact />)}></Route>
			</Routes>
			<Background></Background>
		</BrowserRouter>
	);
}

export default App;
