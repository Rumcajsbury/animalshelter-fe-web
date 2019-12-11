import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage: React.FC = () => {
  return (
    <div className="mt-3">
      <h1>Nie znaleziono strony</h1>
      <Link to="/" className="btn btn-primary" >Wróć do strony głównej</Link>
    </div>
  );
};

export default NotFoundPage;
