'use client';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: November 10, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This Cookie Policy explains how Lawgical Station (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar technologies 
                when you visit our website https://lawgicalstation.com (&quot;Website&quot;).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium text-[#C9A34A]">
                By using our Website, you consent to the use of cookies as described in this policy.
              </p>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. 
                They help websites remember information about your visit, such as your preferred language and other settings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies make your next visit easier and the site more useful to you. Cookies play an important role. 
                Without them, using the web would be a much more frustrating experience.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>To ensure our website functions properly</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze how visitors use our website</li>
                <li>To improve our website&apos;s performance and user experience</li>
                <li>To provide personalized content and advertisements</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🍪 Necessary Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    These cookies are essential for the website to function properly. They cannot be disabled and are set automatically.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Session management cookies</li>
                      <li>Security cookies</li>
                      <li>Form submission cookies</li>
                      <li>Load balancing cookies</li>
                    </ul>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Analytics Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Google Analytics cookies</li>
                      <li>Page view tracking</li>
                      <li>User behavior analysis</li>
                      <li>Website performance metrics</li>
                    </ul>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Marketing Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Facebook Pixel cookies</li>
                      <li>Google Ads cookies</li>
                      <li>Retargeting cookies</li>
                      <li>Social media integration cookies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some cookies on our website are set by third-party services. We have no control over these cookies. 
                These third parties may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Google Fonts:</strong> For loading web fonts</li>
                <li><strong>WhatsApp:</strong> For WhatsApp integration</li>
                <li><strong>Social Media Platforms:</strong> For social sharing features</li>
                <li><strong>Analytics Providers:</strong> For website analytics</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Please refer to the respective privacy policies of these third parties for more information about their cookie practices.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Cookie Consent Banner</h3>
                  <p className="text-blue-800 text-sm">
                    When you first visit our website, you&apos;ll see a cookie consent banner where you can choose your preferences.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Browser Settings</h3>
                  <p className="text-green-800 text-sm">
                    You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">Footer Link</h3>
                  <p className="text-yellow-800 text-sm">
                    You can change your cookie preferences anytime by clicking &quot;Cookie Settings&quot; in our website footer.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser-Specific Instructions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here&apos;s how to manage cookies in popular browsers:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Google Chrome</h3>
                  <p className="text-sm text-gray-700">
                    Settings → Privacy and security → Cookies and other site data
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Mozilla Firefox</h3>
                  <p className="text-sm text-gray-700">
                    Settings → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Safari</h3>
                  <p className="text-sm text-gray-700">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Microsoft Edge</h3>
                  <p className="text-sm text-gray-700">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you choose to disable cookies, please note that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Some features of our website may not function properly</li>
                <li>We may not be able to remember your preferences</li>
                <li>Your browsing experience may be less personalized</li>
                <li>We may not be able to provide certain services</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will notify you of any material changes by posting the updated policy on this page with a new effective date.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  📧 <a href="mailto:info@lawgicalstation.com" className="text-[#C9A34A] hover:text-[#B8923A]">info@lawgicalstation.com</a>
                </p>
                <p className="text-gray-700">
                  📍 AVK Lawgical Station Private Limited<br />
                  C-23, S-4/14, Second Floor, Sanjay Place, Agra, Uttar Pradesh – 282002
                </p>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Our Commitment */}
            <section className="bg-gradient-to-br from-[#C9A34A] to-[#B8923A] text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">🍪 Our Cookie Commitment</h2>
              <blockquote className="text-lg italic leading-relaxed">
                &quot;We believe in transparency and giving you control over your data.<br />
                Our cookie practices are designed to enhance your experience while respecting your privacy choices.&quot;
              </blockquote>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
