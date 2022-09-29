import { useSWRConfig } from 'swr'
import { serverSideFetcher } from '../../fetcher'
import useLocalStorage from '../localStorage/useLocalStorage'

export type Certificate = {
  email: string,
  password: string,
}

const fetcher = (certificate: Certificate) => serverSideFetcher.post('jm-auth/login', certificate)

const useLogin = () => {
  const { mutate } = useSWRConfig()
  const {setValue} = useLocalStorage();

  return (certificate: Certificate) => {
    return mutate(['jm-auth/login'], fetcher(certificate), { revalidate: false })
      .then(data => {
        setValue('access_token', data.token.access_token);
        setValue('refresh_token', data.token.refresh_token);
        return data;
     })
  }
}

const useLogout = () => {
  const { removeItem } = useLocalStorage();
  return () => {
    removeItem('access_token');
    removeItem('refresh_token');
  }
}

export {
  useLogin,
  useLogout
}