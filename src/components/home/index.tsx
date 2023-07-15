import { BasicLayout } from '../layout'
import React from 'react'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

function Home() {
  return <div>
    <br/>
    Home page1111
    <br/>
    <hr/>
    {JSON.stringify(publicRuntimeConfig)}
    <hr/>
  </div>
}
Home.Layout = BasicLayout;


export {
  Home
}