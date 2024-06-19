import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navBar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";



const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold font-poppins">this is home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div> 

                {/* news container  */}
                <div className=" md:col-span-2 ">
                    {
                        news.map(anews => <NewsCard key={anews.id} news={anews}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;