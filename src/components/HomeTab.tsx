import React from "react";
import "./HomeTab.css";
const HomeTab: React.FC = () => {
  return (
    <div>
      <section id="home" className="hero">
        <video autoPlay muted loop id="hero-video">
          <source
            src="https://media.istockphoto.com/id/1402685665/video/future-digital-world-cyber-city-smart-city-and-iot-technology-online-internet-cyber-security.mp4?s=mp4-640x640-is&k=20&c=W3UKPzS7RpqvDOfiZ30Hz4IzDSOpK0tlu729x5ZaTb4="
            type="video/mp4"
          />
        </video>
        <div className="hero-content">
          <h1 className="fade-in-up">
            Master Data Science &amp; Machine Learning
          </h1>
          <p className="fade-in-up">
            Unlock your potential by solving business problems with cutting-edge
            solutions.
          </p>

          <button className="button">
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="black"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Explore All
          </button>
        </div>
      </section>

      <section className="about fade-in-section">
        <h2 className="navtext">Why Data Science?</h2>
        <p>
          Data Science enables businesses to make data-driven decisions by
          transforming raw data into valuable insights using AI and Machine
          Learning.
        </p>
      </section>

      <section className="courses fade-in-section">
        <h2>Our Courses</h2>
        <div className="course-container">
          <div className="course-card zoom-hover">
            <h3>Data Science & AI Program</h3>
            <video autoPlay muted loop className="course-video">
              <source src="https://media.istockphoto.com/id/1402685665/video/future-digital-world-cyber-city-smart-city-and-iot-technology-online-internet-cyber-security.mp4?s=mp4-640x640-is&k=20&c=W3UKPzS7RpqvDOfiZ30Hz4IzDSOpK0tlu729x5ZaTb4=" />
            </video>
            <p>
              Get started with data manipulation, analysis, and visualization
              techniques.
            </p>

            <button className="cta">
              <span className="span">Enroll</span>
              <span className="second">
                <svg
                  width="50px"
                  height="20px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      className="one"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      className="two"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      className="three"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>

          <div className="course-card zoom-hover">
            <h3>Advanced Data Science Techniques</h3>
            <video autoPlay muted loop className="course-video">
              <source
                src="https://media.istockphoto.com/id/1957274825/video/abstract-circuit-lines-with-blockchain-technology-concept-futuristic-data-transfer-and.mp4?s=mp4-640x640-is&k=20&c=B-yF0VXzOTOik-9qOThKJq4iv6UpFIvv8LVd4qgADEE="
                type="video/mp4"
              />
            </video>
            <p>
              Master deep learning, neural networks, and data processing
              techniques.
            </p>

            <button className="cta">
              <span className="span">ENROLL</span>
              <span className="second">
                <svg
                  width="50px"
                  height="20px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      className="one"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      className="two"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      className="three"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      <div className="containt">
        <div className="image-section">
          <img
            src="https://img.freepik.com/free-vector/organic-flat-medical-conference-illustration_23-2148892742.jpg?size=626&ext=jpg&ga=GA1.1.1168478165.1727593725&semt=ais_hybrid"
            alt="ISDP Program"
          />
        </div>
        <div className="content-section">
          <h1>Institutional Skill Development Program ISDP</h1>
          <p>
            Institutional Skill Development Program is crafted to help students
            and faculty excel both academically and professionally. With a focus
            on hands-on learning, ISDP offers extensive training in Data
            Science, AI, ML, DevOps, and many more.
          </p>
          <p>
            Beyond technical skills, we cover essential non-technical areas like
            communication, leadership, and emotional intelligence. Our Campus
            Recruitment Training CRT prepares you for job market challenges
            with resume building, interview skills, and more.
          </p>
          <p>Join ISDP to elevate your skills and boost your career!</p>
          <button>LEARN MORE ➞</button>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
