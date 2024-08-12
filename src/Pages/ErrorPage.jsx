import { useNavigate } from "react-router-dom";
import lostImg from "../assets/lost.png";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div style={{}}>
      <div>
        <img
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            position: "absolute",
            top: "40px",
            left: "275px",
          }}
          src={lostImg}
          alt="Not found Page"
        />
      </div>
    </div>
  );
}
