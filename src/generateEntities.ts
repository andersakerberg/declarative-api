import 'app-module-path/register'
import 'dotenv/config'
import path from 'path'
import faker from 'faker'
import * as fs from 'fs'
import BooksCategory from 'types/enums/BooksCategory'
import BeerType from 'types/enums/BeerType'
import WineType from 'types/enums/WineType'

const randomEnumValue = (enumeration) => {
  const values = Object.keys(enumeration)
  const enumKey = values[Math.floor(Math.random() * values.length)]
  return enumeration[enumKey]
}

const dirpathGeneratedSchemas = path.join(__dirname, '/entities')

//BOOKS
for (let index = 0; index < 200; index++) {
  const booksRoot = `${dirpathGeneratedSchemas}/books`
  const book = {
    author: faker.commerce.productAdjective(),
    category: randomEnumValue(BooksCategory),
    onSale: faker.random.boolean(),
    publisher: faker.commerce.department(),
    title: faker.commerce.productName(),
    year: faker.random.number(),
  } as DAPI.Book

  const fileName = `${booksRoot}/${faker.random.uuid()}.json`
  fs.writeFile(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fileName,
    JSON.stringify(book, null, 2),
    (writeError) => {
      if (writeError) return console.log(writeError)
      return true
    }
  )
}

// //BEERS
for (let index = 0; index < 200; index++) {
  const beersRoot = `${dirpathGeneratedSchemas}/beers`
  const book = {
    brewery: faker.commerce.department(),
    category: randomEnumValue(BeerType).toString(),
    title: faker.commerce.productName(),
    year: faker.time.recent(),
  } as DAPI.Beer

  const fileName = `${beersRoot}/${faker.random.uuid()}.json`
  fs.writeFile(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fileName,
    JSON.stringify(book, null, 2),
    (writeError) => {
      if (writeError) return console.log(writeError)
      return true
    }
  )
}
// //WINES
for (let index = 0; index < 200; index++) {
  const wineRoot = `${dirpathGeneratedSchemas}/wines`
  const book = {
    description: faker.commerce.product(),
    category: randomEnumValue(WineType).toString(),
    title: faker.commerce.productName(),
    year: faker.time.recent(),
  } as DAPI.Wine

  const fileName = `${wineRoot}/${faker.random.uuid()}.json`
  fs.writeFile(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fileName,
    JSON.stringify(book, null, 2),
    (writeError) => {
      if (writeError) return console.log(writeError)
      return true
    }
  )
}
