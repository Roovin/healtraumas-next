import '../styles/globals.css';
import '../components/button/button.css'
import Head from 'next/head';
import Layout from '../components/Layout';
import GTMHeadScript from '../components/GTm'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<GTMHeadScript />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
