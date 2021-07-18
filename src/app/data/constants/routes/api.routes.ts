import { environment as ENV } from '../../../../environments/environment'


export const API_ROUTES = {
  AUTH: {
    LOGIN: `${ENV.URI}/auth`
  },

  CLIENTS: `${ENV.URI}/clients/`,

  PASS:  `${ENV.URI}/passwd`,

  CITAS: `${ENV.URI}/dates/`,

  CALL: `${ENV.URI}/call`,

  DID: `${ENV.URI}/dids`,

  USERS: `${ENV.URI}/users/`,

  COBROS: `${ENV.URI}/cobros/`,

  PAGOS: `${ENV.URI}/pagos/`,

  DOCUMENTS: `${ENV.URI}/documents/`,

  CREDIT: `${ENV.URI}/creditreport/`,

  CARTAS: `${ENV.URI}/letter/`

}
