import Title from "../components/shared/Title";

const Skills = () => {
    return (
        <div id="skills" className="backdrop-blur-lg bg-white/10 rounded-2xl m-5 p-4 py-24">
            <Title title='Skills'></Title>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <div className="border-l-2 border-sky-900 text-black ml-2 lg:ml-8  p-4">
                        <h3 className="font-medium text-xl">Web Design</h3>
                        <div className="">
                            <p>• HTML</p>
                            <p>• CSS</p>
                            <p>• Tailwind</p>
                            <p>• Bootstrap</p>
                        </div>
                    </div>
                    <div className="border-l-2 border-sky-900 ml-2 lg:ml-8 mt-4 text-black p-4">
                        <h3 className="font-medium text-xl">Web Development (FrontEnd)</h3>
                        <div className="">
                            <p>• React Js</p>
                            <p>• Next Js</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-l-2 border-sky-900 ml-2 lg:ml-8 mt-4 text-black p-4">
                        <h3 className="font-medium text-xl">Web Development (BackEnd)</h3>
                        <div className="">
                            <p>• Express Js</p>
                            <p>• Mongo DB</p>
                            <p>• Mongoose</p>
                        </div>
                    </div>
                    <div className="border-l-2 border-sky-900 ml-2 lg:ml-8 mt-4 text-black p-4">
                        <h3 className="font-medium text-xl">UI Design</h3>
                        <div className="">
                            <p>• Figma</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl text-sky-900 font-medium underline mt-3">My Experience</h3>
                <div>
                    <div className="border-l-2 border-sky-900 ml-2 lg:ml-8 mt-4 text-black p-4">
                        <h3 className="font-medium text-xl">Sheba Web Technology, Dhaka</h3>
                        <div className="">
                            <p>March 2020 - August 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;