import ProfileIcon from "./ProfileIcon";

type UserProp = {
  img: string;
  name: string;
  role: string;
};

type ExecutiveBoardProp = {
  users: UserProp[];
};

export default function ExecutiveBoard({ users }: ExecutiveBoardProp) {
  return users.map((user, i) => <ProfileIcon user={user} key={i} />);
}
