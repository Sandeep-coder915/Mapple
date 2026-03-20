import { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import PDFViewer from '../components/PDFViewer.jsx'
import { motion } from 'framer-motion'

export default function ProductDetail() {
  const _motion = motion
  const { productId } = useParams()
  const navigate = useNavigate()

  const product = useMemo(() => productsData.find((p) => p.id === productId), [productId])

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl p-6">
        <div className="glass p-6 rounded-xl border border-green-100">
          <p className="text-gray-600">Product not found.</p>
          <button className="mt-3 rounded-lg border border-mapple-400 px-4 py-2 text-mapple-700" onClick={() => navigate('/products')}>Back to Products</button>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <button className="text-sm font-medium text-mapple-600 hover:underline" onClick={() => navigate(-1)}>&larr; Back</button>

      <section className="glass mt-4 rounded-3xl border border-green-100 p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-mapple-900">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-600">{product.indication}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>
          <img src={product.image} alt={product.name} className="h-44 w-full rounded-xl object-cover lg:col-span-1" />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass rounded-xl border border-green-100 p-4">
            <p className="text-xs text-gray-500">Indication</p>
            <p className="font-semibold text-mapple-800">{product.indication}</p>
          </div>
          <div className="glass rounded-xl border border-green-100 p-4">
            <p className="text-xs text-gray-500">Dosage</p>
            <p className="font-semibold text-mapple-800">{product.dosage}</p>
          </div>
          <div className="glass rounded-xl border border-green-100 p-4">
            <p className="text-xs text-gray-500">Form</p>
            <p className="font-semibold text-mapple-800">Tablet / Capsule</p>
          </div>
          <div className="glass rounded-xl border border-green-100 p-4">
            <p className="text-xs text-gray-500">Category</p>
            <p className="font-semibold text-mapple-800">{product.category}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <motion.section whileHover={{ scale: 1.01 }} className="glass rounded-xl border border-green-100 p-5">
            <h3 className="font-semibold text-mapple-800">Composition</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
              {product.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient} - clinically indicated botanical action.</li>
              ))}
            </ul>
          </motion.section>

          <motion.section whileHover={{ scale: 1.01 }} className="glass rounded-xl border border-green-100 p-5">
            <h3 className="font-semibold text-mapple-800">Mechanism of Action</h3>
            <p className="mt-2 text-sm text-gray-700">{product.mechanism}</p>
          </motion.section>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <section className="glass rounded-xl border border-green-100 p-5">
            <h3 className="font-semibold text-mapple-800">Clinical Indications</h3>
            <p className="mt-2 text-sm text-gray-700">{product.indication}. Ideal for long-term physician guided treatment plans.</p>
          </section>

          <section className="glass rounded-xl border border-green-100 p-5">
            <h3 className="font-semibold text-mapple-800">Key Benefits</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6" aria-label="Research and evidence">
          <h3 className="text-lg font-bold text-mapple-900">Research & Evidence</h3>
          <p className="mt-1 text-sm text-gray-600">Mapped PDF references and clinical summaries.</p>
          <div className="mt-4 space-y-4">
            {product.pdfLinks.map((pdf) => (
              <PDFViewer key={pdf.id} pdf={pdf} />
            ))}
          </div>
        </section>

        <section className="mt-6 glass rounded-xl border border-green-100 p-5">
          <h3 className="text-lg font-bold text-mapple-900">MR Contact (Doctor Support)</h3>
          <p className="text-sm text-gray-600">Connect with your medical representative for a clinical protocol conversation.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href="tel:+911234567890" className="rounded-lg bg-mapple-500 px-4 py-2 text-white hover:bg-mapple-600">Call MR</a>
            <a href="https://wa.me/911234567890?text=Hello%20MAPPL%20Clinical%20Team%20I%20need%20protocol%20details" target="_blank" rel="noreferrer" className="rounded-lg border border-mapple-400 px-4 py-2 text-mapple-700 hover:bg-mapple-50">WhatsApp MR</a>
          </div>
        </section>
      </section>
    </main>
  )
}
