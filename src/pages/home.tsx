import { Home } from '../components/home'
import { promises as fs } from 'fs'
import path from 'path'

export async function getServerSideProps() {
  fs.readFile(path.join(process.cwd(), 'public', 'locales', 'de', `common.json`)).then((res:any) => {
    console.log(1, JSON.parse(res))
  }).catch(error => {
    console.log(2, error)
  })

  fs.readFile(path.join('public', 'locales', 'de', `common.json`)).then((res:any) => {
    console.log(3, JSON.parse(res))
  }).catch(error => {
    console.log(4, error)
  })

  fs.readFile(path.join('public', 'locales','nl', `common.json`)).then((res:any) => {
    console.log(4, JSON.parse(res))
  }).catch(error => {
    console.log(5, error)
  })
  return { props: {} }
}

export default Home