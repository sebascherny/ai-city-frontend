import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, Calendar, Clock, Users, ExternalLink } from 'lucide-react';
import { getMissionById, getOffersByMissionId } from '../data/mockData';
import { StatusBadge } from '../components/StatusBadge';
import { OfferCard } from '../components/OfferCard';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatPrice(price: number, currency: string): string {
  return `${price.toLocaleString()} ${currency}`;
}

export function MissionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const mission = getMissionById(id || '');
  const offers = getOffersByMissionId(id || '');

  if (!mission) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-100">Mission not found</h2>
        <p className="mt-2 text-slate-400">
          The mission you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/missions"
          className="mt-6 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Missions
        </Link>
      </div>
    );
  }

  const pendingOffers = offers.filter((o) => o.status === 'pending');
  const acceptedOffer = offers.find((o) => o.status === 'accepted');
  const otherOffers = offers.filter((o) => o.status !== 'pending' && o.status !== 'accepted');

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/missions"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Missions
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Mission Header */}
            <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-6">
              <div className="flex items-start justify-between gap-4">
                <StatusBadge status={mission.status} />
                <span className="text-sm text-slate-500">
                  ID: {mission.id}
                </span>
              </div>

              <h1 className="mt-4 text-2xl font-bold text-slate-100">
                {mission.title}
              </h1>

              <div className="mt-4 flex items-center gap-4">
                <img
                  src={mission.owner.avatar}
                  alt={mission.owner.name}
                  className="h-10 w-10 rounded-full bg-slate-700"
                />
                <div>
                  <p className="font-medium text-slate-100">{mission.owner.name}</p>
                  <p className="text-sm text-slate-500">Mission Owner</p>
                </div>
              </div>

              <div className="mt-6 prose prose-invert max-w-none">
                <h3 className="text-lg font-semibold text-slate-100">Description</h3>
                <p className="mt-2 text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {mission.description}
                </p>
              </div>

              {mission.tags && mission.tags.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-slate-400">Skills Required</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {mission.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-700/50 px-3 py-1 text-sm font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Offers Section */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-100">
                  Offers ({offers.length})
                </h2>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users className="h-4 w-4" />
                  {pendingOffers.length} pending
                </div>
              </div>

              {/* Accepted Offer */}
              {acceptedOffer && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-emerald-400 mb-3">
                    ✓ Accepted Offer
                  </h3>
                  <OfferCard offer={acceptedOffer} />
                </div>
              )}

              {/* Pending Offers */}
              {pendingOffers.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-slate-400 mb-3">
                    Pending Offers
                  </h3>
                  <div className="space-y-4">
                    {pendingOffers.map((offer) => (
                      <OfferCard key={offer.id} offer={offer} />
                    ))}
                  </div>
                </div>
              )}

              {/* Other Offers */}
              {otherOffers.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-slate-500 mb-3">
                    Previous Offers
                  </h3>
                  <div className="space-y-4">
                    {otherOffers.map((offer) => (
                      <OfferCard key={offer.id} offer={offer} />
                    ))}
                  </div>
                </div>
              )}

              {offers.length === 0 && (
                <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-8 text-center">
                  <p className="text-slate-400">No offers yet</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Be the first to submit an offer for this mission
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-6">
                <div className="text-sm text-slate-400">Budget</div>
                <div className="mt-1 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-emerald-400" />
                  <span className="text-3xl font-bold text-emerald-400">
                    {formatPrice(mission.price, mission.currency)}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Calendar className="h-4 w-4" />
                      Posted
                    </span>
                    <span className="text-slate-100">
                      {formatDate(mission.createdAt)}
                    </span>
                  </div>
                  {mission.deadline && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-400">
                        <Clock className="h-4 w-4" />
                        Deadline
                      </span>
                      <span className="text-slate-100">
                        {formatDate(mission.deadline)}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Users className="h-4 w-4" />
                      Offers
                    </span>
                    <span className="text-slate-100">{mission.offersCount}</span>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500">
                  Submit an Offer
                </button>
              </div>

              {/* Actions Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-6">
                <h3 className="font-semibold text-slate-100">Quick Actions</h3>
                <div className="mt-4 space-y-2">
                  <button className="flex w-full items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-slate-700">
                    <ExternalLink className="h-4 w-4" />
                    Share Mission
                  </button>
                  <button className="flex w-full items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-slate-700">
                    Report Issue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
