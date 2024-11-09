import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">DuyTan</span>
      </a>
      <ul className="side-menu top">
        <li>
          <a href="/admin/">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/admin/myStore">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">My Store</span>
          </a>
        </li>
        <Link to={"/admin/addPro"}>
          <li>
            <a href="#">
              <i className="bx bxs-message-alt-add"></i>
              <span className="text">Add Product</span>
            </a>
          </li>
        </Link>
        <li>
          <a href="#">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-message-dots"></i>
            <span className="text">Message</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-group"></i>
            <span className="text">Users</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AdminSideBar;
