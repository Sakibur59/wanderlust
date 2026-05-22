import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
    <Featured></Featured>
    <WhyChooseUs></WhyChooseUs>
    <Testimonials></Testimonials>
    </div>
  );
}
