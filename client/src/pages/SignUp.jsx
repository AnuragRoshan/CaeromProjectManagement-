import { FaEnvelope, FaLock, FaLockOpen, FaUser, } from 'react-icons/fa';

const SignUp = () => {

    const onRegister = () => {

    }


    return (
        <div className="login">
            <div className="lgn-box">
                <div className="signUp">
                    <div style={{ height: "10vh", fontSize: "5vh",fontFamily:"sans-serif", fontWeight: '700', marginTop: '6vh', marginLeft:'1vw' }}>Sign Up</div>
                    <div className="lgn-form">
                        <form action="" method="post">
                            <div style={{ margin: "7% 0",borderBottom: "1px solid #999"}}><FaUser style={{paddingTop:'1%'}}/><input className="lgn-input" type="text" placeholder='Your Name' /></div>
                            <div style={{ margin: "7% 0",borderBottom: "1px solid #999"}}><FaEnvelope style={{paddingTop:'1%'}} /><input className="lgn-input" type="text" placeholder='Your Email' /></div>
                            <div style={{ margin: "7% 0",borderBottom: "1px solid #999" }}><FaLock style={{paddingTop:'1%'}} /><input className="lgn-input" type="password" placeholder='Password' /></div>
                            <div style={{ margin: "7% 0",borderBottom: "1px solid #999" }}><FaLockOpen style={{paddingTop:'1%'}} /><input className="lgn-input" type="password" placeholder='Repeat Your Password' /></div>
                            <div style={{ marginTop: "5vh" }}><button type="submit" className="btn" onClick={onRegister}>Register</button></div>
                        </form>
                    </div>
                </div>
                <div className='vecImage'>
                    <div><img src='../static/signup-image.jpg' alt="" /></div>
                    <div style={{ alignSelf: "center", marginTop: '3vh' }}><a href="/signin"><span style={{ textDecorationLine: "underline" }}>Already a member</span></a></div>
                </div>
            </div>
        </div>
    )
}

export default SignUp