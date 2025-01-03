"use client";

import Header from "./parts/header";
import Footer from "./parts/footer";
import MainContent from "./parts/mainContent";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}
