import HeroBanner from "../components/HeroBanner";
import Introduction from "../components/Introduction";
import IntroWithCta from "../components/IntroWithCta";
import Testimonial from "../components/Testimonial";
import { intro, intro3 } from "../public/data/homePageData";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <IntroWithCta
        bgskyblue={intro.bgskyblue}
        title={intro.title}
        titleblue={intro.titleblue}
        paragraph={intro.paragraph}
        textcenterTitle={intro.textcenterTitle}
        listTitle={intro.listTitle}
        listItem={intro.listItem}
        listTitle2={intro.listTitle2}
        listItem2={intro.listItem2}
        btnText={intro.btnText}
        btnUrl={intro.btnUrl}
      />
      <Introduction />
      <IntroWithCta
        bgImage={intro3.bgImage}
        title={intro3.title}
        titlewhite={intro3.titlewhite}
        textcenterTitle={intro3.textcenterTitle}
        btnText={intro3.btnText}
        btnUrl={intro3.btnUrl}
      />
      <Testimonial />
    </>
  );
}
