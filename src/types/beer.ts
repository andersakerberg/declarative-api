declare namespace DAPI {
  /**
   * @description Beer
   */
  interface Beer {
    /**
     * @description Currently the filename
     */
    id: string
    title: string
    brewery: string
    year: number
    category: import('./enums/BeerType').default
    /**
     * @description my hiddden property should not be seen
     * @ignore
     */
    hidden: string
  }

  /**
   * @description GetAllBeersResponse
   */
  interface GetAllBeersResponse {
    beers: Beer[]
  }
}
