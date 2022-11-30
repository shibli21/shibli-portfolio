import Resume from "./Resume";

const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col min-h-[70vh] justify-center items-center">
        <div className="text-center">
          <h1 className="font-secondary  text-3xl md:text-4xl mb-6">Hi! I am</h1>
          <h1 className="font-secondary text-4xl md:text-7xl underline  decoration-orange-600">Syed Shibli Mahmud</h1>
          <h1 className=" tracking-widest uppercase text-lg md:text-xl mt-2">
            SOFTWARE ENGINEER, FULL STACK & APP DEVELOPER
          </h1>
        </div>
      </div>

      <Resume />
    </div>
  );
};

export default About;
