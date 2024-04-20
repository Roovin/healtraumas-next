import '../styles/globals.css';
import '../components/button/button.css'
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
