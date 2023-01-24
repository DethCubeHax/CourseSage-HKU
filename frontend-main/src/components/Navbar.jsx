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

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onButtonClick = () => {
    // window.open(Shubham_Verma_Resume);
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

              <Button
                backgroundColor="#89CBF3"
                _hover={{ bg: "#89B3F3", color: "black" }}
                color="white"
                variant="solid"
                onClick={onButtonClick}
                size={["sm", "md"]}
                download="Shubham_Verma_Resume"
                id="resumeBtn"
              >
                <a href="">
                  {/* // href={Shubham_Verma_Resume}
                  // target="_blank"
                  // download="Shubham_Verma_Resume" */}
                
                  Login/Register
                </a>
                {/* <Link
                    id="navRes"
                    href={Shubham_Verma_Resume}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    download="Shubham_Verma_Resume"
                  >
                    RESUME
                  </Link> */}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}