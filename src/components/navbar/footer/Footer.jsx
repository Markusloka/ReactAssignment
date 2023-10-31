import "./style.footer.css";
import LogoCrito from "../../../assets/hero/LogoCrito.svg";
export function Footer() {
  return (
    <div className="footer">
      <div className="footerBox">
        <div className="footerRow1">
          <img className="footerLogo" src={LogoCrito} />
          <p className="footerSub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            obcaecati voluptas voluptates! Voluptates laborum nam ratione minus
            necessitatibus, iure praesentium.
          </p>
        </div>
        <div className="footerRow2">
          <h1 className="footerSection">Company</h1>
          <div className="footerLinks">
            <p className="footerLink">About</p>
            <p className="footerLink">Features</p>
            <p className="footerLink">Works</p>
            <p className="footerLink">Career</p>
          </div>
        </div>
        <div className="footerRow3">
          <h1 className="footerSection">Help</h1>
          <div className="footerLinks">
            <p className="footerLink">Customer Support</p>
            <p className="footerLink">Delivery Details</p>
            <p className="footerLink">Terms & Conditions</p>
            <p className="footerLink">Privacy Policy</p>
          </div>
        </div>
        <div className="footerRow4">
          <h1 className="footerSection">Resources</h1>
          <div className="footerLinks">
            <p className="footerLink">Free eBooks</p>
            <p className="footerLink">Development Tutorial</p>
            <p className="footerLink">How to - Blog</p>
            <p className="footerLink">Youtube Playlist</p>
          </div>
        </div>
        <div className="footerRow5">
          <h1 className="footerSection">Link</h1>
          <div className="footerLinks">
            <p className="footerLink">Free eBooks</p>
            <p className="footerLink">Development Tutorial</p>
            <p className="footerLink">How to - Blog</p>
            <p className="footerLink">Youtube Playlist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
