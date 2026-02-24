import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { missions } from '../data/mockData';
import { MissionCard } from '../components/MissionCard';

export function HomePage() {
  const featuredMissions = missions.filter(m => m.status === 'open').slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
              <span className="block">Decentralized</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Work Marketplace
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Post missions, receive offers, and complete work with trustless escrow payments.
              Built for the decentralized future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                to="/missions"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40"
              >
                Browse Missions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-slate-100 transition-all hover:bg-slate-800 hover:border-slate-600">
                Post a Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
                <Shield className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">Secure Escrow</h3>
              <p className="mt-2 text-sm text-slate-400">
                Funds are held in smart contract escrow until work is completed and approved.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">Instant Payments</h3>
              <p className="mt-2 text-sm text-slate-400">
                Get paid instantly in crypto when your work is accepted. No waiting periods.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                <Users className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">Global Talent</h3>
              <p className="mt-2 text-sm text-slate-400">
                Access skilled professionals from around the world, all verified on-chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Missions */}
      <section className="py-16 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Featured Missions</h2>
              <p className="mt-1 text-sm text-slate-400">Latest opportunities waiting for talent</p>
            </div>
            <Link
              to="/missions"
              className="flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredMissions.map((mission) => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-100">$2.5M+</div>
              <div className="mt-1 text-sm text-slate-400">Total Paid Out</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-100">1,200+</div>
              <div className="mt-1 text-sm text-slate-400">Missions Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-100">850+</div>
              <div className="mt-1 text-sm text-slate-400">Active Workers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-100">98%</div>
              <div className="mt-1 text-sm text-slate-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
