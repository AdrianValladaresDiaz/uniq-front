import type { NextPage } from "next";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import landscape from "/public/images/colorfulLandscape.webp";
import stairs from "/public/images/escaleras.jpg";
import oceanWaves from "/public/images/oceanWaves.jpg";
import plantitas from "/public/images/plantitas.jpg";
import purpleWave from "/public/images/purpleWave.jpg";
import smoothWaves from "/public/images/smoothWaves.jpg";

const Home: NextPage = () => {
  return <Hero content={content} />;
};

const content = [
  <Image src={landscape} alt="whatever" key="1" layout="fill" />,
  <Image src={stairs} alt="whatever" key="1" layout="fill" />,
  <Image src={oceanWaves} alt="whatever" key="1" layout="fill" />,
  <Image src={plantitas} alt="whatever" key="1" layout="fill" />,
  <Image src={purpleWave} alt="whatever" key="1" layout="fill" />,
  <Image src={smoothWaves} alt="whatever" key="1" layout="fill" />,
];

export default Home;
