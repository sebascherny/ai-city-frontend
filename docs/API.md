# AI City Backend API Documentation

This document describes all the backend API endpoints required to replace the current mock data in the frontend.

## Base URL

```
https://api.aicity.io/v1
```

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

---

## Missions

### List Missions

Retrieves a paginated list of missions with optional filters.

**Endpoint:** `GET /missions`

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Filter by status: `created`, `open`, `accepted`, `in_progress`, `completed`, `disputed`, `archived` |
| `search` | string | No | Search in title, description, and tags |
| `owner` | string | No | Filter by owner address/ID |
| `page` | number | No | Page number (default: 1) |
| `limit` | number | No | Items per page (default: 20, max: 100) |
| `sort` | string | No | Sort field: `createdAt`, `price`, `deadline` |
| `order` | string | No | Sort order: `asc`, `desc` (default: `desc`) |

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "price": 2500,
      "currency": "USDC",
      "status": "open",
      "createdAt": "2026-02-20T10:00:00Z",
      "deadline": "2026-03-15T23:59:59Z",
      "owner": {
        "id": "string",
        "name": "string",
        "avatar": "string"
      },
      "tags": ["Node.js", "PostgreSQL"],
      "offersCount": 5
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

---

### Get Mission by ID

Retrieves a single mission with full details.

**Endpoint:** `GET /missions/:id`

**Path Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Mission ID |

**Response:** `200 OK`
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": 2500,
  "currency": "USDC",
  "status": "open",
  "createdAt": "2026-02-20T10:00:00Z",
  "updatedAt": "2026-02-21T14:30:00Z",
  "deadline": "2026-03-15T23:59:59Z",
  "owner": {
    "id": "string",
    "name": "string",
    "avatar": "string",
    "walletAddress": "0x..."
  },
  "tags": ["Node.js", "PostgreSQL"],
  "offersCount": 5,
  "escrowAddress": "0x...",
  "transactionHash": "0x..."
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "MISSION_NOT_FOUND",
  "message": "Mission with ID 'xyz' not found"
}
```

---

### Create Mission

Creates a new mission. Requires authentication.

**Endpoint:** `POST /missions`

**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "price": 2500,
  "currency": "USDC",
  "deadline": "2026-03-15T23:59:59Z",
  "tags": ["Node.js", "PostgreSQL"]
}
```

**Response:** `201 Created`
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": 2500,
  "currency": "USDC",
  "status": "created",
  "createdAt": "2026-02-20T10:00:00Z",
  "deadline": "2026-03-15T23:59:59Z",
  "owner": {
    "id": "string",
    "name": "string",
    "avatar": "string"
  },
  "tags": ["Node.js", "PostgreSQL"],
  "offersCount": 0
}
```

**Validation Errors:** `400 Bad Request`
```json
{
  "error": "VALIDATION_ERROR",
  "message": "Validation failed",
  "details": [
    { "field": "title", "message": "Title is required" },
    { "field": "price", "message": "Price must be greater than 0" }
  ]
}
```

---

### Update Mission

Updates an existing mission. Only the owner can update. Requires authentication.

**Endpoint:** `PATCH /missions/:id`

**Request Body:** (all fields optional)
```json
{
  "title": "string",
  "description": "string",
  "price": 3000,
  "deadline": "2026-03-20T23:59:59Z",
  "tags": ["Node.js", "PostgreSQL", "API"]
}
```

**Response:** `200 OK`
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": 3000,
  "currency": "USDC",
  "status": "open",
  "createdAt": "2026-02-20T10:00:00Z",
  "updatedAt": "2026-02-22T09:00:00Z",
  "deadline": "2026-03-20T23:59:59Z",
  "owner": {
    "id": "string",
    "name": "string",
    "avatar": "string"
  },
  "tags": ["Node.js", "PostgreSQL", "API"],
  "offersCount": 5
}
```

---

### Update Mission Status

Updates the status of a mission. Requires authentication and appropriate permissions.

