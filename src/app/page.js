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

export default function Home() {
  return (
    <main>
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
