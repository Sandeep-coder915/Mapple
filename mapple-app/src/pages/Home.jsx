import { useMemo, useState } from 'react'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Footer from '../components/Footer.jsx'
import productsData from '../data/products.json'
import { motion } from 'framer-motion'

const M = motion

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = useMemo(
    () => [...new Set(productsData.map((p) => p.category).filter(Boolean))].sort(),
    []
  )

  const featured = useMemo(() => {
    if (!selectedCategory) return productsData.slice(0, 6)
    return productsData.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="glass p-6 rounded-3xl border border-green-100 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <M.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
              <p className="inline-flex items-center rounded-full bg-mapple-100 px-3 py-1 text-xs font-semibold text-mapple-700">
                Clinical Evidence-Based Solutions
              </p>
              <h1 className="text-3xl font-bold text-mapple-900 sm:text-4xl leading-tight">
                Premium Ayurvedic Formulations for Modern Healthcare
              </h1>
              <p className="text-gray-700 leading-relaxed">
                20+ clinically researched Ayurvedic products combining ancient wisdom with modern science. Designed for healthcare practitioners seeking safe, effective, evidence-backed natural solutions.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <a href="#products" className="rounded-lg bg-mapple-500 px-5 py-2 text-white shadow hover:bg-mapple-600 font-medium transition">
                  Explore Products
                </a>
                <a href="/research" className="rounded-lg border border-mapple-300 px-5 py-2 text-mapple-700 hover:bg-mapple-50 font-medium transition">
                  Research Data
                </a>
              </div>
            </M.div>
            <M.img
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyM1IQVG8Ifp43BDlUQ1vsQqeKqdIqnWrR3w&s"
              className=" w-full object-cover rounded-2xl shadow-lg"
              alt="Ayurveda Solutions"
            />
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="glass p-4 rounded-xl border border-green-100 text-center">
            <div className="text-2xl font-bold text-mapple-600">20+</div>
            <p className="text-sm text-gray-600 mt-1">Clinically Researched Products</p>
          </div>
          <div className="glass p-4 rounded-xl border border-green-100 text-center">
            <div className="text-2xl font-bold text-mapple-600">13+</div>
            <p className="text-sm text-gray-600 mt-1">Disease Categories</p>
          </div>
          <div className="glass p-4 rounded-xl border border-green-100 text-center">
            <div className="text-2xl font-bold text-mapple-600">100%</div>
            <p className="text-sm text-gray-600 mt-1">Natural Formulations</p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-mapple-900">Product Categories</h2>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory('')}
                className="text-sm text-mapple-600 hover:text-mapple-700 font-medium"
              >
                Clear Filter
              </button>
            )}
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <M.button
                key={category}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                className={`p-3 rounded-lg border transition font-medium text-sm ${
                  selectedCategory === category
                    ? 'bg-mapple-500 border-mapple-500 text-white shadow-md'
                    : 'bg-white border-green-200 text-gray-700 hover:border-mapple-300'
                }`}
              >
                {category}
              </M.button>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="mt-10">
          <h2 className="text-xl font-bold text-mapple-900 mb-2">
            {selectedCategory ? `${selectedCategory} Products` : 'Featured Products'}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {selectedCategory
              ? `Showing ${featured.length} formulation${featured.length !== 1 ? 's' : ''}.`
              : 'Explore our most popular evidence-based formulations.'}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Clinical Highlights */}
        <section id="research" className="mt-12 glass p-6 rounded-2xl border border-green-100">
          <h2 className="text-xl font-semibold text-mapple-900 mb-4">Clinically Validated Results</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-mapple-700 text-sm mb-2">Diabetes Management (Glucomap)</h3>
              <p className="text-sm text-gray-700">HbA1c reduction of 26% in 6 months. Fasting glucose improved from 128.5 to 106.8 mg/dL. Research: AIIMS, New Delhi.</p>
            </div>
            <div>
              <h3 className="font-semibold text-mapple-700 text-sm mb-2">Cognitive Enhancement (Vidyarthi Amrit)</h3>
              <p className="text-sm text-gray-700">Mean IQ improvement of 9.83 points in 5 months. 41.18% showed non-verbal intelligence improvement. Research: Maharishi University, USA.</p>
            </div>
            <div>
              <h3 className="font-semibold text-mapple-700 text-sm mb-2">Cardiovascular Health (Lipomap)</h3>
              <p className="text-sm text-gray-700">13% triglyceride reduction vs 8% for Lovastatin. HDL improvement superior to statin therapy. Research: AIIMS, New Delhi.</p>
            </div>
            <div>
              <h3 className="font-semibold text-mapple-700 text-sm mb-2">Liver Health (Livomap)</h3>
              <p className="text-sm text-gray-700">Significant fat reduction in NAFLD patients. 95% relief from abdominal pain. Research: AIIMS, New Delhi.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 bg-gradient-to-r from-mapple-50 to-green-50 p-8 rounded-2xl border border-mapple-200 text-center">
          <h2 className="text-2xl font-bold text-mapple-900">Ready to Explore Evidence-Based Solutions?</h2>
          <p className="text-gray-700 mt-2">Access clinical data, research summaries, and product recommendations for your practice.</p>
          <a href="/products" className="inline-block mt-4 rounded-lg bg-mapple-500 px-6 py-3 text-white font-medium shadow hover:bg-mapple-600 transition">
            View All Products
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
