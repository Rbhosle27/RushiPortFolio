import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterPage: React.FC = () => {
  return (
    <footer className="w-full bg-background border-t  py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Copyright Text */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rushikesh Bhosle. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/Rbhosle27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#4285F4] transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BvJYqfSTkRYiJLFB2f6uuwg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#0F9D58] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
