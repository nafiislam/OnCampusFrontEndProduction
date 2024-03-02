import { Avatar, Tooltip, Typography } from "@material-tailwind/react";

export default function AvatarStack() {
  return (
    <div className="flex items-center -space-x-3">
      <Tooltip
        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
        content={
          <div>
            <Typography color="red" placeholder={""} variant="small">
              Mikasa Ackerman
            </Typography>
            <Typography
              placeholder={""}
              variant="small"
              color="gray"
              className="font-normal"
            >
              1905009
            </Typography>
          </div>
        }
      >
        <Avatar
          placeholder={""}
          size="sm"
          variant="circular"
          alt="natali craig"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          className="border-2 border-white hover:z-10"
        />
      </Tooltip>

      <Tooltip
        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
        content={
          <div>
            <Typography color="red" placeholder={""} variant="small">
              Nahin Khan
            </Typography>
            <Typography
              placeholder={""}
              variant="small"
              color="gray"
              className="font-normal"
            >
              1905009
            </Typography>
          </div>
        }
      >
        <Avatar
          placeholder={""}
          size="sm"
          variant="circular"
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          className="border-2 border-white hover:z-10"
        />
      </Tooltip>

      <Tooltip
        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
        content={
          <div>
            <Typography color="red" placeholder={""} variant="small">
              Nobara
            </Typography>
            <Typography
              placeholder={""}
              variant="small"
              color="gray"
              className="font-normal"
            >
              1905009
            </Typography>
          </div>
        }
      >
        <Avatar
          placeholder={""}
          size="sm"
          variant="circular"
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
          className="border-2 border-white hover:z-10"
        />
      </Tooltip>

      <Tooltip
        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
        content={
          <div>
            <Typography color="red" placeholder={""} variant="small">
              RJ Ruhan
            </Typography>
            <Typography
              placeholder={""}
              variant="small"
              color="gray"
              className="font-normal"
            >
              1805017
            </Typography>
          </div>
        }
      >
        <Avatar
          placeholder={""}
          size="sm"
          variant="circular"
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          className="border-2 border-white hover:z-10"
        />
      </Tooltip>

      <Tooltip
        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
        content={
          <div>
            <Typography color="red" placeholder={""} variant="small">
              Boss Nafi
            </Typography>
            <Typography
              placeholder={""}
              variant="small"
              color="gray"
              className="font-normal"
            >
              1905000
            </Typography>
          </div>
        }
      >
        <Avatar
          placeholder={""}
          size="sm"
          variant="circular"
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
          className="border-2 border-white hover:z-10"
        />
      </Tooltip>
    </div>
  );
}
