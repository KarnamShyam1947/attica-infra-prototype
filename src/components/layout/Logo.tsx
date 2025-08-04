import { Link } from "react-router-dom";
// import logo from "";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        {/* <Building2 className="w-8 h-8 text-blue-600" /> */}
        <Link to={"/"}>
          <img style={{ height: "45px"}}    src="/logo-full.png" alt="" />
        </Link>
        {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white" /> */}
      </div>
      {/* <span className="text-2xl font-bold text-blue-600">BuildPro</span> */}
    </div>
  );
};

export default Logo;