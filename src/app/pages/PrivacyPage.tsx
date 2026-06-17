export function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#F7F5F2', minHeight: '100vh' }}>
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <h1 
          className="text-[2.25rem] md:text-[2.75rem] leading-[1.2] tracking-[-0.015em] mb-12"
          style={{ 
            fontFamily: 'Fraunces, serif',
            fontWeight: 400,
            color: '#2B2B2B'
          }}
        >
          Privacy Policy
        </h1>

        <div 
          className="space-y-6 text-base leading-relaxed"
          style={{ 
            fontFamily: 'Fraunces, serif',
            fontWeight: 300,
            color: '#5A5A5A',
            letterSpacing: '0.005em'
          }}
        >
          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              1. Privacy at a Glance
            </h2>
            <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>General Information</h3>
            <p className="mb-4">
              The following information provides a simple overview of what happens to your personal data 
              when you visit this website. Personal data is any data that can personally identify you.
            </p>
          </section>

          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              2. Responsible Party
            </h2>
            <p className="mb-4">
              The party responsible for data processing on this website is:
            </p>
            <p className="mb-4">
              Valorian Circle GmbH i.G.<br />
              Krenmoostraße 65<br />
              85757 Karlsfeld<br />
              Germany
            </p>
            <p className="mb-4">
              Represented by Managing Director Leon Szeli
            </p>
            <p className="mb-4">
              Email: info@valoriancircle.com<br />
              Phone: +4917634600105
            </p>
            <p>
              The responsible party is the natural or legal person who alone or jointly with others 
              determines the purposes and means of the processing of personal data.
            </p>
          </section>

          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              3. Data Collection on This Website
            </h2>
            
            <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>Cookies</h3>
            <p className="mb-4">
              Our website uses cookies. Cookies are small text files that are stored on your device 
              and saved by your browser. They do not harm your device and do not contain viruses.
            </p>
            <p className="mb-4">
              Some cookies remain stored on your device until you delete them. They allow us to 
              recognize your browser on your next visit.
            </p>
            <p className="mb-4">
              You can configure your browser to notify you about the setting of cookies and to allow 
              cookies only in individual cases, to exclude the acceptance of cookies in certain cases 
              or in general, and to activate the automatic deletion of cookies when closing the browser.
            </p>

            <h3 className="text-[1.125rem] tracking-[0.005em] mb-3 mt-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>Server Log Files</h3>
            <p className="mb-4">
              The website provider automatically collects and stores information in server log files, 
              which your browser automatically transmits to us. These include:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Browser type and version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address</li>
            </ul>
            <p className="mb-4">
              This data is not merged with other data sources. Data collection is based on 
              Art. 6(1)(f) GDPR.
            </p>

            <h3 className="text-[1.125rem] tracking-[0.005em] mb-3 mt-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>Application Form</h3>
            <p className="mb-4">
              When you use our application form, the data you enter (name, email address, LinkedIn 
              profile, etc.) will be stored by us. We use this data exclusively to process your 
              application.
            </p>
            <p className="mb-4">
              The processing of this data is based on Art. 6(1)(a) GDPR (consent) and 
              Art. 6(1)(b) GDPR (contract initiation).
            </p>
            <p className="mb-4">
              The data you enter will remain with us until you request deletion, revoke your 
              consent to storage, or the purpose for data storage no longer applies. Any data you 
              provide to us as proof of net worth or income will be immediately deleted after your 
              application has been reviewed.
            </p>
          </section>

          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              4. Hosting
            </h2>
            <p className="mb-4">
              This website is hosted externally. The personal data collected on this website is 
              stored on the servers of the host. This may primarily include IP addresses, contact 
              requests, meta and communication data, contract data, contact details, names, 
              website accesses, and other data generated via a website.
            </p>
            <p className="mb-4">
              External hosting is carried out for the purpose of contract fulfillment towards our 
              potential and existing members (Art. 6(1)(b) GDPR) and in the interest of secure, 
              fast, and efficient provision of our online offering by a professional provider 
              (Art. 6(1)(f) GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              5. Your Rights
            </h2>
            <p className="mb-4">
              You have the right at any time to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Obtain information about your data stored by us</li>
              <li>Request the correction of incorrect personal data</li>
              <li>Request the deletion of your data stored by us</li>
              <li>Request the restriction of data processing</li>
              <li>Object to data processing</li>
              <li>Receive your data in a structured, commonly used, and machine-readable format</li>
            </ul>
            <p className="mb-4">
              If you believe that the processing of your data violates data protection law or your 
              data protection rights have been violated in any other way, you can file a complaint 
              with the competent supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              6. Revocation of Your Consent to Data Processing
            </h2>
            <p className="mb-4">
              Many data processing operations are only possible with your express consent. You can 
              revoke consent you have already given at any time. The legality of the data processing 
              carried out until the revocation remains unaffected by the revocation.
            </p>
          </section>

          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              7. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We reserve the right to adapt this privacy policy so that it always complies with 
              current legal requirements or to implement changes to our services in the privacy 
              policy. The new privacy policy will then apply to your next visit.
            </p>
          </section>

          <section className="pt-8 border-t" style={{ borderColor: '#E8E5E0' }}>
            <p className="text-sm" style={{ color: '#5A5A5A' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}