import React from 'react';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import LightBox from '../common/Lightbox/Lightbox';
import projectInfo from '../../constants/projectInfo';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import Image from '../common/ProjectAssets/Image';
import LongImage from '../common/ProjectAssets/LongImage';
import MunchHero from '../../assets/Munch/Munch_Overview.png';
import munchImages from '../../constants/munchImages';

class MunchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      personaLightboxIsOpen: false,
      sketchesLightboxIsOpen: false,
      storyboardsLightboxIsOpen: false,
      searchLightboxIsOpen: false,
      friendsLightboxIsOpen: false,
      uploadLightboxIsOpen: false,
      photoIndex: 0
    };

    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event, lightbox) {
    event.preventDefault();
    this.setState({
      [lightbox]: true,
      photoIndex: index
    });
    console.log(this.state.personaLightboxIsOpen);
  }

  closeLightbox(lightbox) {
    this.setState({
      [lightbox]: false,
      photoIndex: 0
    });
  }

  nextLightboxImage(images) {
    this.setState({
      photoIndex: (this.state.photoIndex + 1) % images.length,
    });
  }

  prevLightboxImage(images) {
    this.setState({
      photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
    });
  }

  renderImageRow(image, index, altText, lightbox, desiredClass) {
    return (
      <div className={desiredClass} key={index}>
        <img
          src={image}
          className="project-image__small zoom"
          alt={altText}
          onClick={(event) => this.openLightbox(index, event, lightbox)}
        />
      </div>
    );
  }

  renderLightbox(lightboxImages, lightbox, lightboxString, index) {
    return (
      <LightBox
        images={lightboxImages}
        isOpen={lightbox}
        onClose={this.closeLightbox.bind(this, lightboxString)}
        nextImage={this.nextLightboxImage.bind(this, lightboxImages)}
        prevImage={this.prevLightboxImage.bind(this, lightboxImages)}
        photoIndex={index}
      />
    );
  }

  renderHero() {
    return (
      <Hero
        background="#AF1E4C"
        image={MunchHero}
        imageAlt="Munch"
      />
    );
  }

  renderProjectInfo() {
    return (
      <ProjectInfo
        title="Munch"
        subtitle="Interaction Design 1 Project"
        summaryInfo={projectInfo.munchProjectInfo}
      />
    );
  }

  renderBackground() {
    return (
      <div className="portfolio-content description">
        <Title
          title="Background"
        />
        <div className="two-thirds">
          <p className="description-text">
            In my Interaction Design 1 – Responsive course, we were tasked with creating a website that
            could be used to keep track of something. After a few rounds of ideation, I decided that I wanted
            to make a website that could be used to keep track of restaurants that users had been to or wanted
            to go to, and to find new restaurants.
          </p>
        </div>
      </div>
    );
  }

  renderUserResearch() {
    const { photoIndex, personaLightboxIsOpen } = this.state;
    return (
      <div className="user-research">
        <div className="portfolio-content description">
          <Title
            title="User Research"
          />
          <div className="two-thirds">
            <p className="description-text">
              I interviewed 3 potential users of my website idea to understand their <strong>interest in
              keeping track of restaurants</strong>, their <strong>current process for finding and choosing
              restaurants</strong>, and <strong>discover their pain points</strong>. I focused especially on
              which factors impact a user{`'`}s decision to try a restaurant and the effectiveness of
              currently available restaurant search websites.
            </p>
            <p className="description-text">
              I utilized the user interviews to create user personas and guide the website{`'`}s features.
            </p>
          </div>
        </div>
        <div className="personas">
          <div className="full-width">
            <Subtitle
              subtitle="Personas"
            />
          </div>
          <div className="portfolio-content three-columns">
            {
              munchImages.personaImages.map((image, index) => this.renderImageRow(image, index, "Persona", "personaLightboxIsOpen", "one-third"))
            }
          </div>
          {this.renderLightbox(munchImages.personaImages, personaLightboxIsOpen, "personaLightboxIsOpen", photoIndex)}
        </div>
        <div className="portfolio-content description">
          <div className="one-third">
            <Subtitle
              subtitle="Takeaways"
            />
          </div>
          <div className="two-thirds">
            <ul>
              <li className="bullet-list">People have <strong>the most trust in their friends{`'`} opinions </strong>
                and consider them heavily when choosing a restaurant.
              </li>
              <li className="bullet-list">One pain point is the <strong>lack of integration in the restaurant-searching process</strong>.
                There are multiple places to look for searching, finding menus, looking at photos,
                seeing previous restaurants you{`'`}ve been to, etc.
              </li>
              <li className="bullet-list"> There isn{`'`}t an easy way to <strong>keep track of restaurants </strong>
                you{`'`}ve been to and restaurants you want to try.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderSketches() {
    const { photoIndex, sketchesLightboxIsOpen } = this.state;
    return (
      <div className="sketches">
        <div className="portfolio-content description">
          <Title
            title="Sketches & Ideation"
          />
          <div className="two-thirds">
            <p className="description-text">
              With my user research guiding the features I wanted to include in the website,
              I began to sketch wireframes for some of the site{`'`}s main pages.
            </p>
            <p className="description-text">
              I knew that I wanted to make a <strong>social media site</strong> to meet users{`'`} desire to get
              restaurant recommendations from friends. I also wanted to include <strong>automated recommendations</strong> and
              <strong> search features</strong> to make it easy for users to find new restaurants.
            </p>
          </div>
        </div>
        <div className="portfolio-content three-columns">
        {
          munchImages.sketches.map((image, index) => this.renderImageRow(image, index, "Initial Sketch", "sketchesLightboxIsOpen", "one-third"))
        }
        </div>
        {this.renderLightbox(munchImages.sketches, sketchesLightboxIsOpen, "sketchesLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderStoryboards() {
    const { photoIndex, storyboardsLightboxIsOpen } = this.state;
    return (
      <div className="sketches">
        <div className="portfolio-content description">
          <Title
            title="Storyboards"
          />
          <div className="two-thirds">
            <p className="description-text">
              After defining the key features of the website, I focused on case narratives and
              potential workflows and used these to create storyboards.
            </p>
          </div>
          <div className="one-third">
            <Subtitle
              subtitle="Use Cases"
            />
          </div>
          <div className="two-thirds">
            <ul>
              <li className="bullet-list">A "foodie" who wants to find and keep track of restaurants.
              </li>
              <li className="bullet-list">A social restaurant-goer who wants to plan outings while ensuring
              that all his friends will like the food.
              </li>
            </ul>
          </div>
        </div>
        <div className="portfolio-content">
        {
          munchImages.storyboards.map((image, index) =>
            this.renderImageRow(image, index, "Storyboard", "storyboardsLightboxIsOpen", "one-half"))
        }
        </div>
        {this.renderLightbox(munchImages.storyboards, storyboardsLightboxIsOpen, "storyboardsLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderWireframes() {
    const { photoIndex, searchLightboxIsOpen, friendsLightboxIsOpen, uploadLightboxIsOpen } = this.state;
    return (
      <div className="wireframes">
        <div className="portfolio-content description">
          <Title
            title="Wireframes"
          />
          <div className="two-thirds">
            <p className="description-text">
              My storyboards led me to three main workflows for my project. I created wireframes for each workflow:
            </p>
            <ol>
              <li className="bullet-list">Searching for restaurants</li>
              <li className="bullet-list">Seeing friends{`'`} restaurant lists</li>
              <li className="bullet-list">Sharing food photos</li>
            </ol>
          </div>
        </div>
        <div className="wireframes">
          <Subtitle
            subtitle="Searching for Restaurants"
          />
          <div className="portfolio-content three-columns">
          {
            munchImages.searchWireframes.map((image, index) =>
              this.renderImageRow(image, index, "Search Wireframes", "searchLightboxIsOpen", "one-fourth"))
          }
          </div>
        {this.renderLightbox(munchImages.searchWireframes, searchLightboxIsOpen, "searchLightboxIsOpen", photoIndex)}
      </div>
      <div className="wireframes">
        <Subtitle
          subtitle="Seeing Friends' Restaurants"
        />
        <div className="portfolio-content three-columns">
        {
          munchImages.friendsWireframes.map((image, index) =>
            this.renderImageRow(image, index, "Friends Wireframes", "friendsLightboxIsOpen", "one-fourth"))
        }
        </div>
        {this.renderLightbox(munchImages.friendsWireframes, friendsLightboxIsOpen, "friendsLightboxIsOpen", photoIndex)}
      </div>
      <div className="wireframes">
        <Subtitle
          subtitle="Sharing Photos"
        />
        <div className="portfolio-content three-columns">
        {
          munchImages.uploadWireframes.map((image, index) =>
            this.renderImageRow(image, index, "Upload Wireframes", "uploadLightboxIsOpen", "one-sixth"))
        }
        </div>
        {this.renderLightbox(munchImages.uploadWireframes, uploadLightboxIsOpen, "uploadLightboxIsOpen", photoIndex)}
      </div>
    </div>
    );
  }

  render() {
    return (
      <div className="munch-wrapper">
        {this.renderHero()}
        <div className="munch page">
          {this.renderProjectInfo()}
          {this.renderBackground()}
          {this.renderUserResearch()}
          {this.renderSketches()}
          {this.renderStoryboards()}
          {this.renderWireframes()}
        </div>
      </div>
    );
  }
}


export default MunchPage;
