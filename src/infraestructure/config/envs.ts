import 'dotenv/config'
import envs from 'env-var'

export const env = {
  PORT: envs.get('PORT').required().asPortNumber(),
}