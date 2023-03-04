import Avatar from "@mui/material/Avatar";
import React from "react";
import "./index.css";
const data = [
  {
    id: "1",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/1.jpg",
    year: "2009-2011 ",
    title: "Our Humble Beginnings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
  },
  {
    id: "2",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/2.jpg",
    year: "March 2011",
    title: "An Agency is Born",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
  },
  {
    id: "3",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/3.jpg",
    year: "December 2015 ",
    title: "Transition to Full Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur! ",
  },
  {
    id: "4",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/4.jpg",
    year: "July 2020",
    title: "Phase Two Expansion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
  },
  {
    id: "5",
    url: "",
    year: "",
    title: "",
    description: "",
  },
];

const About = () => {
  return (
    <div id="about" >
      <h1 className="mt-5 pt-3">ABOUT</h1>
      <p className="p1-1 mb-5 fs-0">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="container line-in-middle mahi">
        {data.map((list, index) => {
          return (
            <div key={index} class="row   m-5" style={{ gap: "80px" }}>
              <div class="col-4">
                {list.id % 2 ? (
                  <div className="text-end">
                    <h3>{list.year}</h3>
                    <h3>{list.title}</h3>
                    <p className="fs-0">{list.description}</p>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="col-2 ">
                <div className="text-end">
                  <Avatar
                    className="avt2"
                    style={{
                      width: "160px",
                      height: "160px",
                      backgroundColor: "#fbae01",
                    }}
                    alt="Remy Sharp"
                    src={list.url}
                  >
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </Avatar>
                </div>
              </div>

              <div class="col-4">
                {list.id % 2 ? (
                  <div></div>
                ) : (
                  <div className="text-start">
                    <h3>{list.year}</h3>
                    <h3>{list.title}</h3>
                    <p className="fs-0">{list.description}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
