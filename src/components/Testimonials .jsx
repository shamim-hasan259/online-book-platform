import Image from "next/image";
import woman1 from "../assets/female1.avif";
import woman2 from "../assets/female12.jpg";
import man from "../assets/man.jpg";
const Testimonials = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col justify-center">
            <Image
              src={woman1}
              alt="womenImg"
              className="rounded-full mx-auto w-[50px] h-[50px] "
            />
            <p className="text-gray-600 mb-4 italic text-center">
              {`"This platform makes borrowing books so easy. The UI is clean and modern!"`}
            </p>
            <h4 className="font-semibold text-purple-600 text-center">
              Emily Carter
            </h4>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Image
              src={man}
              alt="womenImg"
              className="rounded-full mx-auto w-[50px] h-[50px] "
            />
            <p className="text-gray-600 mb-4 italic text-center">
              {`"I love how fast I can find and borrow books. Great experience!"`}
            </p>
            <h4 className="font-semibold text-purple-600 text-center">
              Michael Johnson
            </h4>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Image
              src={woman2}
              alt="womenImg"
              className="rounded-full mx-auto w-[50px] h-[50px]"
            />
            <p className="text-gray-600 mb-4 italic text-center">
              {`"Works perfectly on my phone. Highly recommended for book lovers!"`}
            </p>
            <h4 className="font-semibold text-purple-600 text-center">
              Sophia Williams
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
