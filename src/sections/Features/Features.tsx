import { siteConfig } from "../../config/siteConfig";
import { CheckCircle } from "lucide-react";

export const Features = () => (
  <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Why Choose {siteConfig.name}?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {siteConfig.features.map((f, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <CheckCircle className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-slate-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
