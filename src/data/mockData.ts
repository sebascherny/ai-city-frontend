import type { Mission, Offer } from '../types';

export const missions: Mission[] = [
  {
    id: '1',
    title: 'Build a REST API for E-commerce Platform',
    description: 'Need a senior developer to build a scalable REST API using Node.js and PostgreSQL. The API should handle user authentication, product management, orders, and payments integration with Stripe. Must include comprehensive documentation and unit tests.',
    price: 2500,
    currency: 'USDC',
    status: 'open',
    createdAt: '2026-02-20T10:00:00Z',
    deadline: '2026-03-15T23:59:59Z',
    owner: {
      id: 'user1',
      name: 'TechStartup.eth',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=user1'
    },
    tags: ['Node.js', 'PostgreSQL', 'API', 'Backend'],
    offersCount: 5
  },
  {
    id: '2',
    title: 'Smart Contract Audit for DeFi Protocol',
    description: 'Looking for an experienced auditor to review our DeFi lending protocol smart contracts. Contracts are written in Solidity and deployed on Ethereum mainnet. Need comprehensive security analysis and vulnerability report.',
    price: 8000,
    currency: 'USDC',
    status: 'in_progress',
    createdAt: '2026-02-18T14:30:00Z',
    deadline: '2026-03-01T23:59:59Z',
    owner: {
      id: 'user2',
      name: 'DefiLabs.eth',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=user2'
    },
    tags: ['Solidity', 'Security', 'Audit', 'DeFi'],
    offersCount: 3
  },
  {
    id: '3',
    title: 'UI/UX Design for Mobile Wallet App',
    description: 'Need a talented designer to create modern UI/UX for our crypto wallet mobile app. Design should include onboarding flow, dashboard, send/receive screens, transaction history, and settings. Deliverables in Figma.',
    price: 1800,
    currency: 'USDC',
    status: 'created',
    createdAt: '2026-02-22T09:15:00Z',
    owner: {
      id: 'user3',
      name: 'WalletDAO',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=user3'
    },
    tags: ['Design', 'UI/UX', 'Mobile', 'Figma'],
    offersCount: 8
  },
  {
    id: '4',
    title: 'Technical Documentation for SDK',
    description: 'Write comprehensive technical documentation for our JavaScript SDK. Should include getting started guide, API reference, code examples, and troubleshooting section. Experience with developer documentation required.',
    price: 600,
    currency: 'USDC',
    status: 'completed',
    createdAt: '2026-02-10T11:00:00Z',
    deadline: '2026-02-20T23:59:59Z',
    owner: {
      id: 'user4',
      name: 'DevTools.io',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=user4'
    },
    tags: ['Documentation', 'JavaScript', 'SDK'],
    offersCount: 2
  },
  {
    id: '5',
    title: 'Build Discord Bot for NFT Community',
    description: 'Create a Discord bot that tracks NFT sales, floor prices, and provides wallet verification for role assignment. Should integrate with OpenSea and Ethereum. Bot must be reliable and well-documented.',
    price: 1200,
    currency: 'USDC',
    status: 'disputed',
    createdAt: '2026-02-15T16:45:00Z',
    deadline: '2026-02-28T23:59:59Z',
    owner: {
      id: 'user5',
      name: 'NFTCollective',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=user5'
    },
    tags: ['Discord', 'Bot', 'NFT', 'Web3'],
    offersCount: 4
  },
  {
    id: '6',
    title: 'Data Analytics Dashboard',
    description: 'Build a real-time analytics dashboard for tracking on-chain metrics. Should display TVL, volume, user activity, and custom metrics. Use React and integrate with The Graph for data.',
    price: 3500,
    currency: 'USDC',
    status: 'accepted',
    createdAt: '2026-02-19T08:00:00Z',
    deadline: '2026-03-10T23:59:59Z',
    owner: {
      id: 'user6',
      name: 'AnalyticsDAO',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=user6'
    },
    tags: ['React', 'Analytics', 'Dashboard', 'TheGraph'],
    offersCount: 6
  },
  {
    id: '7',
    title: 'Translate Whitepaper to Spanish',
    description: 'Professional translation of our 30-page technical whitepaper from English to Spanish. Must maintain technical accuracy and be familiar with blockchain terminology.',
    price: 400,
    currency: 'USDC',
    status: 'archived',
    createdAt: '2026-01-25T12:00:00Z',
    owner: {
      id: 'user7',
      name: 'GlobalProtocol',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=user7'
    },
    tags: ['Translation', 'Spanish', 'Whitepaper'],
    offersCount: 7
  }
];

