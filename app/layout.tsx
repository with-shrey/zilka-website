import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: 'Zilka',
  description: 'Premium Redefined',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>
      <script id="landbot" dangerouslySetInnerHTML={{
          __html: `
                window.addEventListener('mouseover', initLandbot, { once: true });
                window.addEventListener('touchstart', initLandbot, { once: true });
                var myLandbot;
                function initLandbot() {
                  if (!myLandbot) {
                    var s = document.createElement('script');
                    s.type = "module"
                    s.async = true;
                    s.addEventListener('load', function() {
                      window.myLandbot = new Landbot.Livechat({
                        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2979396-FJ891JU6ZZTXIOJF/index.json',
                      });
                    });
                    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                  }
                }
      `
      }} />
      <Navbar/>
      {children}
      <Footer/>
      </body>
      </html>
  )
}
