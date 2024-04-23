import HeroBanner from "../components/HeroBanner";
import IntroWithCta from "../components/IntroWithCta";
import Testimonial from "../components/Testimonial";
import FooterCta from "../components/FooterCta";
import { intro, intro2, intro3 } from "../public/data/homePageData";
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
    <NextSeo
				title="Heal Ukraine Trauma"
				description="Heal Ukraine Trauma provides mental health services for Ukrainians healing from conflict-associated trauma and PTSD."
				canonical='https://healtraumas.org'
				openGraph={{
					url: 'https://healtraumas.org',
					title: 'Heal Ukraine Trauma',
					description: 'Heal Ukraine Trauma provides mental health services for Ukrainians healing from conflict-associated trauma and PTSD.',
					images: [
						{
							url: '../og-image.jpeg',
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
      <HeroBanner />
      <IntroWithCta data={intro} />
      <IntroWithCta data={intro2} />
      <IntroWithCta data={intro3} />
      <Testimonial />
      <FooterCta />
    </>
  );
}
