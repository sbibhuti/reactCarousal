import React, { useState, useEffect } from "react";
import Images from "./component/images";
import Pagination from "./component/pagination";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(5);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const res = await axios.get("https://picsum.photos/v2/list");
      setImages(res.data);
      setLoading(false);
    };

    fetchImages();
  }, []);

  // Get current posts
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <Images images={currentImages} loading={loading} />
      <div class="position-absolute mt-5 start-50 translate-middle">
        <Pagination
          imagesPerPage={imagesPerPage}
          totalImages={images.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;
