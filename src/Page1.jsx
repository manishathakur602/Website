

import { Link } from "react-router-dom";
import { useState } from "react";



function Page1() {
  const [content, setContent] = useState({
    imageSrc: "https://img.freepik.com/free-vector/vpn-security-technology-isometric-illustration-digital-personal-data-protection-software_33099-327.jpg?t=st=1725958626~exp=1725962226~hmac=1fde34a9ecbb9dd6a4d37b8009541ab0f6d8c4fd38af083fe693cbe0d7ba17be&w=1380",
    title: "Web Development",
    description1: "Did you know that you can visit TooCSS website for the latest listing of HTML templates and a variety of useful templates.",
    description2: "You just need to go and visit that website right now. If you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.",
    duration: "36 Hours"
  });

  const handleClick = (newContent) => {
    setContent(newContent);
  };

  const courses = [
    {
      imageSrc: "https://img.freepik.com/free-photo/operation-process-performance-development-icon_53876-16541.jpg?t=st=1727678099~exp=1727681699~hmac=6b65a54a709ed02c74be772b3d00dcf41a2e912c89f61bd1f56da6798ed8f8ab&w=740",
      title: "Web Develoment",
      description1: "Did you know that you can visit TooCSS website for the latest listing of HTML templates and a variety of useful templates.",
      description2: "You just need to go and visit that website right now. If you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.",
      duration: "36 Hours"
    },
    {
      imageSrc: "https://as2.ftcdn.net/v2/jpg/02/62/17/37/1000_F_262173764_3sxll45SOaGP5uEC7PukV3LHOB7H8dp2.jpg",
      title: "Data Science",
      description1: "Data Science is an interdisciplinary field that uses various techniques to extract insights from data.",
      description2: "With the rise of big data, data science has become essential for understanding and predicting trends in various industries.",
      duration: "48 Hours"
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/designers-team-working-3d-model_23-2149371852.jpg?t=st=1727678665~exp=1727682265~hmac=403810391a7c79b473df0565ad5e2b5271a2ae592ac3b4c8e9e5e32359ef0960&w=740",
      title: "Machine Learning",
      description1: "Machine Learning is a branch of artificial intelligence that focuses on building systems that can learn from data.",
      description2: "It enables computers to make decisions without being explicitly programmed, improving over time with more data.",
      duration: "40 Hours"
    },
    {
      imageSrc: "https://img.freepik.com/free-vector/artificial-intelligence-landing-page-template_23-2148374762.jpg?t=st=1727678831~exp=1727682431~hmac=f980166d497a9eb4759263be48ca60208c7c0eb98731dce786327d4a5b0bb427&w=740",
      title: "AI & Robotics",
      description1: "AI & Robotics combine artificial intelligence with robotics to create intelligent machines capable of performing complex tasks.",
      description2: "These technologies are revolutionizing industries from manufacturing to healthcare.",
      duration: "50 Hours"
    }
  ];

  return (
    <>
      <div className="p-2">
        <div className="flex flex-col items-center">
          <h6 className="font-normal text-gray-500 text-[19px]">Our Courses</h6>
          <h1 className="text-[30px] font-bold mt-2">
            What You Can <b className="text-purple-600">Learn</b>
          </h1>
          <p className="lg:w-[35%] text-center text-gray-500 mt-4">
            You just think about TemplateMo whenever you need free CSS templates for your business website
          </p>
        </div>

        <div className="lg:flex lg:gap-5 lg:p-6 mt-3">
          {/* {/ Buttons code /} */}
          <div className="flex flex-col lg:w-[30%] text-center p-3">
            {courses.map((course, index) => (
              <Link
                key={index}
                to="#"
                className="border-2 border-solid border-blue-700 p-5 rounded-lg hover:bg-purple-600 hover:text-white mt-10 first:mt-0"
                onClick={() => handleClick(course)}
              >
                {course.title} 
              </Link>
            ))}
          </div>

          {/* {/ Content div */}


          
          <div className="p-3 ">
            <div className="sm:flex p-3 sm:gap-3 shadow-lg shadow-black rounded-lg">
              <div>
                <img src={content.imageSrc} className="h-full w-full rounded-tl-lg rounded-bl-lg" />
              </div>

              <div className="mt-2 sm:mt-0 sm:p-7 flex flex-col sm:w-[70%]">
                <h1 className="font-bold text-[30px]">{content.title}</h1>
                <p className="mt-3">{content.description1}</p>
                <p className="mt-3">{content.description2}</p>
                <div className="mt-3 sm:mt-8">
                  <b className="pr-6 border-r-2 border-solid border-black">{content.duration}</b>{" "}
                  <b className="pr-6 pl-4 border-r-2 border-solid border-black">{content.duration}</b>{" "}
                  <b className="pl-4">{content.duration}</b>
                </div>
                <Link to="#" className="mt-4 underline text-purple-500">
                  Subscribe Channel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;

