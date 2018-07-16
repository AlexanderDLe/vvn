import React from 'react';
import VVNPic from '../img/VVN Pic.png';
import Button from './Button';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <div className="wrapTitle centerContent anim">
        <h1 className="cinzel text-center pageTitle text-light ">About</h1>
      </div>

      <div className="wrap centerContent">
        <div className="container anim">
          <div className="row text-center">
            <div className="col-xl-6">
              <img src={VVNPic} alt="" className="VVNPic" />
            </div>
            <div className="text-light col-xl-6 text-left aboutText">
              <p>Hello there :) </p>
              <p>I'm Vivian, also known as, VVN. </p>
              <p>
                I love experimenting with all different kinds of genres and
                sounds. Silence is my canvas and the possibilities are endless.
                I aim to unceasingly push my boundaries and expand my horizons
                in the music realm and am continuously looking to share my works
                with the world.
              </p>
              <p>
                Music has always been a huge part of my life and growing up I've
                enjoyed hearing how it has evolved. Now, I am excited and
                grateful to finally be a part of this ongoing evolution. To be
                able to create my own music means so much to me, and then to be
                able to share it is even better. I invest my whole heart into
                each and every one of my artworks, so expect nothing but the
                best from me.
              </p>
              <Link className="" to="/contact">
                <Button title={'CONTACT@VVNZQUAN.COM'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
