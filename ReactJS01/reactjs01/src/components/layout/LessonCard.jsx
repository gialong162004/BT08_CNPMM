import { Card } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getInfoLessonApi, increaseViewApi } from "../../util/api";

const LessonCard = ({ id, title, thumbnail, price }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // Lấy số lượt xem ban đầu
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await getInfoLessonApi(id);
        setCount(res.data.views || 0);
      } catch (err) {
        console.error("Lỗi khi lấy viewCount:", err);
      }
    };
    if (id) fetchCounts();
  }, [id]);

  // Khi click vào card: tăng view và navigate
  const handleClick = async () => {
    try {
      await increaseViewApi(id); // gọi API tăng view
      setCount((prev) => prev + 1); // tăng số view ngay lập tức trên UI
    } catch (err) {
      console.error("Lỗi khi tăng view:", err);
    }
    navigate(`/lessondetail/${id}`);
  };

  return (
    <Card
      hoverable
      onClick={handleClick}
      cover={
        <img
          alt={title}
          src={thumbnail}
          style={{
            height: 180,
            objectFit: "contain",
            borderBottom: "1px solid #eee",
          }}
        />
      }
      style={{
        width: 240,
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
    >
      <Card.Meta
        title={title}
        description={
          <div style={{ marginTop: 8 }}>
            <p style={{ margin: 0, fontWeight: "bold", color: "#3a7d6b" }}>
              Giá: {price?.toLocaleString("vi-VN")} ₫
            </p>
            <p style={{ margin: 0, color: "#888" }}>👀 {count} lượt xem</p>
          </div>
        }
      />
    </Card>
  );
};

export default LessonCard;
