'use client'
import Footer from "@/components/footer/Footer";
import Body from "@/contents/home/body/Earbud";
import HeadPhones from "@/contents/home/body/HeadPhones";
import NeckBand from "@/contents/home/body/NeckBand";
import PartySpeakers from "@/contents/home/body/PartySpeakers";
import SmartWatch from "@/contents/home/body/SmartWatch";
import WirelessSpeakers from "@/contents/home/body/WirelessSpeakers";
import ProductCarousel from "@/contents/home/productCarousel/ProductCarousel";



export default function Hom() {
  return (
    <main >
      {/* <Navbar/> */}
      <Body/>
      <SmartWatch/>
      <NeckBand/>
      <HeadPhones/>
      <WirelessSpeakers/>
      <PartySpeakers/>
      {/* <Footer/> */}
    

    </main>
  );
}
