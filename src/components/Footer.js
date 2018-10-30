import React from 'react';
import fbIcon from '../img/FB Icon.png';
import igIcon from '../img/IG Icon.png';
import scIcon from '../img/SC Icon.png';
import tIcon from '../img/T Icon.png';
import ytIcon from '../img/YT Icon.png';
import SIcon from '../img/S Icon.png';

export default () => {
  return (
    <footer className="text-center text-light">
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://soundcloud.com/vvnzquan"
      >
        <img src={scIcon} alt="" />
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://open.spotify.com/artist/7215FhQXuF7Ffdvt3Wkeea"
      >
        <img src={SIcon} alt="" />
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/VvnZQuan/"
      >
        <img src={fbIcon} alt="" />
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/vvnzquan/"
      >
        <img src={igIcon} alt="" />
      </a>

      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/VvnZQuan"
      >
        <img src={tIcon} alt="" />
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/channel/UC5vk_SNXWaogpUEdasF7xvQ/featured"
      >
        <img src={ytIcon} alt="" />
      </a>

      <p className="cinzel">&copy; VVN </p>
    </footer>
  );
};
