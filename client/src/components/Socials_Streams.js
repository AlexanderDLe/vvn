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
      <div className="wrapTitle centerContent anim">
        <h1 className="cinzel text-center pageTitle text-light ">
          Socials/Streams
        </h1>
      </div>

      <div className="wrap centerContent">
        <div className="ssContainer anim">
          <a
            href="https://soundcloud.com/vvnzquan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="scDiv ss">
              <img src={scIcon} alt="" />
              <h2>
                <div id="arrow-right" className="arrow" />PLAY
              </h2>
            </div>
          </a>

          <a
            href="https://open.spotify.com/artist/7215FhQXuF7Ffdvt3Wkeea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="spotifyDiv ss">
              <img src={spotifyIcon} alt="" />
              <h2>
                <div id="arrow-right" className="arrow" />PLAY
              </h2>
            </div>
          </a>

          <a
            href="https://www.youtube.com/xanandvvn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="youtubeDiv ss">
              <img src={ytIcon} alt="" />
              <h2>
                <div id="arrow-right" className="arrow" />PLAY
              </h2>
            </div>
          </a>
          <a
            href="https://itunes.apple.com/us/artist/vvn/id1298751415"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="iTunesDiv ss">
              <img src={itIcon} alt="" />
              <h2>DOWNLOAD</h2>
            </div>
          </a>

          <a
            href="https://www.facebook.com/VvnZQuan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="facebookDiv ss">
              <img src={fbIcon} alt="" />
              <h2>VIEW</h2>
            </div>
          </a>
          <a
            href="https://www.instagram.com/vvnzquan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="instagramDiv ss">
              <img src={igIcon} alt="" />
              <h2>VIEW</h2>
            </div>
          </a>
          <a
            href="https://twitter.com/VvnZQuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="twitterDiv ss">
              <img src={tIcon} alt="" />
              <h2>VIEW</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
