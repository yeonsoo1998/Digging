import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toolbar from "../../components/toolbar/toolbar";
import Footer from "../../components/footer/footer";
import "./share.css";

function Share() {
  const [shareData, setShareData] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10; // 페이지당 보여줄 항목 수
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(
        `http://localhost:8080/share?page=${pageNumber}`
      );
      if (!response.ok) {
        throw new Error("서버 응답 에러");
      }
      const data = await response.json();
      setShareData(data.result);
    } catch (error) {
      console.error("데이터를 가져오는 중 에러 발생:", error);
    }
  };

  const handlePaging = async (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const goToPrevPage = () => {
    if (page > 1) {
      handlePaging(page - 1);
    }
  };

  const goToNextPage = () => {
    handlePaging(page + 1);
  };

  const handlePostClick = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/share_detail/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        fetchData(page); // 페이지 데이터 새로고침
        navigate(`/share_detail/${postId}`); // postId를 전달하여 이동
      } else {
        console.error("Failed to increment views");
      }
    } catch (error) {
      console.error("Error incrementing views:", error.message);
    }
  };

  const handleWriteClick = () => {
    // 버튼 클릭 시 토큰 확인 후 로그인 페이지로 이동
    if (!token) {
      navigate("/login"); // 로그인 페이지 경로로 변경
    } else {
      // 토큰이 있는 경우 글쓰기 페이지로 이동
      navigate("/share/write");
    }
  };

  return (
    <div>
      <Toolbar />
      <div className="board-container">
        <div className="board-box">
          <div className="board-title">
            <h3>공유해요</h3>
          </div>
          <div className="write-button">
            <span onClick={handleWriteClick}>글쓰기</span>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {shareData.map((post, index) => (
              <tr key={index} onClick={() => handlePostClick(post._id)}>
                <td>{(page - 1) * pageSize + index + 1}</td>
                <td>{post.title}</td>
                <td>{post.writer}</td>
                <td>{post.views}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={goToPrevPage} disabled={page === 1}>
          이전
        </button>
        <span>{`${page}`}</span>
        <button onClick={goToNextPage}>다음</button>
      </div>

      <Footer />
    </div>
  );
}

export default Share;