export const offers: Offer[] = [
  // Offers for Mission 1
  {
    id: 'offer1',
    missionId: '1',
    owner: {
      id: 'dev1',
      name: 'CodeMaster.eth',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=dev1',
      rating: 4.9
    },
    description: 'I have 8 years of experience building REST APIs with Node.js and PostgreSQL. I can deliver a production-ready API with full documentation and 90%+ test coverage. I have worked with Stripe integration on multiple projects.',
    price: 2400,
    currency: 'USDC',
    status: 'pending',
    createdAt: '2026-02-21T09:00:00Z',
    estimatedDelivery: '2026-03-10T23:59:59Z'
  },
  {
    id: 'offer2',
    missionId: '1',
    owner: {
      id: 'dev2',
      name: 'BackendPro',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=dev2',
      rating: 4.7
    },
    description: 'Full-stack developer with extensive e-commerce experience. I can build the API using Express.js with TypeScript for better type safety. Includes CI/CD setup and Docker configuration.',
    price: 2800,
    currency: 'USDC',
    status: 'pending',
    createdAt: '2026-02-21T11:30:00Z',
    estimatedDelivery: '2026-03-08T23:59:59Z'
  },
  {
    id: 'offer3',
    missionId: '1',
    owner: {
      id: 'dev3',
      name: 'APIBuilder',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=dev3',
      rating: 4.5
    },
    description: 'I specialize in building scalable APIs. My approach includes GraphQL alongside REST for flexibility. I will provide Swagger documentation and Postman collections.',
    price: 2200,
    currency: 'USDC',
    status: 'rejected',
    createdAt: '2026-02-20T14:00:00Z',
    estimatedDelivery: '2026-03-12T23:59:59Z'
  },
  {
    id: 'offer4',
    missionId: '1',
    owner: {
      id: 'dev4',
      name: 'NodeNinja',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=dev4',
      rating: 4.8
    },
    description: 'Senior backend engineer with 6 years of Node.js experience. I have built APIs for several successful startups. Clean architecture and best practices guaranteed.',
    price: 2600,
    currency: 'USDC',
    status: 'pending',
    createdAt: '2026-02-22T08:15:00Z',
    estimatedDelivery: '2026-03-05T23:59:59Z'
  },
  {
    id: 'offer5',
    missionId: '1',
    owner: {
      id: 'dev5',
      name: 'FastDev.io',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=dev5',
      rating: 4.3
    },
    description: 'Quick turnaround with quality code. I can have the MVP ready in 2 weeks with all core features. Happy to iterate based on feedback.',
    price: 2000,
    currency: 'USDC',
    status: 'pending',
    createdAt: '2026-02-23T10:00:00Z',
    estimatedDelivery: '2026-03-07T23:59:59Z'
  },
  // Offers for Mission 2
  {
    id: 'offer6',
    missionId: '2',
    owner: {
      id: 'auditor1',
      name: 'SecurityFirst.eth',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=auditor1',
      rating: 5.0
    },
    description: 'Certified smart contract auditor with experience auditing over 50 DeFi protocols. I have found critical vulnerabilities in major protocols. Full audit report with severity classifications.',
    price: 9000,
    currency: 'USDC',
    status: 'accepted',
    createdAt: '2026-02-18T18:00:00Z',
    estimatedDelivery: '2026-02-28T23:59:59Z'
  },
  {
    id: 'offer7',
    missionId: '2',
    owner: {
      id: 'auditor2',
      name: 'AuditDAO',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=auditor2',
      rating: 4.8
    },
    description: 'Team of 3 auditors will review your contracts. We use both manual review and automated tools like Slither and Mythril. 48-hour preliminary report.',
    price: 7500,
    currency: 'USDC',
    status: 'rejected',
    createdAt: '2026-02-19T09:00:00Z',
    estimatedDelivery: '2026-02-26T23:59:59Z'
  },
  {
    id: 'offer8',
    missionId: '2',
    owner: {
      id: 'auditor3',
      name: 'ChainGuard',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=auditor3',
      rating: 4.6
    },
    description: 'Independent security researcher with focus on DeFi lending protocols. I have contributed to several bug bounty programs. Detailed line-by-line analysis.',
    price: 6500,
    currency: 'USDC',
    status: 'pending',
    createdAt: '2026-02-19T14:30:00Z',
    estimatedDelivery: '2026-02-27T23:59:59Z'
  },
  // Offers for Mission 3
  {
    id: 'offer9',
    missionId: '3',
    owner: {
      id: 'designer1',
      name: 'PixelPerfect',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=designer1',
      rating: 4.9
    },
    description: 'Award-winning UI/UX designer with 5+ years in fintech and crypto. I will deliver a complete design system with components, animations, and micro-interactions.',
    price: 2000,
    currency: 'USDC',
    status: 'pending',
    createdAt: '2026-02-22T10:00:00Z',
    estimatedDelivery: '2026-03-05T23:59:59Z'
  },
  {
    id: 'offer10',
    missionId: '3',
    owner: {
      id: 'designer2',
      name: 'CryptoDesigns',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=designer2',
      rating: 4.7
    },
    description: 'Specialized in crypto wallet design. I have designed 10+ wallet apps including 2 that are in the App Store top charts. User-centric approach with usability testing.',
    price: 1900,
    currency: 'USDC',
    status: 'pending',
    createdAt: '2026-02-22T12:30:00Z',
    estimatedDelivery: '2026-03-08T23:59:59Z'
  }
];

export const getMissionById = (id: string): Mission | undefined => {
  return missions.find(mission => mission.id === id);
};

export const getOffersByMissionId = (missionId: string): Offer[] => {
  return offers.filter(offer => offer.missionId === missionId);
};
