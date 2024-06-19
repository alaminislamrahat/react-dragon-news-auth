import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navBar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";


const News = () => {
    const datas = useLoaderData();


    const { id } = useParams();

    // console.log(id,datas);

    const data = datas.find(data => data._id === id);
    const {title,image_url,details} = data;

    const navigate = useNavigate()
    const goBack = ()=>{
        navigate(-1);
    }

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <button onClick={goBack} className="btn btn-secondary">Go back!!</button>
                        </div>
                    </div>
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