import * as fs from "fs";
import Image from "next/image";
import path from "path";
import { useMemo } from "react";
import Hero from "../components/Hero/Hero";

interface HomeProps {
  heroImages: string[];
}

const Home = ({ heroImages }: HomeProps): JSX.Element => {
  const heroContent = useMemo(() => {
    return heroImages.map((image) => (
      <Image
        src={image}
        alt={image.split("/").pop()}
        key={image.split("/").pop()}
        layout="responsive"
        width="1920"
        height="851"
        priority
        quality={100}
      />
    ));
  }, [heroImages]);

  return <Hero content={heroContent} slideDuration={1000} />;
};

export const getStaticProps = () => {
  const heroContentDirectory = path.join(process.cwd(), "public/images/hero");
  const files = fs.readdirSync(heroContentDirectory);
  const heroImages = files.map((file) => `/images/hero/${file}`);

  return { props: { heroImages } };
};

export default Home;
