import { Home } from '../components/home'
import { promises as fs } from 'fs'
import path from 'path'

export async function getStaticProps() {
  fs.readFile(path.join(process.cwd(), 'public', 'locales', 'de', `common.json`)).then(res => {
    console.log(1, res)
  }).catch(error => {
    console.log(2, error)
  })

  fs.readFile(path.join('public', 'locales', 'de', `common.json`)).then(res => {
    console.log(3, res)
  }).catch(error => {
    console.log(4, error)
  })
  return { props: {} }
}

export default Home
