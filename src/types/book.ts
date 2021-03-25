declare namespace DAPI {
  /**
   * @description Book
   */
  interface Book {
    /**
     * @description Currently the filename
     * @ignore
     */
    id: string
    title: string
    author: string
    year: number
    publisher: string
    onSale: boolean
    category: import('./enums/BooksCategory').default
  }

  /**
   * @description GetAllBooksResponse
   */
  interface GetAllBooksResponse {
    books: Book[]
  }
}
