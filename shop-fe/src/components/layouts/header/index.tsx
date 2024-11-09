import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { useState, ChangeEvent } from "react";
const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };
  const handleLogOut = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("top-header")}>
        <div className={cx("title-sale")}>
          <div></div>
          <div>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a href="">ShopNow</a>
          </div>
          <select>
            <option value="">English</option>
            <option value="">VietNamese</option>
          </select>
        </div>
      </div>
      <div className={cx("header")}>
        <div className={cx("header-content")}>
          <Link to={"/"}>
            <a href="/">
              <svg
                width="116"
                height="20"
                viewBox="0 0 116 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.517045 19V1.54545H12.2784V4.58807H4.20739V8.74716H11.6733V11.7898H4.20739V15.9574H12.3125V19H0.517045ZM18.8983 5.90909L21.3017 10.4858L23.7647 5.90909H27.4892L23.6966 12.4545L27.5914 19H23.8841L21.3017 14.4744L18.7619 19H15.0119L18.8983 12.4545L15.1483 5.90909H18.8983ZM35.8114 19.2557C34.4705 19.2557 33.3171 18.9716 32.3512 18.4034C31.391 17.8295 30.6524 17.0341 30.1353 16.017C29.6239 15 29.3683 13.8295 29.3683 12.5057C29.3683 11.1648 29.6268 9.98864 30.1438 8.97727C30.6666 7.96023 31.408 7.16761 32.3683 6.59943C33.3285 6.02557 34.4705 5.73864 35.7944 5.73864C36.9364 5.73864 37.9364 5.94602 38.7944 6.36079C39.6524 6.77557 40.3313 7.35795 40.8313 8.10795C41.3313 8.85795 41.6069 9.73864 41.658 10.75H38.2319C38.1353 10.0966 37.8796 9.57102 37.4649 9.1733C37.0558 8.76989 36.5188 8.56818 35.8541 8.56818C35.2916 8.56818 34.8001 8.72159 34.3796 9.02841C33.9649 9.32955 33.641 9.76989 33.408 10.3494C33.1751 10.929 33.0586 11.6307 33.0586 12.4545C33.0586 13.2898 33.1722 14 33.3995 14.5852C33.6325 15.1705 33.9592 15.6165 34.3796 15.9233C34.8001 16.2301 35.2916 16.3835 35.8541 16.3835C36.2688 16.3835 36.641 16.2983 36.9705 16.1278C37.3058 15.9574 37.5813 15.7102 37.7972 15.3864C38.0188 15.0568 38.1637 14.6619 38.2319 14.2017H41.658C41.6012 15.2017 41.3285 16.0824 40.8399 16.8438C40.3569 17.5994 39.6893 18.1903 38.837 18.6165C37.9847 19.0426 36.9762 19.2557 35.8114 19.2557ZM48.3333 1.54545V19H44.7026V1.54545H48.3333ZM60.3566 13.4261V5.90909H63.9872V19H60.5015V16.6222H60.3651C60.0696 17.3892 59.5782 18.0057 58.8907 18.4716C58.2088 18.9375 57.3764 19.1705 56.3935 19.1705C55.5185 19.1705 54.7486 18.9716 54.0838 18.5739C53.4191 18.1761 52.8992 17.6108 52.5242 16.8778C52.1549 16.1449 51.9674 15.267 51.9617 14.2443V5.90909H55.5924V13.5966C55.598 14.3693 55.8054 14.9801 56.2145 15.429C56.6236 15.8778 57.1719 16.1023 57.8594 16.1023C58.2969 16.1023 58.706 16.0028 59.0867 15.804C59.4674 15.5994 59.7742 15.2983 60.0071 14.9006C60.2458 14.5028 60.3622 14.0114 60.3566 13.4261ZM78.5034 9.64205L75.1795 9.84659C75.1227 9.5625 75.0006 9.30682 74.8131 9.07955C74.6256 8.84659 74.3784 8.66193 74.0716 8.52557C73.7705 8.38352 73.4097 8.3125 72.9892 8.3125C72.4267 8.3125 71.9523 8.43182 71.5659 8.67045C71.1795 8.90341 70.9864 9.21591 70.9864 9.60795C70.9864 9.92045 71.1114 10.1847 71.3614 10.4006C71.6114 10.6165 72.0403 10.7898 72.6483 10.9205L75.0176 11.3977C76.2903 11.6591 77.2392 12.0795 77.8642 12.6591C78.4892 13.2386 78.8017 14 78.8017 14.9432C78.8017 15.8011 78.5489 16.554 78.0432 17.2017C77.5432 17.8494 76.8557 18.3551 75.9807 18.7188C75.1114 19.0767 74.1085 19.2557 72.9722 19.2557C71.2392 19.2557 69.8585 18.8949 68.8301 18.1733C67.8074 17.446 67.208 16.4574 67.0318 15.2074L70.6028 15.0199C70.7108 15.5483 70.9722 15.9517 71.3869 16.2301C71.8017 16.5028 72.333 16.6392 72.9807 16.6392C73.617 16.6392 74.1284 16.517 74.5148 16.2727C74.9068 16.0227 75.1057 15.7017 75.1114 15.3097C75.1057 14.9801 74.9665 14.7102 74.6937 14.5C74.421 14.2841 74.0006 14.1193 73.4324 14.0057L71.1653 13.554C69.8869 13.2983 68.9352 12.8551 68.3102 12.2244C67.6909 11.5937 67.3812 10.7898 67.3812 9.8125C67.3812 8.97159 67.6085 8.24716 68.0631 7.6392C68.5233 7.03125 69.1682 6.5625 69.9977 6.23295C70.833 5.90341 71.8102 5.73864 72.9295 5.73864C74.583 5.73864 75.8841 6.08807 76.833 6.78693C77.7875 7.4858 78.3443 8.4375 78.5034 9.64205ZM81.8079 19V5.90909H85.4386V19H81.8079ZM83.6318 4.22159C83.092 4.22159 82.6289 4.04261 82.2426 3.68466C81.8619 3.32102 81.6716 2.88636 81.6716 2.38068C81.6716 1.88068 81.8619 1.4517 82.2426 1.09375C82.6289 0.730113 83.092 0.548295 83.6318 0.548295C84.1716 0.548295 84.6318 0.730113 85.0125 1.09375C85.3988 1.4517 85.592 1.88068 85.592 2.38068C85.592 2.88636 85.3988 3.32102 85.0125 3.68466C84.6318 4.04261 84.1716 4.22159 83.6318 4.22159ZM101.272 5.90909L96.6948 19H92.6039L88.0272 5.90909H91.8624L94.5812 15.2756H94.7176L97.4278 5.90909H101.272ZM109.394 19.2557C108.047 19.2557 106.888 18.983 105.916 18.4375C104.95 17.8864 104.206 17.108 103.683 16.1023C103.161 15.0909 102.899 13.8949 102.899 12.5142C102.899 11.1676 103.161 9.9858 103.683 8.96875C104.206 7.9517 104.942 7.15909 105.891 6.59091C106.845 6.02273 107.965 5.73864 109.249 5.73864C110.112 5.73864 110.916 5.87784 111.661 6.15625C112.411 6.42898 113.064 6.84091 113.621 7.39205C114.183 7.94318 114.621 8.63636 114.933 9.47159C115.246 10.3011 115.402 11.2727 115.402 12.3864V13.3835H104.348V11.1335H111.984C111.984 10.6108 111.871 10.1477 111.644 9.74432C111.416 9.34091 111.101 9.02557 110.698 8.7983C110.3 8.56534 109.837 8.44886 109.308 8.44886C108.757 8.44886 108.269 8.5767 107.842 8.83239C107.422 9.08239 107.092 9.42045 106.854 9.84659C106.615 10.267 106.493 10.7358 106.487 11.2528V13.392C106.487 14.0398 106.607 14.5994 106.845 15.071C107.09 15.5426 107.433 15.9062 107.876 16.1619C108.32 16.4176 108.845 16.5455 109.453 16.5455C109.857 16.5455 110.226 16.4886 110.561 16.375C110.896 16.2614 111.183 16.0909 111.422 15.8636C111.661 15.6364 111.842 15.358 111.967 15.0284L115.325 15.25C115.155 16.0568 114.805 16.7614 114.277 17.3636C113.754 17.9602 113.078 18.4261 112.249 18.7614C111.425 19.0909 110.473 19.2557 109.394 19.2557Z"
                  fill="black"
                />
              </svg>
            </a>
          </Link>
          <ul>
            <Link to={"/"}>
              <li>
                <a href="/">Home</a>
              </li>
            </Link>
            <Link to={"/category"}>
              <li>
                <a href="#">Category</a>
              </li>
            </Link>
            <li>
              <a href="#">About</a>
            </li>
            <Link to={"/register"}>
              <li>
                <a href="">Sign Up</a>
              </li>
            </Link>
            <Link to={"/cart"}>
              <li>
                <a href="">Cart</a>
              </li>
            </Link>
            <li>
              <button onClick={handleLogOut} className={cx("logout-button")}>
                Log Out
              </button>
            </li>
          </ul>
          <div className={cx("item-left")}>
            <div className={cx("search")}>
              <input
                value={searchValue}
                onChange={handleOnChange}
                placeholder="What are you looking for?"
              />
              <Link style={{ cursor: "pointer" }} to={`/search/${searchValue}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </Link>
            </div>
            <div className={cx("action")}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 5H7L10 22H26"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
