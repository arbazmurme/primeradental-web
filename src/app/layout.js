import MainLayout from "@/components/Mainlayout";
import "./globals.css";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProviderLayout from "@/components/ReduxProviderLayout";

export const metadata = {
  title: "Primera Dental Hub",
  description:
    "Welcome to the Primera Dental Hub, your comprehensive resource for dental care and information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Primera Dental Hub" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/primeradentalhub-.png"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Stylesheets from /public/assets/css */}
        <link rel="stylesheet" href="/assets/css/vendors/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bulk-style.css" />
        <link rel="stylesheet" href="/assets/css/vendors/animate.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        {/* Scripts */}
        <Script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/jquery-ui.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/bootstrap/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/bootstrap/bootstrap-notify.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/bootstrap/popper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/feather/feather.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/feather/feather-icon.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/lazysizes.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick/slick.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/slick/slick-animation.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/slick/custom_slick.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/auto-height.js" strategy="afterInteractive" />
        <Script src="/assets/js/timer1.js" strategy="afterInteractive" />
        <Script src="/assets/js/fly-cart.js" strategy="afterInteractive" />
        <Script src="/assets/js/quantity-2.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom-wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
        <Script src="/assets/js/theme-setting.js" strategy="afterInteractive" />
        <ReduxProviderLayout>
          <MainLayout>{children}</MainLayout>
        </ReduxProviderLayout>
      </body>
    </html>
  );
}
