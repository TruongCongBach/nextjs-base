import { BasicLayout } from '../layout'
import { useLogin, useLogout } from '../../resource-api/hooks/auth'
import React from 'react'

function Home() {
  const login = useLogin();
  const logout = useLogout();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return <div>Home page
    <br/>
    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
    <input type='text' value={password} onChange={e => setPassword(e.target.value)}/>

    <button onClick={() => login({
      email,
      password,
    })}>Login</button>
    <button onClick={() => logout()}>logout</button>
  </div>
}
Home.Layout = BasicLayout;


export {
  Home
}