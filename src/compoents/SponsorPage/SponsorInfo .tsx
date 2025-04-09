import React from "react";

interface SponsorInfoProps {
  name: string;
  amount: string;
  description: string;
}

const SponsorInfo: React.FC<SponsorInfoProps> = ({
  name,
  amount,
  description,
}) => {
  return (
    <tr className="hover:bg-slate-700/20 transition-colors">
      <td className="px-6 py-4 text-slate-200">{name}</td>
      <td className="px-6 py-4 text-emerald-400 font-medium">{amount}</td>
      <td className="px-6 py-4 text-slate-400">{description}</td>
    </tr>
  );
};

export default SponsorInfo;
