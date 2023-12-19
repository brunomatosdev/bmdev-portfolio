import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "https://brunomatos.dev",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/brunomatosdev",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/Bruno_Matos84",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "www.linkedin.com/in/brunodossantosmatos",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-gradient-to-b from-gray-800 to-black">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
