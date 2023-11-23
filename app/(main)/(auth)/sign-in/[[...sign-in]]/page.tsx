import {SignIn} from "@clerk/nextjs";

const Signin = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <SignIn/>
        </div>
    );
};

export default Signin;
