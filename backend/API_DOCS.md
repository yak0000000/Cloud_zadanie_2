# Backend API

Base URL: `http://localhost:5000`

## Auth

### `POST /auth/register`

Request body:

```json
{
  "firstname": "Yako",
  "lastname": "Test",
  "email": "yako@test.com",
  "password": "12345678"
}
```

Success response: `201 Created`

```json
{
  "message": "User created successfully",
  "token": "jwt_token",
  "user": {
    "id": 1,
    "firstname": "Yako",
    "lastname": "Test",
    "email": "yako@test.com"
  }
}
```

### `POST /auth/login`

Request body:

```json
{
  "email": "yako@test.com",
  "password": "12345678"
}
```

Success response: `200 OK`

```json
{
  "message": "Login successful",
  "token": "jwt_token",
  "user": {
    "id": 1,
    "firstname": "Yako",
    "lastname": "Test",
    "email": "yako@test.com"
  }
}
```

### `GET /auth/me`

Headers:

```http
Authorization: Bearer <token>
```

Success response: `200 OK`

```json
{
  "id": 1,
  "firstname": "Yako",
  "lastname": "Test",
  "email": "yako@test.com"
}
```

## Trips

All `/trips` endpoints require:

```http
Authorization: Bearer <token>
```

### `GET /trips`

Returns all trips of the current user.

### `GET /trips/:id`

Returns one trip of the current user.

### `POST /trips`

Request body:

```json
{
  "start": "Bratislava",
  "destination": "Paris",
  "startDate": "2026-05-10T00:00:00.000Z",
  "finishDate": "2026-05-15T00:00:00.000Z",
  "price": 250,
  "description": "Weekend trip",
  "flightLink": "https://example.com/flight",
  "stayLink": "https://example.com/stay"
}
```

Success response: `201 Created`

### `PUT /trips/:id`

Updates all trip fields. Uses the same request body as `POST /trips`.

### `DELETE /trips/:id`

Deletes one trip of the current user.

### `PATCH /trips/:id/favorite`

Toggles `favorites` between `true` and `false`.

## Common Errors

- `400 Bad Request` for invalid input
- `401 Unauthorized` for missing or invalid token
- `404 Not Found` when user or trip does not exist
- `500 Internal Server Error` for unexpected server errors
