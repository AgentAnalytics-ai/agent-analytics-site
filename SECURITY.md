# Security

## Reporting vulnerabilities

Please report security issues privately (email your maintainers or use a designated security contact). Do not open public GitHub issues for undisclosed vulnerabilities.

## Secrets and configuration

- Never commit `.env`, `.env.local`, or any file containing API keys, tokens, or passwords.
- Use Vercel (or your host) project settings for production secrets.
- If a secret was ever committed, rotate it immediately; removing the file from a later commit does not remove it from git history.

## Environment template

Copy `.env.local.example` to `.env.local` for local development. Example files contain **placeholder names only**, not real credentials.
