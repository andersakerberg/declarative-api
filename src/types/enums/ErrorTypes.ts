enum ErrorTypes {
  EMAIL_IS_MALFORMED = 'EMAIL_IS_MALFORMED',
  BAD_REQUEST = 'BAD_REQUEST',
  INVALID_FORMAT = 'INVALID_FORMAT',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  INVALID_JWT = 'INVALID_JWT',
  MISSING_CLIENT_NAME = 'MISSING_CLIENT_NAME',
  INCORRECT_AUTH_HEADERS = 'INCORRECT_AUTH_HEADERS',
  UNAUTHORIZED = 'UNAUTHORIZED',
  UNAUTHORIZED_SERVICE = 'UNAUTHORIZED_SERVICE',
  FORBIDDEN = 'FORBIDDEN',
  CONFLICTING_RESOURCE = 'CONFLICTING_RESOURCE',
  ROUTE_NOT_FOUND = 'ROUTE_NOT_FOUND',
}

export default ErrorTypes
