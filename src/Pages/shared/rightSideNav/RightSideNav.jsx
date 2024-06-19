import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">login with</h2>
                <button className="btn btn-outline w-full border-green-500 text-green-500 hover:bg-green-500">
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with github
                </button>
            </div>

            {/* social media  */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Find us on</h2>
                <a className="flex p-4 text-lg items-center border text-blue-600 border-blue-600 rounded-t-lg" href=""> 
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="flex p-4 text-lg items-center border text-sky-600 border-sky-600 rounded-t-lg" href=""> 
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="flex p-4 text-lg items-center border text-pink-600 border-pink-600 rounded-t-lg" href=""> 
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
                
            </div>

            {/* Q zone  */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Q Zone</h2>
               
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;