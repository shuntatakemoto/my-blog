import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'haruta',
  apiKey: process.env.API_KEY,
});