declare namespace DAPI {
  /**
   * @description Error response schema
   */
  interface ErrorResponse {
    errorMessage: string
    errorCode: import('./enums/ErrorTypes').default
  }
}
