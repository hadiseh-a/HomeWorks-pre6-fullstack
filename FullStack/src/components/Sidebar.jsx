import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import SidebarContent from "./SidebarContent";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* دکمه همبرگری در موبایل */}
      <div className="d-lg-none p-3">
        <Button className="humberger border-0 text-black" onClick={() => setShowSidebar(true)}>
          <List size={20} />
        </Button>
      </div>

      {/* سایدبار برای دسکتاپ */}
      <div className="sidebar d-none d-lg-inline">
        <SidebarContent />
      </div>

      {/* سایدبار برای موبایل (Offcanvas) */}
      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        responsive="lg"
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <SidebarContent onLinkClick={() => setShowSidebar(false)} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
