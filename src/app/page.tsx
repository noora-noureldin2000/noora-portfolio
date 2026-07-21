import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SmoothScroll from "@/components/shared/SmoothScroll";
import NooraNavbar from "@/components/noora-portfolio/NooraNavbar";
import NooraHero from "@/components/noora-portfolio/NooraHero";
import NooraAbout from "@/components/noora-portfolio/NooraAbout";
import NooraServices from "@/components/noora-portfolio/NooraServices";
import NooraGitHubProjects from "@/components/noora-portfolio/NooraGitHubProjects";
import NooraExperience from "@/components/noora-portfolio/NooraExperience";
import NooraSkills from "@/components/noora-portfolio/NooraSkills";
import NooraPortfolioSamples from "@/components/noora-portfolio/NooraPortfolio";
import NooraCertifications from "@/components/noora-portfolio/NooraCertifications";
import NooraContact from "@/components/noora-portfolio/NooraContact";
import NooraFooter from "@/components/noora-portfolio/NooraFooter";

export const metadata: Metadata = buildMetadata({
  title: "Noora Noureldin — Medical Writer & Clinical Research Professional",
  description:
    "Licensed Pharmacist, Clinical Nutritionist (MSc), and published medical writer with Q1/Q2 journal publications. Specializing in medical writing, biostatistics, research synthesis, and exam prep.",
  path: "/",
  image: "/og/home.png",
  keywords: [
    "medical writer",
    "clinical pharmacy instructor",
    "scientific researcher",
    "pharmacist",
    "clinical nutritionist",
    "medical writing",
    "biostatistics",
    "SPSS data analysis",
    "systematic review",
    "manuscript preparation",
    "Prometric exam preparation",
    "research mentorship",
    "Noora Noureldin",
    "MedElite Research Hub",
    "academic writing",
    "clinical research",
    "UAE pharmacist",
    "scientific communication",
  ],
});

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="app-landing">
        <NooraNavbar />
        <NooraHero />
        <NooraAbout />
        <NooraServices />
        <NooraGitHubProjects />
        <NooraExperience />
        <NooraSkills />
        <NooraPortfolioSamples />
        <NooraCertifications />
        <NooraContact />
        <NooraFooter />
      </div>
    </SmoothScroll>
  );
}
