import HeroBanner from "../components/HeroBanner";
import Introduction from "../components/Introduction";
import IntroWithCta from "../components/IntroWithCta";
import { intro } from "../public/data/homePageData";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <IntroWithCta
        textskyblue={intro.textskyblue}
        title={intro.title}
        textblue={intro.textblue}
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
      <IntroWithCta />
    </>
  );
}
