const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} The Tutors - UK Education Consultants. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
