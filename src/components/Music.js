import React from 'react';

export default () => {
  return (
    <div>
      <div className="wrapTitle centerContent anim">
        <h1 className="cinzel text-center pageTitle text-light ">Music</h1>
      </div>

      <div className="wrap centerContent">
        <div className="container anim">
          <div className="row text-center">
            <div className="col-xl-6">
              <iframe
                title="1"
                className="scPlayer"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/367168081&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
            <div className="col-xl-6">
              <iframe
                title="2"
                className="scPlayer"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/367163317&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
