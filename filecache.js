import { promises as fs } from 'fs'
import path from 'path'
import axios from 'axios'

export const CACHE_TYPE = {
  CATEGORY_TREE: 'categoryTree',
  STORYBLOK_ME: 'storyBlokMe',
  STORYBLOK_GLOBAL: 'storyBlokGlobal',
}

let cacheResponse = {}

const filecache = {
  load: async(nameCache, locale) => {
    const cacheFileName = `${locale}_${nameCache}`
    try {

      if(cacheResponse[cacheFileName]) {
        return cacheResponse[cacheFileName]
      }

      if(process.env.NODE_ENV === 'development') {
        const fileLocale = await fs.readFile(path.join(process.cwd(), 'public','cache',`${locale}_${nameCache}.json`))
        if(JSON.parse(fileLocale)) {
          return JSON.parse(fileLocale)
        }
      }

      if(!process.env.BUILDING && process.env.NODE_ENV === 'production') {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL + `/cache/${locale}_${nameCache}.json`)
        cacheResponse[cacheFileName] = response.data
      }

      return cacheResponse[cacheFileName];
    } catch (error) {
      console.log(error)
      return null
    }
  },
  set: async (nameCache,locale, data) => {
    const cacheFileName = `${locale}_${nameCache}`
    cacheResponse[cacheFileName] = data
    try {
      return await fs.writeFile(
        path.join(process.cwd(), 'public','cache',`${locale}_${nameCache}.json`),
        JSON.stringify(data)
      )
    } catch (e) {
      return null
    }
  },
  localization: {
    load: async(namespace) => {
      return cacheResponse[`locales-${namespace}`];
    },
    set: async (namespace, data) => {
      cacheResponse[`locales-${namespace}`] = data
      try {
        return await fs.writeFile(
          path.join(process.cwd(), 'public','locales', namespace, `common.json`),
          JSON.stringify(data)
        )
      } catch (e) {
        return null
      }
    },
  }
}

export default filecache;