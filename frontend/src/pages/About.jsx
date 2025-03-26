import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-2 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Image"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Bazario is committed to bringing the best of the latest trends and
            styles directly to you. We offer a wide selection of products,
            ranging from trendy fashion pieces for children, men, and women, to
            timeless essentials. Our journey began with the vision to create an
            easy, enjoyable shopping experience, one where you can find
            everything you need, all in one place.
          </p>
          <p>
            We focus on quality, convenience, and customer satisfaction,
            offering a hassle-free shopping experience. Whether you’re shopping
            for children’s clothes, men’s fashion, women’s apparel, or more,
            Bazario provides a diverse collection designed to cater to your
            unique style and preferences.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-xl font-bold">Why Choose Bazario?</h2>
        <p className="mt-4">
          We’re not just another e-commerce site. At Bazario, we strive to
          provide:
        </p>
        <ul className="list-disc ml-6 mt-2 pb-4 text-gray-600">
          <li>
            <strong>Quality Products:</strong> Handpicked, high-quality products
            to meet your needs.
          </li>
          <li>
            <strong>Easy Shopping:</strong> User-friendly interface for a
            seamless shopping experience.
          </li>
          <li>
            <strong>Great Deals:</strong> Amazing discounts, offers, and
            exclusive deals just for you!
          </li>
          <li>
            <strong>Exceptional Customer Service:</strong> Dedicated support to
            ensure you're always satisfied with your experience.
          </li>
        </ul>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
