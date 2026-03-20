export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Company Header */}
      <section className="glass p-8 rounded-3xl border border-green-100 mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-mapple-900 mb-2">Maharishi Ayurveda</h1>
          <p className="text-lg text-mapple-600 font-semibold">The Only Consciousness-Based Ayurveda Company</p>
          <p className="text-gray-600 mt-2">Authentic Ayurveda for Modern Living</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <div className="glass rounded-xl border border-green-100 p-4">
            <h3 className="text-lg font-semibold text-mapple-800 mb-2">Company Expertise</h3>
            <p className="text-gray-700">Ayurvedic expertise of more than 35 years, combining ancient Vedic wisdom with modern scientific understanding to create consciousness-based formulations.</p>
          </div>
          <div className="glass rounded-xl border border-green-100 p-4">
            <h3 className="text-lg font-semibold text-mapple-800 mb-2">Certifications</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ ISO 9001 &amp; GMP Certified Company</li>
              <li>✓ AYUSH Premium Mark Certification</li>
              <li>✓ COSMOS Organic Certified</li>
              <li>✓ WHO-GMP Guidelines Compliant</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="glass p-8 rounded-3xl border border-green-100 mb-8">
        <h2 className="text-2xl font-bold text-mapple-900 mb-4">Vision &amp; Mission</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-mapple-800 mb-3">Our Vision</h3>
            <p className="text-gray-700">Maharishi Ayurveda operates in 40+ countries with an aim to bring Ayurveda benefits to the modern world through personalized care, natural and holistic solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-mapple-800 mb-3">Our Approach</h3>
            <p className="text-gray-700">Distinguished by consciousness-based Ayurvedic approach to helping individuals achieve holistic wellness. Formulations are crafted in a "Satvik" atmosphere influenced by Vedic chants, with consciousness purified through regular Transcendental Meditation practice.</p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="glass p-8 rounded-3xl border border-green-100 mb-8">
        <h2 className="text-2xl font-bold text-mapple-900 mb-6">Our Legacy</h2>
        <div className="space-y-4">
          <div className="flex gap-4 border-l-4 border-mapple-500 pl-4">
            <div className="text-mapple-600 font-bold text-lg">1986</div>
            <div>
              <h4 className="font-semibold text-mapple-800">Maharishi Ayurveda Established</h4>
              <p className="text-sm text-gray-600">Foundation of consciousness-based Ayurvedic healthcare solutions</p>
            </div>
          </div>
          <div className="flex gap-4 border-l-4 border-mapple-500 pl-4">
            <div className="text-mapple-600 font-bold text-lg">1989</div>
            <div>
              <h4 className="font-semibold text-mapple-800">First Research Published</h4>
              <p className="text-sm text-gray-600">Launch of scientific validation of Ayurvedic formulations</p>
            </div>
          </div>
          <div className="flex gap-4 border-l-4 border-mapple-500 pl-4">
            <div className="text-mapple-600 font-bold text-lg">1999</div>
            <div>
              <h4 className="font-semibold text-mapple-800">International Operations</h4>
              <p className="text-sm text-gray-600">Expansion to global markets with presence in 40+ countries</p>
            </div>
          </div>
          <div className="flex gap-4 border-l-4 border-mapple-500 pl-4">
            <div className="text-mapple-600 font-bold text-lg">2000</div>
            <div>
              <h4 className="font-semibold text-mapple-800">HACCP Certification</h4>
              <p className="text-sm text-gray-600">Hazard Analysis &amp; Critical Control Point compliance achieved</p>
            </div>
          </div>
          <div className="flex gap-4 border-l-4 border-mapple-500 pl-4">
            <div className="text-mapple-600 font-bold text-lg">2007</div>
            <div>
              <h4 className="font-semibold text-mapple-800">GLP &amp; WHO-GMP Guidelines</h4>
              <p className="text-sm text-gray-600">Compliance with international quality standards</p>
            </div>
          </div>
          <div className="flex gap-4 border-l-4 border-mapple-500 pl-4">
            <div className="text-mapple-600 font-bold text-lg">2017</div>
            <div>
              <h4 className="font-semibold text-mapple-800">COSMOS Organic Certification</h4>
              <p className="text-sm text-gray-600">Recognition for organic and sustainable practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Partnerships */}
      <section className="glass p-8 rounded-3xl border border-green-100 mb-8">
        <h2 className="text-2xl font-bold text-mapple-900 mb-6">Pioneer in Ayurvedic Research</h2>
        <p className="text-gray-700 mb-6">Maharishi Ayurveda collaborates with world-renowned medical and research institutions globally:</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass rounded-lg p-4 border border-green-100">
            <h4 className="font-semibold text-mapple-700 text-sm mb-2">India</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• AIIMS Delhi &amp; Jodhpur</li>
              <li>• SMS Medical College, Jaipur</li>
              <li>• KGMC, Lucknow</li>
            </ul>
          </div>
          <div className="glass rounded-lg p-4 border border-green-100">
            <h4 className="font-semibold text-mapple-700 text-sm mb-2">USA</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Maharishi University, Fairfield</li>
              <li>• University of Kansas City</li>
              <li>• Ohio State University</li>
            </ul>
          </div>
          <div className="glass rounded-lg p-4 border border-green-100">
            <h4 className="font-semibold text-mapple-700 text-sm mb-2">International</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• University of Brescia, Italy</li>
              <li>• Gifu University, Japan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="glass p-8 rounded-3xl border border-green-100">
        <h2 className="text-2xl font-bold text-mapple-900 mb-6">Our Healthcare Facilities</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-xl border border-green-100 p-4">
            <h4 className="font-semibold text-mapple-800 mb-2">Maharishi Ayurveda Hospital</h4>
            <p className="text-sm text-gray-600">Shalimar Bagh, Delhi - Equipped with state-of-the-art facilities and skilled healthcare practitioners</p>
          </div>
          <div className="glass rounded-xl border border-green-100 p-4">
            <h4 className="font-semibold text-mapple-800 mb-2">Wellness Clinic &amp; Retreat</h4>
            <p className="text-sm text-gray-600">Rishikesh, Uttarakhand - Dedicated to health, healing, and rejuvenation therapies</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-green-200">
          <h3 className="font-semibold text-mapple-800 mb-2">Contact Information</h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>H.O.:</strong> Flat No. 40, Pocket-H, Ground Floor, Sarita Vihar, New Delhi-110076</p>
            <p><strong>Work:</strong> Plot No. 83, DLF Phase-I, Industrial Area, Faridabad (HR)</p>
            <p><strong>Phone:</strong> +91-8260044488</p>
            <p><strong>Email:</strong> info@maharishiayurvedaindia.com</p>
            <p><strong>Website:</strong> www.maharishiayurvedaindia.com</p>
          </div>
        </div>
      </section>
    </main>
  )
}
