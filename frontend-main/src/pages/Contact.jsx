import "./Contact.css"
import { FaGithub } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

const ContactPage = () => {
    return(
        <div>

            <div className="master">
                <div className="left">
                    <div className="title">This website was developed by the blood, sweat and tears of</div>
                    <div className="slave">
                        <div className="left">
                            <div className="github" style={{paddingRight:"30px"}}>
                                <div className="left" style={{flex:2, alignItems:"flex-end"}}>
                                    <div className="devName">
                                        Wasif Latif Hussain
                                    </div>
                                    
                                    <a className="github" target="_blank" href="https://github.com/wasifcoding/">
                                        <div className="right" style={{paddingRight:"15px"}}>
                                            wasifcoding
                                        </div>
                                        <div className="left">
                                        <FaGithub></FaGithub>
                                        </div>
                                    </a>
                                    <a className="github" href="">

                                        <div className="right" style={{paddingRight:"15px"}}>
                                            md.wasiflatif9859@gmail.com
                                        </div>
                                        <div className="left">
                                            <EmailIcon></EmailIcon>
                                        </div>
                                    </a>
                                </div>
                                <div className="right" style={{flex:1, paddingLeft:"60px"}}>
                                    <img src="https://avatars.githubusercontent.com/u/114172779?v=4"/>
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div className="github" >
                                <div className="left" style={{paddingRight:"60px"}}>
                                    <img src="https://avatars.githubusercontent.com/u/57101067?v=4"/>
                                </div>
                                <div className="right" style={{flex:2, alignItems:"flex-start"}}>
                                    <div className="devName">
                                        Nafis Ul Islam
                                    </div>
                                    
                                    <a className="github" target="_blank" href="https://www.github.com/DethCubeHax">
                                        <div className="left">
                                        <FaGithub></FaGithub>
                                        </div>
                                        <div className="right" style={{paddingLeft:"15px"}}>
                                            DethCubeHax
                                        </div>
                                    </a>
                                    <a className="github" href="">
                                        <div className="left">
                                            <EmailIcon></EmailIcon>
                                        </div>
                                        <div className="right" style={{paddingLeft:"15px"}}>
                                            nafisulislam2k2@gmail.com
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactPage;