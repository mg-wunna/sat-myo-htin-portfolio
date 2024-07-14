function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-20 items-center justify-between bg-white">
      <div className="container flex items-center justify-between">
        <div className="font-black">Sat Myo Htin</div>
        <div className="hidden items-center gap-5 md:flex">
          <a href="#home">Home</a>
          <a href="#completed">Completed</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
        </div>
        <div className="rounded-md bg-red-500 px-5 py-2.5 text-xs text-white">
          Join Now
        </div>
      </div>
    </div>
  );
}

export default Header;
