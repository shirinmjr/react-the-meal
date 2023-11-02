import { Link } from "react-router-dom";

export default function AreasPage() {
    console.log("areas meals page");
    return (
        <div>
            <h1>This is Areas Page</h1>
            <Link to="/">
                <h3> Back to Home </h3>
            </Link>
        </div>
    )
}