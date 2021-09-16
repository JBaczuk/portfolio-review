import Theme from '../styles/theme';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {

  return (
    <>
        <Theme>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Theme>
    </>
  );
}
 