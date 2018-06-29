import React from 'react';
import fbIcon from '../img/FB Icon.webp';
import igIcon from '../img/IG Icon.webp';
import scIcon from '../img/SC Icon.webp';
import tIcon from '../img/T Icon.webp';
import ytIcon from '../img/YT Icon.webp';

export default () => {
  return (
    <footer className="text-center text-light">
      <a className="icon" href="">
        <img src={fbIcon} alt="" />
      </a>
      <a className="icon" href="">
        <img src={igIcon} alt="" />
      </a>
      <a className="icon" href="">
        <img src={scIcon} alt="" />
      </a>
      <a className="icon" href="">
        <img src={tIcon} alt="" />
      </a>
      <a className="icon" href="">
        <img src={ytIcon} alt="" />
      </a>
      <p className="cinzel">&copy; VVN </p>
    </footer>
  );
};
