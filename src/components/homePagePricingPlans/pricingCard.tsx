"use client";

import { FaBolt } from "react-icons/fa";

interface PricingCardProps {
  title: string;
  tag?: string;
  subTitle: string;
  description: string;
  price: string;
  oldPrice?: string;
  features: string[];
  addOn?: boolean;
  highlight?: boolean;
  paymentLink?: string;
}

export default function PricingCard({
  title,
  tag,
  subTitle,
  description,
  price,
  oldPrice,
  features,
  addOn,
  highlight,
  paymentLink,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white border rounded-[0.3rem] p-8 flex-1 max-w-[25rem] min-w-[22rem] text-left relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] max-[768px]:max-w-[90%] max-[768px]:min-w-0 max-[768px]:p-6 ${highlight ? "border-2 border-[#ff4c00]" : "border border-black"}`}
    >
      {tag && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[0.9rem] font-semibold rounded px-3 py-1 ${
            tag === "MOST POPULAR" ? "bg-[#ff4c00]" : "bg-[#111]"
          }`}
        >
          {tag}
        </div>
      )}

      <h4 className="text-[#ff4c00] text-[1.5rem] font-bold mb-1 max-[768px]:text-[1.3rem] max-[480px]:text-[1.2rem]">
        {title}
      </h4>
      <h2 className="text-[2.2rem] font-extrabold text-[#111] max-[768px]:text-[1.9rem] max-[480px]:text-[1.7rem]">
        {subTitle}
      </h2>
      <p className="text-[#555] text-base mb-6 max-[768px]:text-[0.9rem]">
        {description}
      </p>

      <hr className="-mt-1 mb-3 text-black" />

      <ul className="list-none p-0 mb-6 min-h-[12rem] max-[480px]:min-h-0">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-base text-black mb-2 max-[768px]:text-[0.9rem] max-[480px]:text-[0.85rem]"
          >
            <FaBolt className="text-[#ff4c00] text-base" /> {feature}
          </li>
        ))}
      </ul>

      {addOn && (
        <div className="bg-[#f8f7f6] border border-[#f3dfd5] rounded-[0.4rem] p-4 mb-6">
          <h5 className="text-[1.3rem] font-bold mb-1 text-black max-[768px]:text-[1.1rem]">
            Booster Add-On
          </h5>
          <p className="text-[0.85rem] text-black mb-2">
            Add more application to boost your reach & visibility.
          </p>
          <ul className="list-none p-0 m-0 text-[0.85rem] text-[#333]">
            <li>☐ +250 Extra Applications — $130</li>
            <li>☐ +500 Extra Applications — $220</li>
            <li>☐ +1000 Extra Applications — $380</li>
          </ul>
        </div>
      )}

      <div className="flex items-baseline gap-2.5 mb-1">
        <h3 className="text-[1.8rem] font-bold text-black max-[768px]:text-[1.6rem]">
          {price}
        </h3>
        {oldPrice && (
          <span className="text-base text-[#999] line-through max-[768px]:text-sm">
            {oldPrice}
          </span>
        )}
      </div>

      <p className="text-[0.85rem] text-[#555] mb-5">
        Total {subTitle.toLowerCase()} included
      </p>

      <button
        className="bg-black text-white border-none py-[0.9rem] px-4 font-semibold text-[0.95rem] rounded-[0.4rem] w-full cursor-pointer transition-all duration-300 hover:bg-[#111] max-[768px]:text-[0.9rem] max-[768px]:py-3 max-[480px]:text-[0.85rem] max-[480px]:py-[0.7rem] max-[480px]:px-[0.9rem]"
        onClick={() => {
          if (paymentLink) {
            window.open(paymentLink, "_blank");
          }
        }}
      >
        Get Me Interview →
      </button>
    </div>
  );
}
