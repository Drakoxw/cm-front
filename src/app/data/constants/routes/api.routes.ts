import { environment as ENV } from '../../../../environments/environment'


export const API_ROUTES = {
  AUTH: {
    LOGIN: `${ENV.URI}/auth`
  },

  CLIENTS: `${ENV.URI}/clients/`,

  CITAS: `${ENV.URI}/dates/`,

  CALL: `${ENV.URI}/call`,

  DID: `${ENV.URI}/dids`,

  USERS: `${ENV.URI}/users/`,


}
