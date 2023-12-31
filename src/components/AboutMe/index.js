// import { useState } from 'react'
import { TitleSection } from "@components/TitleSection";
import Image from "next/image";
import cara from "../../../public/cara.jpg";
import { useLanguaje } from "context/useLanguaje";
export function AboutMe() {
  const { lang } = useLanguaje();
  return (
    <>
      <section id="about" className="m-auto pt-12 lg:pt-24">
        <div className="relative flex max-w-[1200px] flex-col items-center gap-14 rounded-md p-8 md:grid-cols-5 lg:grid lg:bg-primary-400/50">
          <Image
            src={cara.src}
            width="370"
            height="350"
            className="rounded-lg lg:absolute lg:left-10 w-72 xl:w-96"
            alt="Mario Ariel Galarza Mancedo"
          />
          <div className="col-span-4 col-start-3 flex flex-col items-center gap-4">
            <TitleSection>{lang.aboutMe.title}</TitleSection>
            {lang.aboutMe.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
