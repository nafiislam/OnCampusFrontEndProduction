"use client";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AvatarImageText from "./AvatarImageText";
import AvatarStack from "./AvatarStack";
import { svgIcons } from "./DummyIconColor";

interface SectionOffset {
  id: string;
  offset: number;
  height: number;
}

const SingleEvent = ({ event }: { event: any }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = Array.from(
        document.querySelectorAll("[data-section]")
      ).map((section) => ({
        id: section.id,
        offset: (section as HTMLElement).offsetTop,
        height: (section as HTMLElement).offsetHeight,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const { id, offset, height } of sectionOffsets) {
        if (scrollPosition >= offset && scrollPosition < offset + height) {
          setActiveSection(id);
          break;
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const RandomSvgIcon = () => {
    // Randomly select an SVG icon component
    const SelectedSvgIcon =
      svgIcons[Math.floor(Math.random() * svgIcons.length)];

    return (
      <div>
        {/* Render the selected SVG icon component */}
        <SelectedSvgIcon />
      </div>
    );
  };

  return (
    <div className="">
      <div className="flex flex-row gap-8">
        <div className="w-3/4">
          <div id="section1" data-section className="bg-white">
            <div className="flex flex-col items-center gap-8">
              {/* <img
                src="/images/event1.jpg"
                className=" h-96 w-full rounded-2xl"
                alt="image"
              /> */}
              <div className="w-4/5">
                <Typography
                  variant="h3"
                  className="text-center"
                  placeholder={undefined}
                >
                  {event.title}
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
                </svg>

                <Typography variant="small" placeholder={undefined}>
                  {event.organizers}
                </Typography>
              </div>
              <div className="flex flex-row gap-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V8h5.75a.75.75 0 0 1 0 1.5H8.5v4.275c0 .296.144.455.26.499a3.5 3.5 0 0 0 4.402-1.77h-.412a.75.75 0 0 1 0-1.5h.537c.462 0 .887.21 1.156.556.278.355.383.852.184 1.337a5.001 5.001 0 0 1-6.4 2.78C7.376 15.353 7 14.512 7 13.774V9.5H5.75a.75.75 0 0 1 0-1.5H7V6.56l-.22.22a.75.75 0 1 1-1.06-1.06l.22-.22Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Typography variant="small" placeholder={undefined}>
                  {event.Sponsors}
                </Typography>
              </div>
              {event.location && (
                <div className="flex flex-row gap-2 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <Typography variant="small" placeholder={undefined}>
                    {event.location}
                  </Typography>
                </div>
              )}

              {event.onlineLink && (
                <div className="flex flex-row gap-2 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                    />
                  </svg>

                  <Typography variant="small" placeholder={undefined}>
                    {event.onlineLink}
                  </Typography>
                </div>
              )}

              <div className="flex flex-row gap-2 text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Typography variant="small" placeholder={undefined}>
                  {event.startDate} to {event.finishDate}
                </Typography>
              </div>

              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Typography variant="small" placeholder={undefined}>
                  Posted By :
                  <Tooltip content={<AvatarImageText />}>
                    <span className="text-blue-600">{event.user.name} </span>
                  </Tooltip>
                  {event.createdAt}
                </Typography>
              </div>

              <hr className="border-gray-700 my-2" />

              <div className="flex items-center gap-4">
                <Button
                  variant="text"
                  className="flex items-center gap-3"
                  placeholder={undefined}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  Participating
                </Button>
                <Button
                  variant="text"
                  className="flex items-center gap-3"
                  placeholder={undefined}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  Add to Bookmark
                </Button>

                <div className="ml-auto flex flex-row gap-2">
                  <Typography
                    className="mt-1 text-green-600"
                    variant="small"
                    placeholder={undefined}
                  >
                    participating - 300
                  </Typography>
                  <AvatarStack />
                </div>
              </div>

              <hr className="border-gray-700 my-2" />
            </div>
          </div>
          <div id="section2" data-section className="">
            <Typography variant="h3" placeholder={undefined}>
              Event Details
            </Typography>
            <Typography variant="small" placeholder={undefined}>
              {event.description}
            </Typography>

            <hr className="border-gray-700 my-8" />
          </div>
          {event.registration && (
            <div id="section3" data-section className="">
              <Typography variant="h3" placeholder={undefined}>
                Registration Details
              </Typography>

              <Typography variant="small" placeholder={undefined}>
                regestration details
              </Typography>
              <hr className="border-gray-700 my-8" />
            </div>
          )}
          {event.timeline && event.timeline.length>0 && (
            <div id="section4" data-section className="">
              <div className="">
                <Typography
                  className="my-4 p-8"
                  variant="h3"
                  placeholder={undefined}
                >
                  Timeline
                </Typography>
                {event.timeline.map((timeline: any, index: number) => {
                  return (
                    <div key={index} className="">
                      <Timeline className="w-1/2 ml-12">
                        <TimelineItem className="">
                          {index == event.timeline.length - 1 ? null : (<TimelineConnector className="" />)}
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-gray-100 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-200">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="red"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                placeholder={undefined}
                              >
                                {timeline.name}
                              </Typography>
                              <div className="flex flex-row gap-2">
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                  placeholder={undefined}
                                >
                                  {timeline.startDate} {timeline.finishDate && (`to ${timeline.finishDate}`)}
                                </Typography>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4 ml-8"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                  />
                                </svg>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                  placeholder={undefined}
                                >
                                  {timeline.location}
                                </Typography>
                              </div>
                            </div>
                          </TimelineHeader>
                          <TimelineBody className="pb-8">
                            <Typography
                              placeholder={""}
                              variant="small"
                              color="gray"
                              className="font-normal mt-4 text-gray-600"
                              dangerouslySetInnerHTML={{ __html: timeline.description }}
                            >
                              
                            </Typography>
                          </TimelineBody>
                        </TimelineItem>
                      </Timeline>
                    </div>
                  );
                })}
              </div>

              <hr className="border-gray-700 my-8" />
            </div>
          )}

          {event.prizes && (
            <div id="section5" data-section className="">
              <Typography variant="h3" placeholder={undefined}>
                Prize Pool
              </Typography>

              <Typography variant="small" placeholder={undefined}>
                prize pool details
              </Typography>
              <hr className="border-gray-700 my-8" />
            </div>
          )}

          {event.resources && event.resources.length > 0 && (
            <div id="section6" data-section className="">
              <Typography variant="h3" placeholder={undefined}>
                Resources
              </Typography>

              {event.resources.map((resource: any, index: number) => {
                return (
                  <div key={index} className="">
                    <Typography variant="small" placeholder={undefined}>
                      {resource.description}
                    </Typography>
                    <a href={resource.link} className="text-blue-500">
                      {resource.link}
                    </a>
                  </div>
                );
              })}
              <hr className="border-gray-700 my-8" />
            </div>
          )}

          {event.rules && (
            <div id="section7" data-section className="">
              <Typography variant="h3" placeholder={undefined}>
                Rules
              </Typography>

              <Typography variant="small" placeholder={undefined}>
                {event.rules}
              </Typography>
              <hr className="border-gray-700 my-8" />
            </div>
          )}
        </div>

        <div className="w-1/4 text-gray-400">
          <nav className="fixed">
            <ul>
              <li
                className={`py-2 px-4 ${
                  activeSection === "section1" ? "text-black" : ""
                }`}
              >
                <a href="#section1">general Information</a>
              </li>
              <li
                className={`py-2 px-4 ${
                  activeSection === "section2" ? "text-black" : ""
                }`}
              >
                <a href="#section2">Details</a>
              </li>
              {event.registration && (
                <li
                  className={`py-2 px-4 ${
                    activeSection === "section3" ? "text-black" : ""
                  }`}
                >
                  <a href="#section3">Registration</a>
                </li>
              )}
              {event.timeline && (
                <li
                  className={`py-2 px-4 ${
                    activeSection === "section4" ? "text-black" : ""
                  }`}
                >
                  <a href="#section4">Timeline</a>
                </li>
              )}
              {event.prizes && (
                <li
                  className={`py-2 px-4 ${
                    activeSection === "section5" ? "text-black" : ""
                  }`}
                >
                  <a href="#section5">prizePools</a>
                </li>
              )}
              {event.resources && (
                <li
                  className={`py-2 px-4 ${
                    activeSection === "section6" ? "text-black" : ""
                  }`}
                >
                  <a href="#section6">Resources</a>
                </li>
              )}
              {event.rules && (
                <li
                  className={`py-2 px-4 ${
                    activeSection === "section6" ? "text-black" : ""
                  }`}
                >
                  <a href="#section7">Rules</a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
