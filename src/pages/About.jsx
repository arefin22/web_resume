import Title from "../components/shared/Title";

const About = () => {
    return (
        <div id="about" className="backdrop-blur-lg bg-white/10 rounded-2xl m-5 p-4 py-40">
            <Title title="About Me"></Title>
            <p className="w-full lg:w-[80%] text-justify text-black mb-3">
                Im  good at web design using React JS, creating cool user experiences with Figma, and making awesome graphics for Facebook. I want a job where I can use these skills to make things that look great and work well. I love making digital stuff that people enjoy using, and I want to be part of a team thats all about making awesome masterpieces that people love.
            </p>

            <div>
                <h3 className="text-cyan-900 font-medium text-lg lg:text-2xl underline">Academic Update</h3>
                <div className="border-l-2 border-sky-900 ml-2 lg:ml-8 mt-4 text-black p-4">
                    <h3 className="font-medium text-xl mb-2">Bachelor Of Science</h3>
                    <div className="">
                        <p>Computer Science And Engineering</p>
                        <p>Dhaka International University</p>
                        <p>2016-2020</p>
                    </div>
                </div>
                <div className="border-l-2 border-sky-900 ml-2 lg:ml-8 mt-4 text-black p-4">
                    <h3 className="font-medium text-xl mb-2">Master Of Science</h3>
                    <div className="">
                        <p>Computer Science And Engineering</p>
                        <p>Jagannath University</p>
                        <p>2023 - present</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;