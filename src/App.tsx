import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, MissionsPage, MissionDetailPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/missions/:id" element={<MissionDetailPage />} />
          </Routes>
        </main>
        <footer className="border-t border-slate-800 py-8 mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
            <p>© 2026 AI City. Built for the decentralized future.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
