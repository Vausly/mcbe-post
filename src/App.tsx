import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { routes } from './routes/routes'; 

function App() {
  return (
    <HelmetProvider> 
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="pt-20 flex-grow">
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
