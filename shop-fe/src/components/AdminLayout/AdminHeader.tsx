import React, { useEffect } from "react";

const AdminHeader = () => {
  useEffect(() => {
    // Lấy giá trị từ localStorage
    const mode = localStorage.getItem("mode");

    // Kiểm tra xem mode có giá trị 'dark' không và thiết lập lớp cho body tương ứng
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  // Hàm xử lý sự kiện khi chuyển đổi mode
  const handleSwitchModeChange = () => {
    // Lấy giá trị mode hiện tại từ localStorage
    const mode = localStorage.getItem("mode");

    // Thay đổi giá trị mode và cập nhật vào localStorage
    const newMode = mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);

    // Cập nhật lớp cho body tương ứng
    document.body.classList.toggle("dark");
  };

  return (
    <nav>
      <i className="bx bx-menu"></i>
      <a href="#" className="nav-link">
        Categories
      </a>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <button
        id="switch-mode"
        className="switch-mode"
        onClick={handleSwitchModeChange}
      ></button>
      <a href="#" className="notification">
        <i className="bx bxs-bell"></i>
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src="../src/public/images/4.jpg" />
      </a>
    </nav>
  );
};

export default AdminHeader;
