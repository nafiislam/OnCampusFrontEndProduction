"use client";
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  BookOpenIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ChatBubbleBottomCenterTextIcon,
  BeakerIcon,
  ShoppingBagIcon,
  ComputerDesktopIcon,
  CurrencyBangladeshiIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export function SidebarWithContentSeparator() {
  const [open, setOpen] = React.useState(0);
  const { data: session, status } = useSession();

  const [isAdmin, setIsAdmin] = React.useState(false);

  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
    if (session?.roles.includes("admin")) {
      setIsAdmin(true);
    }
  }, [session, status]);

  if (!session) {
    return (
      <>
        <Card
          placeholder={""}
          className="h-[calc(130vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/2"
        >
          <></>
        </Card>
      </>
    );
  }

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      placeholder={""}
      className="h-[calc(130vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/2"
    >
      <div className="mb-2 p-4">
        {/* <Typography variant="h5" color="blue-gray">
          TABLE OF CONTENTS
        </Typography> */}
      </div>
      <List placeholder={""}>
        <Accordion
          placeholder={""}
          open={open === 1}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-90" : ""
              }`}
            />
          }
        >
          <ListItem placeholder={""} className="p-0" selected={open === 1}>
            <AccordionHeader
              placeholder={""}
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix placeholder={""}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                placeholder={""}
                color="blue-gray"
                className="mr-auto font-normal"
              >
                General
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List placeholder={""} className="p-0">
              <Link href="/General/all">
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={""}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All
                </ListItem>
              </Link>
              <Link href="/General/DISCUSSION">
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={""}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Discussions
                </ListItem>
              </Link>
              <Link href="/General/BLOOD">
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={undefined}>
                    <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Blood Posts
                </ListItem>
              </Link>
              <Link href="/General/TUITION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <CurrencyBangladeshiIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Tution Posts
                </ListItem>
              </Link>
              <Link href="/General/PRODUCT">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Product Posts
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 2}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Batch
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href="/Batch/all">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All
                </ListItem>
              </Link>
              <Link href="/Batch/DISCUSSION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Discussions
                </ListItem>
              </Link>
              <Link href="/Batch/BLOOD">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Blood Posts
                </ListItem>
              </Link>
              <Link href="/Batch/TUITION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <CurrencyBangladeshiIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Tution Posts
                </ListItem>
              </Link>
              <Link href="/Batch/PRODUCT">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Product Posts
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 3}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Dept
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href="/Dept/all">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All
                </ListItem>
              </Link>
              <Link href="/Dept/DISCUSSION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Discussions
                </ListItem>
              </Link>
              <Link href="/Dept/BLOOD">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Blood Posts
                </ListItem>
              </Link>
              <Link href="/Dept/TUITION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <CurrencyBangladeshiIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Tution Posts
                </ListItem>
              </Link>
              <Link href="/Dept/PRODUCT">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Product Posts
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 4 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 4}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Batch Dept
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href="/BatchDept/all">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All
                </ListItem>
              </Link>
              <Link href="/BatchDept/DISCUSSION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Discussions
                </ListItem>
              </Link>
              <Link href="/BatchDept/BLOOD">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Blood Posts
                </ListItem>
              </Link>
              <Link href="/BatchDept/TUITION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <CurrencyBangladeshiIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Tution Posts
                </ListItem>
              </Link>
              <Link href="/BatchDept/PRODUCT">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Product Posts
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 5 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 5}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <CalendarDaysIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Events
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href="/CreateEvent">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Create Event
                </ListItem>
              </Link>
              <Link href="/AllEvents">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All Events
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 6}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 6 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 6}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <BookOpenIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Notices
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href={"/Notice/addNotice"}>
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Add notice
                </ListItem>
              </Link>
              <Link href={"/Notice/allNotices"}>
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All notices
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {isAdmin ? (
          <Accordion
            open={open === 7}
            icon={
              <ChevronRightIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 7 ? "rotate-90" : ""
                }`}
              />
            }
            placeholder={undefined}
          >
            <ListItem
              className="p-0"
              selected={open === 7}
              placeholder={undefined}
            >
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className="border-b-0 p-3"
                placeholder={undefined}
              >
                <ListItemPrefix placeholder={undefined}>
                  <BookOpenIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal"
                  placeholder={undefined}
                >
                  Admin
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1 pl-2">
              <List className="p-0" placeholder={undefined}>
                <Link href="/admin/createStudent">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    Create New Student
                  </ListItem>
                </Link>
                <Link href="/admin/createClub">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    Create New Club
                  </ListItem>
                </Link>
                <Link href="/admin/createBatch">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    Create New Batch
                  </ListItem>
                </Link>
                <Link href="/admin/users">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    All Users
                  </ListItem>
                </Link>
                <Link href="/admin/reportedPosts">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    Reported Posts
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
        ) : (
          ""
        )}
      </List>
    </Card>
  );
}
