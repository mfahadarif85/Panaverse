import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className='p-3 m-0 flex space-x-2 text-blue-500'>
        <Link href='/'>Home</Link>
        <Link href='/posts'>Posts</Link>
      </nav>
    </div>
  );
};

export default Navbar;
