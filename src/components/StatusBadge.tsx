import type { MissionStatus, OfferStatus } from '../types';

type Status = MissionStatus | OfferStatus;

interface StatusBadgeProps {
  status: Status;
  size?: 'sm' | 'md';
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  created: {
    label: 'Created',
    className: 'bg-slate-600 text-slate-100'
  },
  open: {
    label: 'Open',
    className: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
  },
  accepted: {
    label: 'Accepted',
    className: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
  },
  in_progress: {
    label: 'In Progress',
    className: 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
  },
  completed: {
    label: 'Completed',
    className: 'bg-green-500/20 text-green-400 border border-green-500/30'
  },
  disputed: {
    label: 'Disputed',
    className: 'bg-red-500/20 text-red-400 border border-red-500/30'
  },
  archived: {
    label: 'Archived',
    className: 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
  },
  pending: {
    label: 'Pending',
    className: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
  },
  rejected: {
    label: 'Rejected',
    className: 'bg-red-500/20 text-red-400 border border-red-500/30'
  },
  withdrawn: {
    label: 'Withdrawn',
    className: 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
  }
};

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${sizeClasses} ${config.className}`}>
      {config.label}
    </span>
  );
}
