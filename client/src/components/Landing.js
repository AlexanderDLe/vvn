import React from 'react';
import ANX from '../img/ANX.webp';
import AIMH from '../img/AIMH.webp';
import EGO from '../img/EGO.webp';

export default () => {
  return (
    <div>
      <div className="landing" />
      <div className="landingContent">
        <h1 className="cinzel text-center text-light motto">
          Designed with heart, created to beat.
        </h1>
        <div class="container text-center">
          <iframe
            className="scPlayer"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="SoundcloudPlayer"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/367232629&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
        <div className="imgBox">
          <img src={ANX} alt="Anxiety Cover Art" />
          <img src={AIMH} alt="Ego Cover Art" />
          <img src={EGO} alt="AIMH Cover Art" />
        </div>
      </div>
    </div>
  );
};
