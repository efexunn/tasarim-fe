import { LogoutOutlined } from "@ant-design/icons";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={()=> location.href = "/"}>
          <img src="vite.svg" alt="" />
          <span>SCRABBER</span>
        </div>
        <div className="icons">
          <div className="user">
            <img
              src="https://media.istockphoto.com/id/1217033111/photo/man-extending-hands-forward-to-hold-something-leaning-to-product-helping-out-friend-carry.jpg?s=612x612&w=0&k=20&c=51I9b80TN54e1q6u1uIbvPSAe5hyrHsaaqO6hv3oNbY="
              alt=""
            />
            <span>Efe Bozkurt</span>
          </div>
          <LogoutOutlined onClick={() => (location.href = "/login")} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
