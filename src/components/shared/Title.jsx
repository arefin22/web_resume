/* eslint-disable react/prop-types */

const Title = ({ title }) => {
    return (
        <div>
            <div>
                <p className="text-9xl text-sky-500 font-bold -mt-4 opacity-5">{title}</p>
                <div className="-mt-16">
                    <h3 className="text-4xl text-sky-900 font-bold ml-6">{title}</h3>
                </div>
                {/* <hr className="w-56 mt-8 ml-4 mb-4 bg-slate-800" /> */}
                <div className="border-b-2 opacity-20 border-sky-900 mt-8 mb-4 w-96">

                </div>
            </div>
        </div>
    );
};

export default Title;