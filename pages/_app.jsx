import '../styles/globals.css';
import '../components/button/button.css'
import Head from 'next/head';
import Layout from '../components/Layout';
import GTMHeadScript from '../components/GTm'
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import en from '../public/i18n/en.json';
import ua from '../public/i18n/ua.json';

const messages = {
	en,
	ua
}

function getDirection(locale) {
	return "ltr";
}


function MyApp({ Component, pageProps }) {
	const { locale } = useRouter();
	return (
		<>
		<IntlProvider locale={locale} messages={messages[locale]}>
			<Head>
				<GTMHeadScript />
			</Head>
			<Layout>
				<Component {...pageProps} dir={getDirection(locale)} />
			</Layout>
		</IntlProvider>
		</>
	);
}

export default MyApp;
