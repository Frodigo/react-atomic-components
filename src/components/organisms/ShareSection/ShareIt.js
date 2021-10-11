import React from 'react';
import PropTypes from 'prop-types';
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from 'react-share';

import Heading from '../../atoms/Text/Heading';
// import FacebookIcon from '../../../public/assets/icons/social/facebook.svg';
// import TwitterIcon from '../../../public/assets/icons/social/twitter.svg';
// import LinkedinIcon from '../../../public/assets/icons/social/linkedin.svg';
// import EmailIcon from '../../../public/assets/icons/social/send-mail.svg';
// import MessengerIcon from '../../../public/assets/icons/social/messenger.svg';
// import TelegramIcon from '../../../public/assets/icons/social/telegram.svg';
// import WhatsappIcon from '../../../public/assets/icons/social/whatsapp.svg';

import classes from './ShareSection.module.css';

const ShareIt = (props) => {
    const { heading, url, ...rest } = props;

    const urlToDisplay = url.url ? url.url : url;

    return (
        <div className={classes.shareSection} {...rest}>
            <Heading type="h4">{heading}</Heading>
            {/*<ul className={classes.shareLinks}>*/}
            {/*    <li className={classes.facebook}>*/}
            {/*        <FacebookShareButton url={urlToDisplay}>*/}
            {/*            <FacebookIcon />*/}
            {/*        </FacebookShareButton>*/}
            {/*    </li>*/}
            {/*    <li className={classes.twitter}>*/}
            {/*        <TwitterShareButton url={urlToDisplay}>*/}
            {/*            <TwitterIcon />*/}
            {/*        </TwitterShareButton>*/}
            {/*    </li>*/}
            {/*    <li className={classes.linkedin}>*/}
            {/*        <LinkedinShareButton url={urlToDisplay}>*/}
            {/*            <LinkedinIcon />*/}
            {/*        </LinkedinShareButton>*/}
            {/*    </li>*/}
            {/*    <li className={classes.mail}>*/}
            {/*        <EmailShareButton url={urlToDisplay}>*/}
            {/*            <EmailIcon />*/}
            {/*        </EmailShareButton>*/}
            {/*    </li>*/}
            {/*    <li className={classes.messenger}>*/}
            {/*        <FacebookMessengerShareButton url={urlToDisplay}>*/}
            {/*            <MessengerIcon />*/}
            {/*        </FacebookMessengerShareButton>*/}
            {/*    </li>*/}
            {/*    <li className={classes.telegram}>*/}
            {/*        <TelegramShareButton url={urlToDisplay}>*/}
            {/*            <TelegramIcon />*/}
            {/*        </TelegramShareButton>*/}
            {/*    </li>*/}
            {/*    <li className={classes.whatsapp}>*/}
            {/*        <WhatsappShareButton url={urlToDisplay}>*/}
            {/*            <WhatsappIcon />*/}
            {/*        </WhatsappShareButton>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <p>
                Each share supports and motivates me to create new content Thank
                you!
            </p>
        </div>
    );
};

ShareIt.propTypes = {
    heading: PropTypes.string,
    url: PropTypes.object.isRequired
};

ShareIt.defaultProps = {
    heading: 'Did you like it? Share!'
};

export default ShareIt;
