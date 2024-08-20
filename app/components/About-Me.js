// components/AboutMe.js
import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative w-72 h-72 mb-6">
            <Image
              src="/Pfp-Prof.jpeg" // Replace with the path to your profile image
              alt="Muhammad Rayan"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          {/* Name */}
          <h2 className="text-3xl font-extrabold text-white mb-4">Muhammad Rayan</h2>
          {/* About Text */}
          <p className="text-lg text-white mb-4">
            I'm a software engineer with a passion for developing innovative solutions. Currently, I am focused on building full-stack applications and exploring the latest technologies in AI and web development. With experience in various programming languages and frameworks, I enjoy tackling complex problems and learning new skills.
          </p>
        </div>
      </div>
    </section>
  );
}
