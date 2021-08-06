import dotenv from 'dotenv'

dotenv.config()

const config = {
  databaseUrl: process.env.DATABASE_URL,
  graphQlApiDevelopUrl: 'https://sandbox.graphql-api.develop.high-mobility.net',
  graphQlApiProductionUrl: 'https://graphql-api.develop.high-mobility.net',
}

export default config
