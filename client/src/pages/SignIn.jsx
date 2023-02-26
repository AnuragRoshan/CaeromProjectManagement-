import {  FaFacebookSquare,  FaGooglePlusSquare, FaLock, FaTwitterSquare,  FaUser } from 'react-icons/fa';

const SignIn = () => {

    const onLogin = () => {

    }


    return (
        <div className="login">
            <div className="lgn-box">
                <div className='vecImage'>
                    <div><img src='../static/signin-image.jpg' alt="" /></div>
                    <div style={{ alignSelf: "center", marginTop: '3vh' }}><a href="/signUp"><span style={{ textDecorationLine: "underline" }}>Create a account</span></a></div>
                </div>
                <div className="signIn">
                    <div style={{paddingBottom:"3vh", height: "10vh", fontSize: "5vh", fontFamily: "sans-serif", fontWeight: '700', marginTop: '6vh' }}>Sign In</div>
                    <div style={{paddingBottom:"15vh"}} className="lgn-form">
                        <form action="" method="post">
                            <div style={{ margin: "7% 0", borderBottom: "1px solid #999" }}><FaUser style={{ paddingTop: '1%' }} /><input className="lgn-input" type="text" placeholder='Your Name' /></div>
                            <div style={{ margin: "7% 0", borderBottom: "1px solid #999" }}><FaLock style={{ paddingTop: '1%' }} /><input className="lgn-input" type="password" placeholder='Password' /></div>
                            <div style={{ marginTop: "5vh" }}><button type="submit" className="btn" onClick={onLogin}>Log in</button></div>
                        </form>
                    </div>
                    <div style={{paddingBottom:"9vh"}} className="auth">
                        <div>Or login with</div>
                        <div><FaFacebookSquare /></div>
                        <div><FaTwitterSquare /></div>
                        <div><FaGooglePlusSquare /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn