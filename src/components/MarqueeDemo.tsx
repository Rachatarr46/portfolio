/* eslint-disable @next/next/no-img-element */
import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
    color: "from-green-400 to-yellow-400"
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    color: "from-yellow-400 to-green-400"
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
    color: "from-purple-400 to-pink-400"
  },
  {
    name: "James",
    username: "@james",
    body: "This is absolutely incredible! I can't believe how good it is.",
    img: "https://avatar.vercel.sh/james",
    color: "from-blue-400 to-green-400"
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Wow! This exceeded all my expectations. Simply amazing!",
    img: "https://avatar.vercel.sh/jane",
    color: "from-pink-400 to-orange-400"
  },
  {
    name: "Mike",
    username: "@mike",
    body: "Incredible work! This is exactly what I was looking for.",
    img: "https://avatar.vercel.sh/mike",
    color: "from-indigo-400 to-purple-400"
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  color,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  color: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300",
        "border-gray-200 hover:border-gray-300"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm`}>
          {name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-800">
            {name}
          </figcaption>
          <p className="text-xs text-gray-500">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm text-gray-600 leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
      <Marquee pauseOnHover vertical className="[--duration:25s] [--gap:1.5rem]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:25s] [--gap:1.5rem]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
}
