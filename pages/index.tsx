import type { NextPage } from "next";
import Hero from "../components/Hero/Hero";

const Home: NextPage = () => {
  const content = [1, 2, 3, 4];
  return <Hero content={content} />;
};

export default Home;
