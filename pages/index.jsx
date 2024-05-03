import HeroBanner from "../components/HeroBanner";
import IntroWithCta from "../components/IntroWithCta";
import Testimonial from "../components/Testimonial";
import FooterCta from "../components/FooterCta";
import { intro, intro2, intro3 } from "../public/data/homePageData";
import { LogoJsonLd, NextSeo } from 'next-seo';
import { useRouter } from "next/router";
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";


export default function Home() {
    const intl = useIntl();

    const title = intl.formatMessage({ id: "title" });
    const description = intl.formatMessage({ id: "description" })
  return (
    <>
    <NextSeo
				title={title}
				description={description}
				canonical='https://healtraumas.org'
				openGraph={{
					url: 'https://healtraumas.org',
					title: 'Heal Ukraine Trauma',
					description: {description},
					images: [
						{
							url: 'https://healtraumas.vercel.app/healtraumas_OG_image.jpeg',
							width: 800,
							height: 600,
							alt: 'Healtraumas',
							type: 'image/jpeg',
						},
					],
					siteName: 'Healtraumas',
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
				}}
			/>
      <HeroBanner data={intl?.messages?.heroBanner}/>
      <IntroWithCta data={intro} />
      <IntroWithCta data={intro2} />
      <IntroWithCta data={intro3} />
      <Testimonial />
      <FooterCta />
    </>
  );
}
// export async function getStaticProps(context) {
// 	// extract the locale identifier from the URL
// 	const { locale } = context
  
// 	return {
// 	  props: {
// 		// pass the translation props to the page component
// 		...(await serverSideTranslations(locale)),
// 	  },
// 	}
//   }
// export async function getServerSideProps({ locale }) {
// 	const translations = await serverSideTranslations(locale, ['common']);
	
// 	return {
// 	  props: {
// 		...translations,
// 	  },
// 	};
//   }