import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to my journey! With a rich background spanning 5 years in
          software development, I've immersed myself in the dynamic intersection
          of technology and innovation. Currently, my passion lies in Web3
          development, where I specialize in creating decentralized applications
          using Ethereum and Solidity. The blend of my technical prowess with
          technologies like React, Tailwind, Next JS, and GraphQL enables me to
          craft forward-thinking web solutions. My commitment goes beyond just
          coding; it extends to the forefront of blockchain technology, where I
          explore and contribute to the decentralized future. The challenges of
          Web3 development inspire me daily, and I'm dedicated to pushing the
          boundaries of what's possible in this evolving landscape.
        </p>

        <br />

        <p className="text-xl">
          Join me on this exciting journey as we navigate the intricacies of
          blockchain, redefine user experiences, and shape the digital landscape
          together. Here's to another year of exploration, innovation, and
          building a decentralized future!
        </p>
      </div>
    </div>
  );
};

export default About;
