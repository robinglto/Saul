import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "components/Footer";
import { Contactos } from "components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saul | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Contactos />
      <Footer />
    </div>
  );
}