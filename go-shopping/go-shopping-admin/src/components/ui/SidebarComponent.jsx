import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { navigationRoutes } from "../../routes/navigationRoutes";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function SidebarComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  const renderNavigationRoutes = () => {
    return navigationRoutes.map((item, index) => (
      <Nav.Item key={index}>
        <Nav.Link
          as={Link}
          to={item.path}
          className={`text-white text-decoration-none p-2 fw-bold d-flex flex-row align-items-center rounded-2 ${
            item.path === location.pathname
              ? "fw-bold bg-dark"
              : ""
          }`}
        >
          {<item.icon className="me-2" size={20}/>}
          {item.name}
        </Nav.Link>
      </Nav.Item>
    ));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      Cookies.remove("userId");
      Cookies.remove("token");
      Cookies.remove("role");
      toast.success("You have successfully logged out!");
      navigate("/");
    }
  };
  
  return (
    <aside className="bg-success bg-gradiant p-3 d-none d-md-flex flex-column justify-content-between rounded-end" style={{ height: "100vh" }}>
      <div>
        <h5 className="fw-bold text-white mb-2 text-uppercase p-2">GoShopping</h5>
        <nav>
          <ul className="list-unstyled d-flex flex-column gap-2">
            {renderNavigationRoutes()}
          </ul>
        </nav>
      </div>
      <Button variant="danger" className="w-100 fw-bold" onClick={handleLogout}>
        Logout
      </Button>
    </aside>
  );
}