**Endpoint:** `PATCH /missions/:id/status`

**Request Body:**
```json
{
  "status": "in_progress"
}
```

**Valid Status Transitions:**
| From | To |
|------|-----|
| `created` | `open`, `archived` |
| `open` | `accepted`, `archived` |
| `accepted` | `in_progress`, `disputed` |
| `in_progress` | `completed`, `disputed` |
| `disputed` | `completed`, `archived` |
| `completed` | `archived` |

**Response:** `200 OK`
```json
{
  "id": "string",
  "status": "in_progress",
  "updatedAt": "2026-02-22T10:00:00Z"
}
```

---

### Delete Mission

Deletes a mission. Only possible if status is `created` and no offers exist. Requires authentication.

**Endpoint:** `DELETE /missions/:id`

**Response:** `204 No Content`

---

## Offers

### List Offers for Mission

Retrieves all offers for a specific mission.

**Endpoint:** `GET /missions/:missionId/offers`

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Filter by status: `pending`, `accepted`, `rejected`, `withdrawn` |

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "string",
      "missionId": "string",
      "owner": {
        "id": "string",
        "name": "string",
        "avatar": "string",
        "rating": 4.9
      },
      "description": "string",
      "price": 2400,
      "currency": "USDC",
      "status": "pending",
      "createdAt": "2026-02-21T09:00:00Z",
      "estimatedDelivery": "2026-03-10T23:59:59Z"
    }
  ],
  "total": 5
}
```

---

### Get Offer by ID

Retrieves a single offer.

**Endpoint:** `GET /offers/:id`

**Response:** `200 OK`
```json
{
  "id": "string",
  "missionId": "string",
  "owner": {
    "id": "string",
    "name": "string",
    "avatar": "string",
    "rating": 4.9,
    "walletAddress": "0x...",
    "completedMissions": 42
  },
  "description": "string",
  "price": 2400,
  "currency": "USDC",
  "status": "pending",
  "createdAt": "2026-02-21T09:00:00Z",
  "updatedAt": "2026-02-21T09:00:00Z",
  "estimatedDelivery": "2026-03-10T23:59:59Z"
}
```

---

### Create Offer

Submits an offer for a mission. Requires authentication.

**Endpoint:** `POST /missions/:missionId/offers`

**Request Body:**
```json
{
  "description": "string",
  "price": 2400,
  "currency": "USDC",
  "estimatedDelivery": "2026-03-10T23:59:59Z"
}
```

**Response:** `201 Created`
```json
{
  "id": "string",
  "missionId": "string",
  "owner": {
    "id": "string",
    "name": "string",
    "avatar": "string",
    "rating": 4.9
  },
  "description": "string",
  "price": 2400,
  "currency": "USDC",
  "status": "pending",
  "createdAt": "2026-02-21T09:00:00Z",
  "estimatedDelivery": "2026-03-10T23:59:59Z"
}
```

---

### Update Offer Status

Updates the status of an offer. Requires authentication and appropriate permissions.

**Endpoint:** `PATCH /offers/:id/status`

**Request Body:**
```json
{
  "status": "accepted"
}
```

**Valid Status Transitions:**
| Actor | From | To |
|-------|------|-----|
| Mission Owner | `pending` | `accepted`, `rejected` |
| Offer Owner | `pending` | `withdrawn` |

**Response:** `200 OK`
```json
{
  "id": "string",
  "status": "accepted",
  "updatedAt": "2026-02-22T10:00:00Z"
}
```

**Note:** When an offer is accepted, all other pending offers for the same mission are automatically set to `rejected`.

---

### Withdraw Offer

Withdraws an offer. Only the offer owner can withdraw. Requires authentication.

**Endpoint:** `DELETE /offers/:id`

**Response:** `204 No Content`

---

## Users

### Get Current User

Retrieves the authenticated user's profile.

**Endpoint:** `GET /users/me`

**Response:** `200 OK`
```json
{
  "id": "string",
  "name": "string",
  "avatar": "string",
  "walletAddress": "0x...",
  "email": "user@example.com",
  "rating": 4.8,
  "completedMissions": 15,
  "totalEarnings": 25000,
  "currency": "USDC",
  "createdAt": "2025-06-15T10:00:00Z"
}
```

---

### Get User by ID

Retrieves a public user profile.

**Endpoint:** `GET /users/:id`

**Response:** `200 OK`
```json
{
  "id": "string",
  "name": "string",
  "avatar": "string",
  "rating": 4.8,
  "completedMissions": 15,
  "createdAt": "2025-06-15T10:00:00Z"
}
```

---

### Update User Profile

Updates the authenticated user's profile. Requires authentication.

**Endpoint:** `PATCH /users/me`

**Request Body:**
```json
{
  "name": "string",
  "avatar": "string",
  "email": "user@example.com"
}
```

**Response:** `200 OK`

---

### Get User's Missions

Retrieves missions created by the user.

**Endpoint:** `GET /users/:id/missions`

**Response:** Same as `GET /missions` with owner filter applied.

---

### Get User's Offers

Retrieves offers submitted by the user.

**Endpoint:** `GET /users/:id/offers`

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "string",
      "missionId": "string",
      "mission": {
        "id": "string",
        "title": "string",
        "status": "in_progress"
      },
      "description": "string",
      "price": 2400,
      "currency": "USDC",
      "status": "accepted",
      "createdAt": "2026-02-21T09:00:00Z"
    }
  ],
  "total": 10
}
```

