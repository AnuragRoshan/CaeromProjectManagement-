
import { AnimatePresence, motion } from 'framer-motion';
import { FaHome, FaUser, FaLock, FaMoneyBill, FaBars } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { BiAnalyse, BiSearch, BiCog } from 'react-icons/bi';
import { AiTwotoneFileExclamation, AiFillHeart } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaHome />,
    },
    {
        path: "/users",
        name: "Users",
        icon: <FaUser />,
    },
    {
        path: "/messages",
        name: "Messages",
        icon: <MdMessage />,
    },
    {
        path: "/analytics",
        name: "Analytics",
        icon: <BiAnalyse />,
    },
    {
        path: "/file-manager",
        name: "File Manager",
        icon: <AiTwotoneFileExclamation />,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "Profile ",
                icon: <FaUser />,
            },
            {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />,
            },
            {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ],
    },
    {
        path: "/order",
        name: "Order",
        icon: <BsCartCheck />,
    },
    {
        path: "/settings",
        name: "Settings",
        icon: <BiCog />,
        exact: true,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "Profile ",
                icon: <FaUser />,
            },
            {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />,
            },
            {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ],
    },
    {
        path: "/saved",
        name: "Saved",
        icon: <AiFillHeart />,
    },
];

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        }
    };


    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            }
        },
        show: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        }
    }

    return (
        <div className="main-container">
            <motion.div animate={{
                width: isOpen ? '200px' : '37px', transition: {
                    duration: 0.5,
                    type: "spring",
                    damping: 11,
                }
            }} className="sidebar">
                <div className='top_section'>
                    {isOpen && <motion.h1 intial='hidden'
                        animate='show'
                        exit='hidden'
                        variants={showAnimation}
                        className='logo'>Caerom</motion.h1>}
                    <div className='bars'>
                        <FaBars onClick={toggle} />
                    </div>
                </div>

                <div className='search'>
                    <div className='search-icon'>
                        <BiSearch />
                    </div>
                    <AnimatePresence>
                        {isOpen &&
                            <motion.input
                                intial='hidden'
                                animate="show"
                                exit="hidden"
                                variants={inputAnimation}
                                placeholder='Search...' />}
                    </AnimatePresence>
                </div>


                <section className='routes'>
                    {routes.map((route) => (
                        <NavLink activeClassName="active" className="link" to={route.path} key={route.name}>
                            <div className='icon' >{route.icon}</div>
                            <AnimatePresence>
                                {isOpen &&
                                    <motion.div
                                        intial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        variants={showAnimation}
                                        className='link-text'>{route.name}</motion.div>}
                            </AnimatePresence>
                        </NavLink>
                    ))}
                </section>
            </motion.div>
            <main>{children}</main>
        </div>
    );
}

export default Sidebar