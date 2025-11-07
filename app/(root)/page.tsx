/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import Video from "@/components/Video";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Modern Next.js Developer Portfolio Template`,
  description: `${pagesConfig.home.metadata.description} This open-source Next.js portfolio template is customizable to showcase your skills and projects.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="flex items-center pt-6 pb-8 mt-20 mb-0 space-y-6 lg:mt-0 lg:h-screen md:pb-12 md:py-20 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Naman Barkiya - Full Stack Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Mohamed Adil
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="text-base font-heading sm:text-xl md:text-xl lg:text-2xl"
          >
            UM EINEN AUSBILDUNGSPLATZ ALS KFZ-MECHATRONIKER
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="text-sm leading-normal text-muted-foreground sm:text-base">
              Motivierter Kfz-Technikbegeisterter mit praktischer Erfahrung in
              der Fahrzeugdiagnose und Elektronik. Ziel: Ausbildung als
              Kfz-Mechatroniker in Deutschland, um Fachkenntnisse zu vertiefen
              und beruflich in der Automobilbranche Fuß zu fassen
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            <AnimatedText delay={0.6}>
              <Link
                href="/mohamed_adil-resume.pdf" // replace with your actual resume file path
                target="_blank"
                download
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="Lebenslauf von Adil Mohamed herunterladen"
              >
                <Icons.download className="w-4 h-4 mr-2" /> Lebenslauf
                herunterladen
              </Link>
            </AnimatedText>
          </div>

          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="w-6 h-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        direction="down"
        className="container py-10 space-y-10 bg-muted"
        id="education"
      >
        {/* Title & Subtitle */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Ausbildung & Bildung
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Ein Überblick über meinen akademischen Werdegang und meine
            technische Ausbildung.
          </AnimatedText>
        </div>

        {/* Education Cards */}
        <div className="grid justify-center gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {/* Ausbildung */}
          <div className="p-6 transition-all duration-300 shadow-md bg-background rounded-2xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Fachtechniker für Fahrzeugdiagnose und eingebettete Elektronik
            </h3>
            <p className="mb-1 text-muted-foreground">
              OFPPT – Centre de Qualification Professionnelle, Beni Mellal
            </p>
            <p className="text-sm text-muted-foreground">
              September 2024 – Aktuell
            </p>
          </div>

          {/* Universität */}
          <div className="p-6 transition-all duration-300 shadow-md bg-background rounded-2xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Die Fakultät für Wirtschaft und Management
            </h3>
            <p className="mb-1 text-muted-foreground">
              Universität Sultan Moulay Slimane, Beni Mellal
            </p>
            <p className="text-sm text-muted-foreground">2021 – 2022</p>
          </div>

          {/* Abitur */}
          <div className="p-6 transition-all duration-300 shadow-md bg-background rounded-2xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Abitur in Empirische Wissenschaften (Zweig: Physik)
            </h3>
            <p className="mb-1 text-muted-foreground">
              Ibnou-El-Aouam-Gymnasium
            </p>
            <p className="text-sm text-muted-foreground">2020 – 2021</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="container py-10 space-y-10 my-14"
        id="experience"
      >
        {/* Title & Subtitle */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Weiterbildung & Praxiserfahrung
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Eine Übersicht meiner beruflichen Weiterbildungen und praktischen
            Erfahrungen im Bereich Fahrzeugdiagnose.
          </AnimatedText>
        </div>

        {/* Experience Cards */}
        <div className="grid justify-center gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {/* Weiterbildung – Kraftfahrzeugmechatroniker */}
          <div className="p-6 transition-all duration-300 shadow-md bg-muted rounded-2xl hover:shadow-lg">
            <div className="flex items-center justify-center w-full p-4 mb-4 bg-white rounded-xl h-44">
              <img
                src="/german.png"
                alt="German Training Center Logo"
                className="w-auto h-16"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              Weiterbildung für Kraftfahrzeugmechatroniker
            </h3>
            <p className="mb-1 text-muted-foreground">German Training Center</p>
            <p className="mb-3 text-sm text-muted-foreground">
              Januar 2025 – März 2025
            </p>
            <p className="text-muted-foreground">
              Vertiefung praktischer Kenntnisse in der Kfz-Diagnose, Wartung und
              Elektronik.
            </p>
          </div>

          {/* Praktische Ausbildung – Kfz-Diagnose */}
          <div className="p-6 transition-all duration-300 shadow-md bg-muted rounded-2xl hover:shadow-lg">
            <div className="flex items-center justify-center w-full p-4 mb-4 bg-white rounded-xl h-44">
              <img
                src="/atlantique.png"
                alt="Atlantik Ausbildungszentrum Logo"
                className="w-auto h-16"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              Praktische Ausbildung in der Kfz-Diagnose
            </h3>
            <p className="mb-1 text-muted-foreground">
              Ausbildungszentrum Atlantik
            </p>
            <p className="mb-3 text-sm text-muted-foreground">
              August 2023 – Februar 2024
            </p>
            <p className="text-muted-foreground">
              Umfassende praktische Erfahrung in Diagnosetechnik und
              Fehleranalyse von Fahrzeugen.
            </p>
          </div>
        </div>

        {/* 🎥 Video Section */}
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container py-10 space-y-10 my-14"
        id="gallery"
      >
        {/* Title & Subtitle */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Galerie
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Einblicke in meine Projekte, Schulungen und praktischen Erfahrungen.
          </AnimatedText>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["/image1.jpg", "/image2.jpg", "/image3.jpg"].map((src, index) => (
            <AnimatedSection key={index} delay={0.1 * index} direction="up">
              <div className="relative overflow-hidden transition-all duration-500 shadow-md rounded-2xl hover:shadow-xl group">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-64 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/40 group-hover:opacity-100"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <Video />
      </AnimatedSection>

      <AnimatedSection
        className="container py-10 space-y-6 bg-muted"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            ERFAHRUNG
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="#">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
