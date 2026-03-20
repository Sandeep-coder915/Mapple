import { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import PDFViewer from '../components/PDFViewer.jsx'
import { motion } from 'framer-motion'

const M = motion

export default function ProductDetail() {
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

      {/* Product Header */}
      <section className="glass mt-4 rounded-3xl border border-green-100 p-6 mb-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-mapple-900">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-600">{product.indication}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>
            {product.heritage && (
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-sm"><strong>Heritage:</strong> Established {product.heritage.year_established}</p>
                <p className="text-sm text-gray-600 mt-1">Created by leading Ayurvedic scholars and physicians</p>
              </div>
            )}
          </div>
          <img src={product.image} alt={product.name} className="h-56 w-full rounded-xl object-cover lg:col-span-1" />
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="glass rounded-xl border border-green-100 p-4">
          <p className="text-xs text-gray-500">Indication</p>
          <p className="font-semibold text-mapple-800 mt-1 text-sm">{product.indication}</p>
        </div>
        <div className="glass rounded-xl border border-green-100 p-4">
          <p className="text-xs text-gray-500">Dosage</p>
          <p className="font-semibold text-mapple-800 mt-1 text-sm">{product.dosage}</p>
        </div>
        <div className="glass rounded-xl border border-green-100 p-4">
          <p className="text-xs text-gray-500">Form</p>
          <p className="font-semibold text-mapple-800 mt-1 text-sm">{product.form || 'Tablets / Capsules'}</p>
        </div>
        <div className="glass rounded-xl border border-green-100 p-4">
          <p className="text-xs text-gray-500">Category</p>
          <p className="font-semibold text-mapple-800 mt-1 text-sm">{product.category}</p>
        </div>
      </section>

      {/* Composition & Mechanism */}
      <section className="grid gap-4 lg:grid-cols-2 mb-6">
        <M.div whileHover={{ scale: 1.01 }} className="glass rounded-xl border border-green-100 p-5">
          <h3 className="font-semibold text-mapple-800 text-lg">Composition</h3>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            {product.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </M.div>

        <M.div whileHover={{ scale: 1.01 }} className="glass rounded-xl border border-green-100 p-5">
          <h3 className="font-semibold text-mapple-800 text-lg">Mechanism of Action</h3>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">{product.mechanism}</p>
        </M.div>
      </section>

      {/* Key Benefits */}
      <section className="glass rounded-xl border border-green-100 p-6 mb-6">
        <h3 className="font-semibold text-mapple-800 text-lg mb-4">Key Benefits</h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {product.benefits.map((benefit, idx) => (
            <li key={idx} className="flex gap-2 text-sm text-gray-700">
              <span className="text-mapple-600 font-bold">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Clinical Highlights */}
      {product.clinicalHighlights && (
        <section className="glass rounded-xl border border-green-100 p-6 mb-6">
          <h3 className="font-semibold text-mapple-800 text-lg mb-4">Clinical Research Highlights</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(product.clinicalHighlights).map(([key, value]) => (
              <div key={key} className="glass rounded-lg border border-green-100 p-3">
                <p className="text-xs text-gray-500 uppercase font-semibold">{key.replace(/_/g, ' ')}</p>
                <p className="text-sm font-bold text-mapple-700 mt-2">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Research Partners */}
      {product.researchPartners && (
        <section className="glass rounded-xl border border-green-100 p-6 mb-6">
          <h3 className="font-semibold text-mapple-800 text-lg mb-4">Research Partnerships</h3>
          <p className="text-sm text-gray-600 mb-4">Collaboration with world-renowned institutions:</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.researchPartners.map((partner, idx) => (
              <div key={idx} className="glass rounded-lg border border-green-100 p-3">
                <p className="text-sm text-mapple-700 font-medium">{partner}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Clinical Indications */}
      <section className="glass rounded-xl border border-green-100 p-6 mb-6">
        <h3 className="font-semibold text-mapple-800 text-lg">Clinical Indications</h3>
        <p className="mt-3 text-sm text-gray-700">{product.indication}</p>
        <p className="mt-2 text-sm text-gray-600">Ideal for long-term physician-guided treatment plans and integrative healthcare protocols.</p>
      </section>

      {/* Certifications */}
      {product.certifications && (
        <section className="glass rounded-xl border border-green-100 p-6 mb-6">
          <h3 className="font-semibold text-mapple-800 text-lg mb-4">Quality Certifications</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {product.certifications.map((cert, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-gray-700">
                <span className="text-mapple-600 font-bold">✓</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* PDF Research References */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-mapple-900 mb-4">Research &amp; Evidence</h3>
        <p className="text-sm text-gray-600 mb-4">Mapped PDF references and clinical summaries from world-renowned research institutions.</p>
        <div className="space-y-4">
          {product.pdfLinks.map((pdf) => (
            <PDFViewer key={pdf.id} pdf={pdf} />
          ))}
        </div>
      </section>

      {/* Doctor Contact */}
      <section className="glass rounded-xl border border-green-100 p-6 mb-6">
        <h3 className="text-lg font-bold text-mapple-900 mb-3">Clinical Protocol Support</h3>
        <p className="text-sm text-gray-600 mb-4">Connect with our medical team for clinical protocol discussions and physician consultation.</p>
        <div className="flex flex-wrap gap-3">
          <a href="tel:+918260044488" className="rounded-lg bg-mapple-500 px-4 py-2 text-white hover:bg-mapple-600 text-sm font-semibold">Call Medical Team</a>
          <a href="https://wa.me/918260044488?text=Hello%20I%20need%20clinical%20protocol%20details%20for%20Amrit%20Kalash" target="_blank" rel="noreferrer" className="rounded-lg border border-mapple-400 px-4 py-2 text-mapple-700 hover:bg-mapple-50 text-sm font-semibold">WhatsApp Consultation</a>
          <a href="mailto:info@maharishiayurvedaindia.com" className="rounded-lg border border-mapple-400 px-4 py-2 text-mapple-700 hover:bg-mapple-50 text-sm font-semibold">Email Details</a>
        </div>
      </section>
    </main>
  )
}
