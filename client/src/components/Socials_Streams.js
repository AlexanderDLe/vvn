import React from 'react';
import scIcon from '../img/SC Icon2.webp';
import spotifyIcon from '../img/Spotify img.webp';
import ytIcon from '../img/Youtube img.webp';
import itIcon from '../img/iTunes img.webp';
import fbIcon from '../img/FB img.webp';
import igIcon from '../img/instagram img.webp';
import tIcon from '../img/twitter img.webp';

export default () => {
  return (
    <div>
      <div className="wrapTitle centerContent">
        <h1 className="cinzel text-center pageTitle text-light ">
          Socials/Streams
        </h1>
      </div>

      <div className="wrap centerContent">
        <div class="ssContainer ">
          <div class="scDiv ss">
            <img src={scIcon} alt="" />
            <h2>
              <div id="arrow-right" class="arrow" />PLAY
            </h2>
          </div>
          <div class="spotifyDiv ss">
            <img src={spotifyIcon} alt="" />
            <h2>
              <div id="arrow-right" class="arrow" />PLAY
            </h2>
          </div>
          <div class="youtubeDiv ss">
            <img src={ytIcon} alt="" />
            <h2>
              <div id="arrow-right" class="arrow" />PLAY
            </h2>
          </div>
          <div class="iTunesDiv ss">
            <img src={itIcon} alt="" />
            <h2>DOWNLOAD</h2>
          </div>
          <div class="facebookDiv ss">
            <img src={fbIcon} alt="" />
            <h2>VIEW</h2>
          </div>
          <div class="instagramDiv ss">
            <img src={igIcon} alt="" />
            <h2>VIEW</h2>
          </div>
          <div class="twitterDiv ss">
            <img src={tIcon} alt="" />
            <h2>VIEW</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
