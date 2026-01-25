const Footer = () => {
  return (
    <section id="footer" className="2xs:px-8 px-5 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <div>Copyright &copy; {new Date().getFullYear()} Wojciech Wnek</div>
      </div>
    </section>
  );
};

export default Footer;
