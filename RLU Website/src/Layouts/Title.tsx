
import React from 'react';

type TitleProps = {
  text1: string;
  text2?: string;
  imageUrl?: string;
  link?: string;
};

export function Title({ text1, text2, imageUrl, link }: TitleProps) {
  return (
    <a href={link}>
      <div className="bg-gray-800 hidden lg:flex justify-center py-10 shadow-sm text-4xl font-serif text-slate-200 border-primary-default border-solid border-8 rounded font-semibold transform transition duration-300 ease-in-out hover:scale-105">
        {text1} <img className="h-12 mx-2" src={imageUrl} alt="Logo" /> {text2}
      </div>
    </a>
  );
}