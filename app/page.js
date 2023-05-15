"use client";
import "./globals.css";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Projects from "./projects/page";
import About from "./about/page";
import Link from "next/link";

export default function page() {
  return (
    <div className="mx-auto">
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

