import Link from "next/link";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div id="contact">
      <Heading>Contact Me</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 md:my-20">
        <div className="space-y-4 col-span-1">
          <h1 className="text-xl md:text-3xl font-bold">Available for select freelance opportunities</h1>
          <p className="text-base md:text-lg">
            I&apos;m currently available for select freelance opportunities. If you have a project that you&apos;d like
            to get started, think you need my help with something or just fancy saying hello, then get in touch.
          </p>
        </div>
        <div className="inline-flex flex-col text-xl md:text-2xl  md:text-right">
          <div className="mb-10">
            <Link
              href="mailto:syedshiblimahmud@gmail.com"
              className="relative before:absolute  before:right-0 before:-bottom-1.5 before:w-full before:h-[8px] before:-skew-x-12  before:bg-rose-300 dark:before:bg-rose-500 before:-z-10"
            >
              syedshiblimahmud@gmail.com
            </Link>
          </div>

          <Link target="_blank" className="hover:text-rose-500" href="https://github.com/shibli21" aria-label="Github">
            GitHub
          </Link>
          <Link
            target="_blank"
            className="hover:text-rose-500"
            href="https://www.linkedin.com/in/shibli21/"
            aria-label="Linkedin"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            className="hover:text-rose-500"
            href="https://twitter.com/shibli21"
            aria-label="Twitter"
          >
            Twitter
          </Link>
          <Link
            target="_blank"
            className="hover:text-rose-500"
            href="https://www.instagram.com/__shelbyy____/"
            aria-label="Instagram"
          >
            Instagram
          </Link>

          <Link
            target="_blank"
            className="hover:text-rose-500"
            href="https://www.facebook.com/shibli21"
            aria-label="Facebook"
          >
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
