import { Link } from 'react-router-dom';
import { DollarSign, MessageSquare, Clock } from 'lucide-react';
import type { Mission } from '../types';
import { StatusBadge } from './StatusBadge';

interface MissionCardProps {
  mission: Mission;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatPrice(price: number, currency: string): string {
  return `${price.toLocaleString()} ${currency}`;
}

export function MissionCard({ mission }: MissionCardProps) {
  return (
    <Link
      to={`/missions/${mission.id}`}
      className="group block rounded-xl border border-slate-800 bg-slate-800/50 p-6 transition-all hover:border-indigo-500/50 hover:bg-slate-800"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={mission.owner.avatar}
              alt={mission.owner.name}
              className="h-10 w-10 rounded-full bg-slate-700"
            />
            <div>
              <p className="text-sm font-medium text-slate-300">{mission.owner.name}</p>
              <p className="text-xs text-slate-500">Posted {formatDate(mission.createdAt)}</p>
            </div>
          </div>
          <StatusBadge status={mission.status} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
            {mission.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400 line-clamp-2">
            {mission.description}
          </p>
        </div>

        {mission.tags && mission.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {mission.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-700/50 px-2 py-1 text-xs font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 text-emerald-400" />
              <span className="font-semibold text-emerald-400">
                {formatPrice(mission.price, mission.currency)}
              </span>
            </span>
            {mission.deadline && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {formatDate(mission.deadline)}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1.5 text-sm text-slate-400">
            <MessageSquare className="h-4 w-4" />
            {mission.offersCount} offers
          </span>
        </div>
      </div>
    </Link>
  );
}
