# Commerce Intelligence

Commerce Intelligence is a frontend-first B2B commerce intelligence demo. It connects a public $200/month crypto onboarding flow to a tenant dashboard for product, inventory, competitor, growth-assistant, and reporting workflows.

## Current scope

- Public landing page and BSC/BEP20 payment instructions.
- Onboarding with email, company details, and a transaction ID.
- Tenant dashboard opens with **Demo active** access; real payment remains unverified until a future verifier is connected.
- Client-side CSV and Excel import, simulated commerce insights, competitor analysis, and growth assistant previews.
- PDF and Excel report exports.
- English, Arabic, Italian, French, German, and Spanish UI.
- Light and dark themes.

This is a frontend demo intended to connect to an external Railway backend later. It does not verify blockchain transactions, authenticate users, persist tenant data securely, or provide live AI analysis. Do not use it to collect real customer or payment data until those services are connected and reviewed.

## Development

This project uses a pnpm workspace and React, Vite, TypeScript, and Tailwind CSS.

```sh
pnpm install
pnpm --filter @workspace/commerce-intelligence run dev
```

To type-check the frontend:

```sh
pnpm --filter @workspace/commerce-intelligence run typecheck
```

## Backend integration

The UI currently uses local demo logic. Connect the Railway API before treating tenant onboarding, payment status, file data, or generated recommendations as production data. Keep API credentials in Replit Secrets or the deployment's secret manager; never commit them.

## GitHub

The repository includes a workspace `.gitignore` and this README. Connect a dedicated GitHub repository through Replit's Git controls when the destination repository is ready; no GitHub remote has been configured by this project scaffold.
