export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          Terms of Service & Privacy Policy
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to SparshTech. By accessing our website and using our
              services, you agree to comply with and be bound by the following
              terms and conditions. Please review them carefully.
            </p>
            <p className="text-muted-foreground mb-4">
              All content included on this site, such as text, graphics, logos,
              button icons, images, audio clips, digital downloads, data
              compilations, and software, is the property of SparshTech or its
              content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              Your privacy is important to us. It is SparshTech&apos;s policy to
              respect your privacy regarding any information we may collect from
              you across our website.
            </p>
            <h3 className="text-xl font-medium mb-2">Information We Collect</h3>
            <p className="text-muted-foreground mb-4">
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why
              we&apos;re collecting it and how it will be used.
            </p>
            <h3 className="text-xl font-medium mb-2">Data Retention</h3>
            <p className="text-muted-foreground mb-4">
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store,
              we&apos;ll protect within commercially acceptable means to prevent
              loss and theft, as well as unauthorized access, disclosure,
              copying, use, or modification.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms, please contact us at
              info@sparshtech.in.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
