import { About } from "./components/about";
import { AdmSection } from "./components/admSection";
import { Contact } from "./components/contact";
import { CopyRight } from "./components/copyrightFooter";
import { Interprises } from "./components/enterprises";
import { Header } from "./components/header";
import { InfoSection } from "./components/infoSection";
import { LargeScreenAdmSection } from "./components/largeScreenAdmSection";
import { LargeScreenMenuSection } from "./components/largeScreenMenuSection";
import { LargeScreenReleases } from "./components/largeScreenReleases";
import { ReasonsToBuy } from "./components/reasonsToBuy";
import { Releases } from "./components/releases";
import { metadata } from "./layout";

export default function Home() {
  return (
    <main>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.favicon} />
      <meta property="og:type" content={metadata.contentType} />
      <meta property="og:locale" content={metadata.language} />
      <meta name="author" content={metadata.author} />
      <meta name="keywords" content={metadata.keywords} />
      <link rel="canonical" href={metadata.canonicalUrl} />
      <meta charset={metadata.charset} />
      <meta property="og:image" content="/images/logo-500-gold.png"/>
      <Header />
      <LargeScreenMenuSection/>
      <LargeScreenReleases/>
      <Interprises />
      <InfoSection />
      <LargeScreenAdmSection/>
      <AdmSection />
      <ReasonsToBuy />
      <Releases />
      <About />
      <Contact />
      <CopyRight />
    </main>
  );
}
