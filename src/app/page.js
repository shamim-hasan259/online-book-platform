import Banner from "@/components/Banner";
import Loading from "@/components/Loading";
import PopularBooks from "@/components/PopularBooks";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading />}>
        <PopularBooks />
      </Suspense>
    </div>
  );
}
