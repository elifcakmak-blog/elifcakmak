import UnderConstruction from "./0/0-UnderConstruction/UnderConstruction";
import CustomCursor from "./0/0-cursor/page";
import Navigation from "./0/0-pages-nav/pages-nav";
import Footer from "./0/0-footer/footer";

export default function NotFound() {
  return (
    <>
    {/* Cursor */}
      <CustomCursor />
      
      {/* Navbar */}
      <Navigation />

      <div style={{ textAlign: "center", marginTop: "100px", marginBottom: "-100px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontSize: "6rem" }}>404</h1>
      </div>
      <UnderConstruction />

      {/* Footer */}
      <Footer />
    </>
  );
}