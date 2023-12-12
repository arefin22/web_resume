import Title from "../components/shared/Title";

const Skills = () => {
    return (
        <div id="skills" className="gradient-background rounded-2xl m-5 p-4 py-24">
            <Title title='Skills'></Title>
            <div className="border-l-2 border-sky-900 text-black ml-8  p-4">
                <h3 className="font-medium text-xl">Web Design</h3>
                <div className="">
                    <p>• HTML</p>
                    <p>• CSS</p>
                    <p>• Tailwind</p>
                    <p>• Bootstrap</p>
                </div>
            </div>
            <div className="border-l-2 border-sky-900 ml-8 mt-4 text-black p-4">
                <h3 className="font-medium text-xl">Web Development (FrontEnd)</h3>
                <div className="">
                    <p>• React Js</p>
                    <p>• Next Js</p>
                </div>
            </div>
            <div className="border-l-2 border-sky-900 ml-8 mt-4 text-black p-4">
                <h3 className="font-medium text-xl">Web Development (BackEnd)</h3>
                <div className="">
                    <p>• Express Js</p>
                    <p>• Mongo DB</p>
                    <p>• Mongoose</p>
                </div>
            </div>
            <div className="border-l-2 border-sky-900 ml-8 mt-4 text-black p-4">
                <h3 className="font-medium text-xl">UI Design</h3>
                <div className="">
                    <p>• Figma</p>
                </div>
            </div>

        </div>
    );
};

export default Skills;