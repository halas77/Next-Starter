"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Tags from "@/components/Tags";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Tags />
      <Footer />
    </>
  );
}
