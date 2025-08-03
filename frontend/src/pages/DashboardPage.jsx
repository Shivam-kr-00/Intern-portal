import React, { useEffect, useState } from "react";
import { BadgePercent, Gift, UserCircle } from "lucide-react"; // modern icons

const DashboardPage = () => {
  const [data, setData] = useState({
    name: "",
    referralCode: "",
    donations: 0,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setData({
        name: user.name,
        referralCode: `${user.name.toLowerCase()}2025`,
        donations: 1000,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-500 bg-yellow-100 text-center mb-8 p-2 rounded-2xl">
          Intern Dashboard
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col sm:flex-row items-center gap-6">
          <UserCircle className="w-16 h-16 text-blue-500" />
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-1">
              Welcome, <span className="text-blue-600">{data.name}</span>
            </h2>
            <p className="text-gray-600">
              <strong>Referral Code:</strong>{" "}
              <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">
                {data.referralCode}
              </span>
            </p>
            <p className="text-gray-600 mt-1">
              <strong>Total Donations:</strong>{" "}
              <span className="text-green-600 font-semibold">
                ₹{data.donations}
              </span>
            </p>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
            <Gift className="w-6 h-6" />
            Rewards / Unlockables
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg">
              <span className="text-gray-800">Raise ₹100</span>
              <BadgePercent className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-600">🎖️ Badge</span>
            </div>
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg">
              <span className="text-gray-800">Raise ₹500</span>
              <BadgePercent className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-600">🎓 Mentorship</span>
            </div>
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg">
              <span className="text-gray-800">Raise ₹1000</span>
              <BadgePercent className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-green-600">📜 Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
