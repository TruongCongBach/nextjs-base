import { FC, ReactNode } from 'react'
import { SWRConfig } from 'swr'

const ResourceApiProvider:FC<{children: ReactNode}> = ({children}) => {
  return <SWRConfig value={{
    refreshInterval: 0,
  }}>
    {children}
  </SWRConfig>
}
export default ResourceApiProvider