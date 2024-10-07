import Image from "next/image";
import profile from "@/assets/Photo.png";

export default function Home() {
  return (
    // Home Page container
    <main className="w-full h-screen flex flex-col items-center">
      {/* Hero Section content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 h-[60%]">
        {/* Description about me */}
        <div className="flex flex-col justify-center items-start w-full">
          <p className="text-lg">Fullstack Developer</p>
          <h1 className="text-3xl font-bold">Hello I'm</h1>
          <h1 className="text-4xl font-third text-text-secondary">
            Ananiya Belew
          </h1>
          <p className="mt-4">
            I’m currently working as a <strong>Software Engineer</strong> for a
            FinTech company.
          </p>
          <p>
            I’m focused on fullstack development, working with{" "}
            <strong>React</strong>, <strong>Spring Boot</strong>,<strong>Express.js</strong>,{" "}
            <strong>HTML</strong> and <strong>CSS</strong>.
          </p>
          <p>
            I have also worked on startup companies as a software developer and integrated third party payment systems to private clients.
          </p>
        </div>

        {/* Image of me */}
        <div className="flex justify-center items-center">
          <Image
            src={profile}
            width={300}
            height={300}
            alt="Profile Pic"
            className="rounded-full"
          />
        </div>
      </div>
      {/* stats section */}
      <div className="flex justify-center items-center gap-10 w-full">
        <div className="flex justify-center items-center gap-1">
          <h1 className="text-7xl font-bold text-text-secondary">2</h1>
          <p>Years of Expirenece</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <h1 className="text-7xl font-bold text-text-secondary">3</h1>
          <p>Projects Completed</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <h1 className="text-7xl font-bold text-text-secondary">7</h1>
          <p>Tech Stacks Used</p>
        </div>
      </div>
    </main>
  );
}
