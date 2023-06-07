# squawkmarket

The frontend for Squawk Market (https://squawk-market.com) project.

WARNING: Upgrading to latest gatsby 5.7 appears to break the Head API, not sure why. See: https://github.com/gatsbyjs/gatsby/issues/37701

## Deployment

The site can be deployed to Netlify, but expects the following environment variables to be set:

GATSBY_ACTIVE_ENV
GATSBY_API_URL
GATSBY_STRIPE_PAYMENT_URL
GATSBY_STRIPE_CUSTOMER_PORTAL_URL
GATSBY_SUPABASE_URL
GATSBY_SUPABASE_ANON_KEY

These can be defined in the Netlify's relatively new "Build Environment Variables" section, where multiple values can be defined per environment (i.e. staging, production, etc).