import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <div className="wrapTitle centerContent">
        <h1 className="cinzel text-center pageTitle text-light ">Services</h1>
      </div>

      <div className="wrap centerContent">
        <div id="accordion" className="container">
          <div class="card">
            <a
              className="accordianTitle text-light"
              href="#collapse1"
              data-parent="#accordion"
              data-toggle="collapse"
            >
              <div class="card-header text-center">Audio Engineering</div>
            </a>

            <div id="collapse1" class="collapse show" data-parent="#accordion">
              <div class="card-body text-light">
                Audio engineering pertains to the technical practice of
                achieving higher quality sound and is also a form of art in
                itself. If you like what I do and how I do it, feel free to hit
                me up for more info and/or to request a quote :)
                <br />
                <br />
                <div className="lead text-center">Turnaround time:</div>
                <div className="text-center"> 3-7 days. </div>
              </div>
            </div>
          </div>

          <div class="card">
            <a
              className="accordianTitle text-light"
              href="#collapse2"
              data-parent="#accordion"
              data-toggle="collapse"
            >
              <div class="card-header text-center">Mixing</div>
            </a>

            <div id="collapse2" class="collapse" data-parent="#accordion">
              <div class="card-body text-light">
                Mixing focuses on the enhancing and blending of individual
                elements of a track in order to create a balanced and quality
                result. Mastering included.
                <br />
                <br />
                <div className="text-center">Requirements:</div>
                <ul>
                  <li>Exported Stems in WAV or AIFF format</li>
                  <li>
                    Each stem titled and organized by category (ex: kick/drums,
                    snare/claps, vocals, fx, bass, instrumentals, synths, etc.){' '}
                  </li>
                  <li>Between - 3 db and - 6 db of headroom</li>
                  <li>Rough mix/demo of your work </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card">
            <a
              className="accordianTitle text-light"
              href="#collapse3"
              data-parent="#accordion"
              data-toggle="collapse"
            >
              <div class="card-header text-center">Mastering</div>
            </a>

            <div id="collapse3" class="collapse" data-parent="#accordion">
              <div class="card-body text-light">
                Mastering focuses on crafting a stereo file to produce the best
                possible version.
                <br />
                <br />
                <div className="text-center">Requirements:</div>
                <ul>
                  <li>Stereo file in WAV or AIFF format</li>
                  <li>Between -3 db and - 6 db of headroom </li>
                  <li>Rough mix/demo of your work </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card">
            <a
              className="accordianTitle text-light"
              href="#collapse4"
              data-parent="#accordion"
              data-toggle="collapse"
            >
              <div class="card-header text-center">Web Development</div>
            </a>

            <div id="collapse4" class="collapse" data-parent="#accordion">
              <div class="card-body text-light">
                Need a website? Let me build one for you! I develop all kinds -
                ranging from artist pages to sites for businesses. Expand your
                online presence and connect with people!
                <br />
                <br />
                Prices will vary depending on the project and any additional
                requests.
              </div>
            </div>
          </div>
          <Link className="" to="/contact">
            <Button title={'GET IN TOUCH'} />
          </Link>
        </div>
      </div>
    </div>
  );
};
