import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import Photo from "./Photo";
import Name from "./Name";
import "./Navbar.css";
// import Shubham_Verma_Resume from "./Shubham_Verma_Resume.pdf";
import Dropdown from "react-bootstrap/Dropdown"
import 'bootstrap/dist/css/bootstrap.min.css';
import verifyUser from "../scripts/VerifyUser";
import axios from 'axios';
import { MdVerified } from "react-icons/md";
import { useState, useEffect } from 'react';
import { UpdateModeEnum } from "chart.js";



export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [verified, verfificationSetter] = useState("")
  const data = async () => {
    const data = await verifyUser();
    verfificationSetter(data);
  }
  useEffect(() => {
    data();
  }, [])

  const logout = () => {
    sessionStorage.removeItem("token")
    window.location = "/";
  }

  
  const LoginButton = () => {
    if (verified){
      console.log("Verification status: " + verified)
      if (verified === "Verified")
      {
        return(<div>
                  <Button
            backgroundColor="#ef4e6e"
            _hover={{ bg: "#ff7961", color: "black" }}
            color="white"
            variant="solid"
            onClick={()=>logout()}
            size={["sm", "md"]}
            id="resumeBtn"
          >
            <div>
              Logout
            </div>
          </Button>
        </div>
  )
      }
      else{return(      <Button
        backgroundColor="#89CBF3"
        _hover={{ bg: "#89B3F3", color: "black" }}
        color="white"
        variant="solid"
        onClick={onButtonClick}
        size={["sm", "md"]}
        download="Shubham_Verma_Resume"
        id="resumeBtn"
      >
        <a href="/login">
          Login/Register
        </a>
      </Button>)
  
      }
    }
    else{
      return (<div>Loading</div>)
    }
    }


  function onButtonClick() {

  }

  return (
  
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Name />

            <Show breakpoint="(min-width: 1000px)">
              {" "}
              {/* <Photo /> */}
            </Show>
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <Button className="btnRes">
                  <a href="/">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                
                {/* <Button className="btnRes">
                  <a href="#About">
                    <b>Faculties</b>
                  </a>
                </Button> */}

                {/* <Button className="btnRes">
                  <a href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </a>
                </Button> */}
                <Dropdown >
                  <Dropdown.Toggle style={{backgroundColor: "#89CBF3",
                                           borderColor: "#89CBF3"}} id="dropdown-basic">
                    Faculties
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/faculty/Business and Economics">FBE</Dropdown.Item>
                    <Dropdown.Item href="/faculty/arts">Arts</Dropdown.Item>
                    <Dropdown.Item href="/faculty/science">Science</Dropdown.Item>
                    <Dropdown.Item href="/faculty/Social Sciences">Social Sciences</Dropdown.Item>
                    <Dropdown.Item href="/faculty/education">Education</Dropdown.Item>
                    <Dropdown.Item href="/faculty/medicine">Medicine</Dropdown.Item>
                    <Dropdown.Item href="/faculty/Center for Applied English Studies">CAES</Dropdown.Item>
                    {/* <Dropdown.Item href="/faculty/dentistry">Dentistry</Dropdown.Item> */}
                    <Dropdown.Item href="/faculty/engineering">Engineering</Dropdown.Item>
                    <Dropdown.Item href="/faculty/law">Law</Dropdown.Item>
                    <Dropdown.Item href="/faculty/Graduate School">Graduate School</Dropdown.Item>
                    
                    
                    
                  </Dropdown.Menu>
                </Dropdown>

                {/* <Button className="btnRes">
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button> */}
                <Dropdown >
                  <Dropdown.Toggle style={{backgroundColor: "#1e94d9",
                                           borderColor: "#1e94d9"}} id="dropdown-basic">
                    Common Core Courses
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/cc/CCST">CCST</Dropdown.Item>
                    <Dropdown.Item href="/cc/CCGL">CCGL</Dropdown.Item>
                    <Dropdown.Item href="/cc/CCHU">CCHU</Dropdown.Item>
                    <Dropdown.Item href="/cc/CCCH">CCCH</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Button className="btnRes">
                  <a href="#Contact">
                    <b>Common Core Courses</b>
                  </a>
                </Button> */}
                <Button className="btnRes">
                  <a href="/contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </HStack>
            </HStack>
          </Flex>

          {/* {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button>
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null} */}

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              {/* { verifyUser()==="Verified" ? (<Button
                backgroundColor="#89CBF3"
                _hover={{ bg: "#89B3F3", color: "black" }}
                color="white"
                variant="solid"
                onClick={sessionStorage.removeItem('token')}
                size={["sm", "md"]}
                download="Shubham_Verma_Resume"
                id="resumeBtn"
              >
                <a href="/">
                  Logout
                </a>
              </Button>) :
              (<Button
                backgroundColor="#89CBF3"
                _hover={{ bg: "#89B3F3", color: "black" }}
                color="white"
                variant="solid"
                onClick={onButtonClick}
                size={["sm", "md"]}
                download="Shubham_Verma_Resume"
                id="resumeBtn"
              >
                <a href="/login">
                  Login/Register
                </a>
              </Button>) } */}
              <LoginButton></LoginButton>


            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}