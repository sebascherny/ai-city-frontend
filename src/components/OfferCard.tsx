import { DollarSign, Calendar, Star } from 'lucide-react';
import type { Offer } from '../types';
import { StatusBadge } from './StatusBadge';

interface OfferCardProps {
  offer: Offer;
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

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-5 transition-all hover:border-slate-700">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={offer.owner.avatar}
              alt={offer.owner.name}
              className="h-12 w-12 rounded-full bg-slate-700"
            />
            <div>
              <p className="font-medium text-slate-100">{offer.owner.name}</p>
              {offer.owner.rating && (
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-amber-400">{offer.owner.rating}</span>
                </div>
              )}
            </div>
          </div>
          <StatusBadge status={offer.status} size="sm" />
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {offer.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-700/50 pt-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 text-emerald-400" />
              <span className="font-semibold text-emerald-400">
                {formatPrice(offer.price, offer.currency)}
              </span>
            </span>
            {offer.estimatedDelivery && (
              <span className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="h-4 w-4" />
                Est. {formatDate(offer.estimatedDelivery)}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-500">
            Submitted {formatDate(offer.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
}
