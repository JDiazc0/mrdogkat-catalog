import { imageMap } from "../utils/imageMap";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-screen overflow-x-hidden font-Epilogue text-secondary-500 pt-24 h-lvh">
        <div className="w-screen lg:w-1/2 h-screen">
          <img src={imageMap["Robin"]} alt="" className="p-10" />
        </div>
        <div className="flex w-screen lg:w-1/2 h-screen">
          <h3 className="font-bold text-3xl lg:text-5xl text-center w-full pt-20">
            ¿Quién es Mr.DogKat?
          </h3>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
