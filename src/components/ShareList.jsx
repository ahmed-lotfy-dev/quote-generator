import React from "react";

import styles from "./ShareList.module.css";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const shareList = ({ quote }) => {
  const { content, tags, author } = quote;
  const url = window.location.href;

  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareHeading}>
        <h3>share the quote</h3>
      </div>
      <div className={styles.ShareListButtons}>
        <EmailShareButton url={content} subject={content}>
          <EmailIcon size={50} round={true} />
        </EmailShareButton>

        <FacebookShareButton
          title={content}
          caption={content}
          quote={quote}
          url={"https://ahmedlotfy.me"}
        >
          <FacebookIcon size={50} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton
          url={"https://ahmedlotfy.me"}
          shareCommentary={content}
          title={content}
          source="Ahmed Lotfy Quote Generator"
        >
          <LinkedinIcon size={50} round={true} />
        </LinkedinShareButton>

        <WhatsappShareButton
          title={content}
          separator={" "}
          url={"https://ahmedlotfy.me"}
          source={"Ahmed Lotfy Quote Generator"}
        >
          <WhatsappIcon size={50} round={true} />
        </WhatsappShareButton>

        <TelegramShareButton title={content} url={"https://ahmedlotfy.me"}>
          <TelegramIcon size={50} round={true} />
        </TelegramShareButton>

        <TwitterShareButton title={content} url={"https://ahmedlotfy.me"}>
          <TwitterIcon size={50} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default shareList;
