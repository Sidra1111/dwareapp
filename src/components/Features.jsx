import React from "react";
import {
  ShieldCheck,
  PieChart,
  Users,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Secure Access",
    description: "Robust user authentication and role-based access to protect your data.",
  },
  {
    icon: <PieChart className="w-8 h-8 text-blue-600" />,
    title: "Smart Dashboard",
    description: "Track performance, KPIs, and insights from a unified dashboard.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Team Collaboration",
    description: "Streamline communication and collaboration across departments.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-blue-600" />,
    title: "Attendance Tracker",
    description: "Manage and monitor attendance in real time, remotely or onsite.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-white" id="features">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose DwareApp?
        </h2>
        <p className="text-gray-500 mb-12">
          Powerful tools designed to simplify workforce management for modern businesses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
