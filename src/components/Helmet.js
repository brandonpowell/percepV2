import React from "react";
import {Helmet} from "react-helmet";


class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Perception Works. A full-service design and development company.</title>
                <link rel="canonical" href="http://perception.works/" />
                <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
                <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> 
                {/* <script type="text/javascript">
                      window.omnisend = window.omnisend || [];
                      omnisend.push(["accountID", "6238d63277a4b84682f72aa8"]);
                      omnisend.push(["track", "$pageViewed"]);
                      !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
                </script>
                <script>
                    window.VIDEOASK_EMBED_CONFIG = {
                      "kind": "widget",
                      "url": "https://www.videoask.com/fs6218rqt",
                      "options": {
                        "widgetType": "VideoThumbnailWindowTall",
                        "text": "Let's talk with you",
                        "backgroundColor": "#7100CC",
                        "position": "bottom-right",
                        "dismissible": false
                      }
                    }
                </script> */}
                <script src="https://www.videoask.com/embed/embed.js"></script> 
            </Helmet>
            ...
        </div>
    );
  }
};

export default Application


