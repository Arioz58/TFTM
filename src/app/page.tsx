import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Menu from "@/sections/Menus";
import Horaires from "@/sections/Horaires";
import Footer from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Horaires />
      <Footer />
      <Analytics />
    </>
  );
}
