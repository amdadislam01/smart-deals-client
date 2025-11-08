import React from "react";

const Testimonial = () => {
  const cardsData = [
    {
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/1c00546c7de621d6f80075132d662717-1762564302096/22262686-39ce-4255-940a-656b54b6224b.jpg",
      name: "MD Amdad Islam",
      handle: "@amdadislam01",
    },
    {
      image:
        "https://avatars.githubusercontent.com/u/92626624?v=4",
      name: "Zahidul Islam Mahim",
      handle: "@zahidulislammahim",
    },
    {
      image:
        "https://avatars.githubusercontent.com/u/78620963?v=4",
      name: "Md Rijoan Maruf",
      handle: "@mdrijoanmaruf",
    },
    {
      image:
        "https://avatars.githubusercontent.com/u/209346122?v=4",
      name: "Md Riyaz Akondo",
      handle: "@mdriyazakondo",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-5 rounded-xl mx-3 shadow-md bg-white hover:shadow-lg transition-all duration-300 w-64 sm:w-72 shrink-0">
      <div className="flex items-center gap-3">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold text-gray-900">{card.name}</p>
            <svg
              className="mt-0.5 fill-blue-500"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
              />
            </svg>
          </div>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-700">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <section className="py-16 bg-transparent">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#34699A] mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Hear from our happy customers who have experienced the difference.
          </p>
        </div>

        <div className="marquee-row w-full mx-auto max-w-[1505px] overflow-hidden relative">
          <div className="marquee-inner flex transform-gpu min-w-[200%] py-6">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
        </div>

        <div className="marquee-row w-full mx-auto max-w-[1505px] overflow-hidden relative mt-6">
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-6">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
