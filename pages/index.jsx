import HeroBanner from "../components/HeroBanner";
import IntroWithCta from "../components/IntroWithCta";
import Testimonial from "../components/Testimonial";
import FooterCta from "../components/FooterCta";
import { intro, intro2, intro3 } from "../public/data/homePageData";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <IntroWithCta data={intro} />
      <IntroWithCta data={intro2} />
      <IntroWithCta data={intro3} />
      <Testimonial />
      <FooterCta />
    </>
  );
}
