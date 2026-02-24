export type MissionStatus = 
  | 'created' 
  | 'open' 
  | 'accepted' 
  | 'in_progress' 
  | 'completed' 
  | 'disputed' 
  | 'archived';

export type OfferStatus = 
  | 'pending' 
  | 'accepted' 
  | 'rejected' 
  | 'withdrawn';

export interface Mission {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  status: MissionStatus;
  createdAt: string;
  deadline?: string;
  owner: {
    id: string;
    name: string;
    avatar?: string;
  };
  tags?: string[];
  offersCount: number;
}

export interface Offer {
  id: string;
  missionId: string;
  owner: {
    id: string;
    name: string;
    avatar?: string;
    rating?: number;
  };
  description: string;
  price: number;
  currency: string;
  status: OfferStatus;
  createdAt: string;
  estimatedDelivery?: string;
}