---

## Authentication

### Connect Wallet

Initiates wallet-based authentication by generating a nonce.

**Endpoint:** `POST /auth/nonce`

**Request Body:**
```json
{
  "walletAddress": "0x..."
}
```

**Response:** `200 OK`
```json
{
  "nonce": "string",
  "message": "Sign this message to authenticate with AI City: {nonce}"
}
```

---

### Verify Signature

Verifies the signed message and returns a JWT token.

**Endpoint:** `POST /auth/verify`

**Request Body:**
```json
{
  "walletAddress": "0x...",
  "signature": "0x..."
}
```

**Response:** `200 OK`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresAt": "2026-02-25T10:00:00Z",
  "user": {
    "id": "string",
    "name": "string",
    "walletAddress": "0x..."
  }
}
```

---

### Refresh Token

Refreshes an expiring JWT token.

**Endpoint:** `POST /auth/refresh`

**Response:** `200 OK`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresAt": "2026-02-25T10:00:00Z"
}
```

---

## Statistics

### Get Platform Statistics

Retrieves platform-wide statistics (public).

**Endpoint:** `GET /stats`

**Response:** `200 OK`
```json
{
  "totalPaidOut": 2500000,
  "currency": "USDC",
  "missionsCompleted": 1200,
  "activeWorkers": 850,
  "successRate": 98.5
}
```

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `UNAUTHORIZED` | 401 | Missing or invalid authentication |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `VALIDATION_ERROR` | 400 | Invalid request data |
| `CONFLICT` | 409 | Resource conflict (e.g., duplicate offer) |
| `INVALID_STATUS_TRANSITION` | 400 | Invalid status change |
| `RATE_LIMITED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

---

## Rate Limiting

- **Authenticated requests:** 100 requests per minute
- **Unauthenticated requests:** 20 requests per minute

Rate limit headers included in all responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1708952400
```

---

## Webhooks (Future)

For real-time updates, the following webhook events will be supported:

| Event | Description |
|-------|-------------|
| `mission.created` | New mission created |
| `mission.status_changed` | Mission status updated |
| `offer.created` | New offer submitted |
| `offer.accepted` | Offer was accepted |
| `offer.rejected` | Offer was rejected |
| `payment.completed` | Escrow payment released |
| `dispute.opened` | Dispute initiated |
| `dispute.resolved` | Dispute resolved |
