import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@manskuy/grid/build/index.css';
// import { useObject } from 'react-firebase-hooks/database';
// import { closeFirebaseConnection, firebaseApp, getFirebaseDatabaseRef } from '../../firebase/utils'
import './../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  // const [snapshot, isLoading, isError] = useObject(getFirebaseDatabaseRef());

  // useEffect(() => {

  //   if (isLoading === false) {
  //     console.log('check db', snapshot?.val());
  //   }
    
  //   return () => {
  //     closeFirebaseConnection();
  //   }
  // }, [isLoading])
  
  return <Component {...pageProps} />
}
