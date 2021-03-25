declare namespace DAPI {
  /**
   * @description baseParams
   */
  interface baseParams {
    year: string
  }

  /**
   * @description baseBeerParams
   */
  interface baseBeerParams extends baseParams {
    beer: string
  }

  /**
   * @description baseBookParams
   */
  interface baseBookParams extends baseParams {
    book: string
  }

  /**
   * @description baseWineParams
   */
  interface baseWineParams extends baseParams {
    wine: string
  }
}
