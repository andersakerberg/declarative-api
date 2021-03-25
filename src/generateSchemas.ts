import 'app-module-path/register'
import 'dotenv/config'
import path from 'path'
import * as TJS from 'typescript-json-schema'
import * as fs from 'fs'

const dirpath = path.join(__dirname, '/types')
const dirpathGeneratedSchemas = path.join(__dirname, '/schemas')
const EXTENSION = '.ts'
let targetFiles = null

fs.readdir(dirpath, (err, files) => {
  targetFiles = files
    .filter((file) => {
      return path.extname(file).toLowerCase() === EXTENSION
    })
    .map((tsFile) => {
      return `${dirpath}/${tsFile}`
    })
  const settings: TJS.PartialArgs = {
    required: true,
    ref: false,
    strictNullChecks: true,
    typeOfKeyword: true,
    titles: true,
    aliasRef: false,
  }

  const compilerOptions: TJS.CompilerOptions = {
    ref: false,
    strictNullChecks: true,
    typeOfKeyword: true,
    allowJs: true,
    titles: true,
    id: true,
    aliasRef: false,
  }

  const basePath = './src'
  const program = TJS.getProgramFromFiles(targetFiles, compilerOptions, basePath)
  const generator = TJS.buildGenerator(program, settings)
  const allUserSymbols = generator?.getUserSymbols()
  if (allUserSymbols) {
    allUserSymbols
      .filter((symbol) => symbol.startsWith('DAPI.'))
      .forEach((filteredSymbol) => {
        const generatedSchema = generator?.getSchemaForSymbol(filteredSymbol)
        fs.writeFile(
          `${dirpathGeneratedSchemas}/${filteredSymbol.toLocaleLowerCase()}.json`,
          JSON.stringify(generatedSchema, null, 2),
          (writeError) => {
            if (writeError) return console.log(writeError)
            return true
          }
        )
      })
  }
})
