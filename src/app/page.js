'use client'
import Footer from "@/components/footer/Footer";
import Body from "@/contents/home/body/earbud/Earbud";
import HeadPhones from "@/contents/home/body/headphone/HeadPhones";
import NeckBand from "@/contents/home/body/neckband/NeckBand";
import PartySpeakers from "@/contents/home/body/partyspeaker/PartySpeakers";
import SmartWatch from "@/contents/home/body/smartwatch/SmartWatch";
import WirelessSpeakers from "@/contents/home/body/wirelessspeakers/WirelessSpeakers";
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
