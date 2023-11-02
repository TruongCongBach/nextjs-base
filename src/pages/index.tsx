import { Home } from '../components/home'
import { promises as fs } from 'fs'
import path from 'path'

export async function getStaticProps() {
  fs.writeFile(
    path.join(process.cwd(), 'public','locales','de',`common.json`),
    JSON.stringify({
      "description": "description dev quen"
    })
  ).then(res => {
    console.log('index '+ 1, res)
  }).catch(error => {
    console.log('index '+ 2, error)
  })
  return { props: {} }
}

export default Home
