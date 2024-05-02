import '../styles/globals.css';
import '../components/button/button.css'
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-4L526122LP"></script>
				<script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
					function gtag(){
						dataLayer.push(arguments);
					}
					gtag('js', new Date());
					gtag('set', 'developer_id.dZjQwMz', true);
					gtag('consent', 'default', {'analytics_storage': 'denied', 'wait_for_update': 500 });
					window.googleAnalyticsRequiresConsentUpdates = true;
					(function(){let squarespaceCookies = { };
					if (window.getSquarespaceCookies) {squarespaceCookies = window.getSquarespaceCookies();
					}
					const consentValue = squarespaceCookies.marketing === 'accepted' ? 'granted' :  'denied';
					gtag('consent', 'update', {'analytics_storage': consentValue })})();
					gtag('config', 'G-4L526122LP');
					`}} /> 
					<script dangerouslySetInnerHTML={{__html: ` window.Givebutter=window.Givebutter||function(){(Givebutter.q=Givebutter.q||[]).push(arguments)};Givebutter.l=+new Date;
						window.Givebutter('setOptions',
						{
							"accountId": "I1by5k3m3PhqNo9Z"
						});`}} />
					<script async src="https://js.givebutter.com/elements/latest.js" ></script>
					
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
