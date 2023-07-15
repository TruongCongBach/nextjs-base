import { BasicLayout } from '../layout'
import React from 'react'

function Home() {
  return <div>
    <br/>
    Home page1111
    <br/>
    <hr/>
    {process.env.FUK_VARIABLE}
    <hr/>
  </div>
}
Home.Layout = BasicLayout;


export {
  Home
}