# Simple DevOps Assignment

This is a simple two-tier web app:
- **Backend**: FastAPI (Python)
- **Frontend**: Next.js (React)
- **Docker**: Everything runs with Docker
- **CI/CD**: GitHub Actions for testing
- **Terraform**: Basic AWS config started

## To Run Locally

```bash
docker-compose up --build
```

Then visit:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000/api/message

## Tests

- Backend: Python unit tests
- Frontend: Cypress UI test

## Next Steps

- Add AWS deployment via Terraform
- Push to GitHub
- Create demo video
