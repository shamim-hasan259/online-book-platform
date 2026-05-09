import Banner from "@/components/Banner";
import BookMarquee from "@/components/BookMarquee ";
import Loading from "@/components/Loading";
import PopularBooks from "@/components/PopularBooks";
import Testimonials from "@/components/Testimonials ";
import WhyChooseUs from "@/components/WhyChooseUs ";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <BookMarquee/>
      <Suspense fallback={<Loading />}>
        <PopularBooks />
      </Suspense>
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
