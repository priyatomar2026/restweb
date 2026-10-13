import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Dynamics Design & Decoration | UAE",
  description: "Turnkey fit-out, MEP, civil works, acoustic treatment, interiors and maintenance across the UAE."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
