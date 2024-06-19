import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navBar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">Detail</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <h2>news detail</h2>
        </div>
    );
};

export default News;