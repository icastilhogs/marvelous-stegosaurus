import React from 'react';
import _ from 'lodash';

import Slider from "react-slick";
 
import {withPrefix} from '../utils';
import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class HeroSection extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      let section = _.get(this.props, 'section', null);
      return (
          <section id={_.get(section, 'section_id', null)} className="hero">
          <div>
              {_.get(section, 'hero_items', null) && (
                <Slider {...settings}>
                    {_.map(_.get(section, 'hero_items', null), (item, item_idx) => (
                          <div key={item_idx} className='hero__item'>
                              {_.get(item, 'background', null) && (
                              <img
                                  className='hero__background' 
                                  src={withPrefix(_.get(item, 'background', null))} 
                              />
                              )}
                              <div className="hero__container container--lg">
                                  <div className="hero__text">
                                  {_.get(item, 'title', null) && (
                                  <h1 className={'hero__title ' + _.get(item, 'light_text', null)}>{_.get(item, 'title', null)}</h1>
                                  )}
                                  {_.get(item, 'subtitle', null) && (
                                  <div className={'hero__body text block ' + _.get(item, 'light_text', null)}>
                                  {markdownify(_.get(item, 'subtitle', null))}
                                  </div>
                                  )}
                                  {_.get(item, 'actions', null) && (
                                  <div className="hero__actions button-group">
                                  <CtaButtons {...this.props} actions={_.get(item, 'actions', null)} />
                                  </div>
                                  )}
                              </div>
                          <div>
                            {_.get(item, 'image', null) && (
                                <img
                                    className='hero__image' 
                                    src={withPrefix(_.get(item, 'image', null))} 
                                    alt={_.get(item, 'image_alt', null)}
                                />
                            )}
                          </div>
                          </div>
                          </div>
                      ))}
                </Slider>
              )} 
          </div>
          </section>
      );
    }
}
