import { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { missions } from '../data/mockData';
import { MissionCard } from '../components/MissionCard';
import type { MissionStatus } from '../types';

const statusFilters: { value: MissionStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All Missions' },
  { value: 'open', label: 'Open' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
  { value: 'disputed', label: 'Disputed' },
  { value: 'archived', label: 'Archived' },
];

export function MissionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<MissionStatus | 'all'>('all');

  const filteredMissions = missions.filter((mission) => {
    const matchesSearch =
      mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesStatus =
      statusFilter === 'all' || mission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-100">Missions</h1>
            <p className="mt-1 text-slate-400">
              Find work opportunities and submit your offers
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500">
            <Plus className="h-4 w-4" />
            Create Mission
          </button>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search missions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800/50 py-2.5 pl-10 pr-4 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-500" />
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as MissionStatus | 'all')
              }
              className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              {statusFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-6 text-sm text-slate-400">
          Showing {filteredMissions.length} mission
          {filteredMissions.length !== 1 ? 's' : ''}
        </div>

        {/* Mission Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>

        {filteredMissions.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-400">No missions found</p>
            <p className="mt-1 text-sm text-slate-500">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
