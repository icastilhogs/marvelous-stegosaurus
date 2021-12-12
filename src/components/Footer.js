import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';
import Action from './Action';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="container container--lg footer-container">
                <div className="site-footer__inside">
                  <div className="site-footer__info">
                    <h4>Mapa do site</h4>
                    <div id="sitemap" className="footer two">
                      <ul>
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                          <li><ActionLink key={action_idx} {...this.props} action={action} /></li>
                        ))}
                      </ul>
                    </div>
                    <div id="address" className="footer">
                      <p>Eupoiese LTDA - CNPJ 42.294.032/0001-97</p>
                      <p>Avenida Brigadeiro Faria Lima, 2369 - Conj. 1102</p> 
                      <p>Jardim Paulista - São Paulo/SP</p>
                      <p>CEP 01452-922</p>
                    </div>
                  </div>
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                  <div className="site-footer__social">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                      <Action key={action_idx} {...this.props} action={action} />
                    ))}
                  </div>
                  )}
                </div>
                <div className="copyright">
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span className="site-footer__copyright">
                      {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}
                    </span>
                    )}
                    <div><a href="/politica-de-privacidade">Política de Privacidade</a></div>
                  </div>
              </div>
            </footer>
        );
    }
}
