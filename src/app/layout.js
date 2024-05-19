import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Assignment - Reposnive Web Page using NextJs ",
  description: "Responsive web page design using HTML, CSS, Bootstrap, NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        <title>{metadata.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />
        <link rel="stylesheet" type="text/css" href="https://www.theinsightpartners.com/assets/css/owl-carousel/owl.carousel.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://www.theinsightpartners.com/assets/css/owl-carousel/owl.theme.min.css" />
        <link rel="stylesheet" type="text/css" href="css/my_style.css" />      
      </head>
      
      <body>
        <Header />
        {children}
        <Footer />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://www.theinsightpartners.com/assets/js/owl-carousel/owl.carousel.min.js"></script>
      </body>
    </html>
  );
}
