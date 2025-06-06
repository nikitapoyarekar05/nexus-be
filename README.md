# 🏗️ Neighbourly – Real Estate Backend (NestJS)

This is the backend service for **Neighbourly**, a SaaS platform for real estate listings. Built using **NestJS**, it handles property listings, and communication with PostgreSQL using TypeORM.

---

## 🚀 Features

- 🏡 CRUD APIs for real estate listings
- 🧾 wishlist features
- 🧩 Modular microservice architecture
- 🗃️ PostgreSQL with TypeORM migrations
- 📄 Swagger API docs (upcoming)

---

## 🧱 Tech Stack

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/docs/current/tutorial-install.html)

---

## ⚙️ Getting Started

### 🔨 Installation

```bash
git clone https://github.com/nikitapoyarekar05/nexus-be.git
cd nexus-be
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the root:

```env
PORT=3300
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=nexus
JWT_SECRET=supersecret
```

---

## 📦 Running the App

```bash
# Development
npm run start:dev

# Production build
npm run build
npm run start:prod
```

---

## 🔄 Database Migrations

```bash
# Generate new migration
npm run migration:generate -- ./src/migrations/YourMigrationName

# Run migrations
npm run migration:run
```

---


## 🧪 Testing

```bash
# Run tests
npm run test

# Coverage
npm run test:cov
```

---

## 🌍 Deployment

- Use environments like Railway, Render, or Docker
- Configure env variables as needed
- Ensure `DATABASE_URL` and `JWT_SECRET` are properly set

---


## 🙋‍♀️ Maintainer

Built with ❤️ by [@nikitapoyarekar05](https://github.com/nikitapoyarekar05)