function Footer() {
  return (
    <footer className="container">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center">
          © 2024 Sat Myo Htin™ . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-black sm:mt-0">
          <a href="#home" className="me-4 md:me-6">
            Home
          </a>
          <a href="#completed" className="me-4 md:me-6">
            Completed
          </a>
          <a href="#services" className="me-4 md:me-6">
            Services
          </a>
          <a href="#reviews" className="me-4 md:me-6">
            Reviews
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
