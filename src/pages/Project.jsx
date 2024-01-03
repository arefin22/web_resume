import Title from "../components/shared/Title";

const Project = () => {
    return (
        <div id="projects" className="backdrop-blur-lg bg-white/10 rounded-2xl m-5 p-4 text-black py-52">
            <Title title="Projects"></Title>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <a href="https://jobshq-7364c.web.app/">
                    <div>
                        <img src="https://i.ibb.co/TkswHfV/project-1.png" target="_blank" alt="JOBsHQ" />
                        <p className="p-2">JOBsHQ, Is a Job hunting website. Where Anyone can post a job for hiring and job seekers apply for the jobs</p>
                    </div>
                </a>
                <a href="https://lifemark-5a6d7.web.app/">
                    <div>
                        <img src="https://i.ibb.co/93ZM2Cq/project-2.png" target="_blank" alt="Life Mark" />
                        <p className="p-2">LifeMark, A management System for diagonistics Center. To use As admin, <br />useremail: admin@lifemark.com <br />password: password </p>
                    </div>
                </a>
                <a href="https://beverage-io-d271b.web.app/">
                    <div>
                        <img src="https://i.ibb.co/bdTCrtj/project-3.png" target="_blank" alt="Beverage.IO" />
                        <p className="p-2">Beverage.IO is a coffee shop App Where you can sort items and search too.</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Project;