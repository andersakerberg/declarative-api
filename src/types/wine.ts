declare namespace DAPI {
  /**
   * @description Wine
   */
  interface Wine {
    /**
     * @description Currently the filename
     */
    id: string
    title: string
    description: string
    year: number
    category: import('./enums/WineType').default
  }

  /**
   * @description GetAllWinesResponse
   */
  interface GetAllWinesResponse {
    wines: Wine[]
  }
}
