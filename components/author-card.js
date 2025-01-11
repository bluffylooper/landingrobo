import Link from "next/link";

export default function AuthorCard({ author }) {
  const authorAvatar = author.profile_image
    ? author.profile_image
    : "/images/team/team-1.png";
  return (
    <Link href={"/"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={authorAvatar}
        alt={`Profile image ${author.first_name} ${author.last_name}`}
      />
      {author.first_name} {author.last_name}
    </Link>
  );
}
