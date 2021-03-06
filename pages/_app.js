import { Provider } from 'react-redux'

import { useStore } from '../store/store'
import Layout from '../components/Layout'

import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}