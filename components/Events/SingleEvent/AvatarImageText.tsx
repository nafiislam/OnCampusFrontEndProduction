import { Avatar, Typography } from "@material-tailwind/react";

export default function AvatarImageText() {
    return (
        <div className="flex items-center gap-4">
  <Avatar
    src="https://docs.material-tailwind.com/img/face-2.jpg"
    alt="avatar"
    placeholder={""}
  />
  <div>
    <Typography placeholder={""} variant="h6">
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
</div>
    );
}
