import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Home, Wallet } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      isActive(path)
        ? 'bg-indigo-500/20 text-indigo-400'
        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI City
            </span>
          </Link>

          <nav className="flex items-center gap-2">
            <Link to="/" className={linkClass('/')}>
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link to="/missions" className={linkClass('/missions')}>
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Missions</span>
            </Link>
          </nav>

          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </button>
        </div>
      </div>
    </header>
  );
}
