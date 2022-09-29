import { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const BasicLayout:FC<Props> = ({children}) => <div style={{
  display: 'flex',
}}>{children}</div>

const Noop: FC<Props> = ({ children }) => <>{children}</>

export {
  BasicLayout,
  Noop
}