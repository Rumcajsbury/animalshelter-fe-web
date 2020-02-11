import React from "react";
import {Link} from "react-router-dom";

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="mt-3">
                <h1>Nie znaleziono strony</h1>
                <Link to="/" className="btn btn-primary">Wróć do strony głównej</Link>
            </div>
        );
    }
}

export default NotFoundPage;
