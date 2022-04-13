import type { NextPage } from "next";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import landscape from "/public/images/hero/colorfulLandscape.webp";
import desigual from "/public/images/hero/desigualHero.jpg";
import oceanWaves from "/public/images/hero/oceanWaves.jpg";
import plantitas from "/public/images/hero/plantitas.jpg";
import purpleWave from "/public/images/hero/purpleWave.jpg";
import smoothWaves from "/public/images/hero/smoothWaves.jpg";

const Home: NextPage = () => {
  return <Hero content={content} />;
};

const content = [
  <Image src={landscape} alt="whatever" key="1" layout="fill" />,
  <Image src={desigual} alt="whatever" key="1" layout="fill" />,
  <Image src={oceanWaves} alt="whatever" key="1" layout="fill" />,
  <Image src={plantitas} alt="whatever" key="1" layout="fill" />,
  <Image src={purpleWave} alt="whatever" key="1" layout="fill" />,
  <Image src={smoothWaves} alt="whatever" key="1" layout="fill" />,
];

export default Home;
