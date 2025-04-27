import entry_icon from "@/assets/images/entry.png";

import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";

import "./Entry.scss";

import image1 from "@/assets/images/1.jpg";
import image2 from "@/assets/images/2.jpg";
import image3 from "@/assets/images/3.jpg";
import image4 from "@/assets/images/4.jpg";
import image5 from "@/assets/images/5.jpg";
import image6 from "@/assets/images/6.jpg";
import image7 from "@/assets/images/7.jpg";
import image8 from "@/assets/images/8.jpg";
import image9 from "@/assets/images/9.jpg";
import image10 from "@/assets/images/10.jpg";
import image11 from "@/assets/images/11.jpg";
import image12 from "@/assets/images/12.jpg";
import image13 from "@/assets/images/13.jpg";
import image14 from "@/assets/images/14.jpg";
import image15 from "@/assets/images/15.jpg";
import image16 from "@/assets/images/16.jpg";
import image17 from "@/assets/images/17.jpg";
import image18 from "@/assets/images/18.jpg";
import image19 from "@/assets/images/19.jpg";
import image20 from "@/assets/images/20.jpg";
import image21 from "@/assets/images/21.jpg";
import image22 from "@/assets/images/22.jpg";
import image23 from "@/assets/images/23.jpg";
import image24 from "@/assets/images/24.jpg";
import image25 from "@/assets/images/25.jpg";
import image26 from "@/assets/images/26.jpg";
import image27 from "@/assets/images/27.jpg";
import image28 from "@/assets/images/28.jpg";
import image29 from "@/assets/images/29.jpg";
import image30 from "@/assets/images/30.jpg";
import image31 from "@/assets/images/31.jpg";
import image32 from "@/assets/images/32.jpg";
import image33 from "@/assets/images/33.jpg";
import image34 from "@/assets/images/34.jpg";
import image35 from "@/assets/images/35.jpg";
import image36 from "@/assets/images/36.jpg";

export default function Entry() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
    ];

    const images1 = images.slice(0, 9);
    const images2 = images.slice(9, 18);
    const images3 = images.slice(18, 27);
    const images4 = images.slice(27, 36);

    return (
        <div className="entry">
            <div className="entry-margue">
                <div className="entry-margue-line">
                    {images1.map((image, index) => (
                        <img key={index} src={image} alt="" />
                    ))}

                    {images1.map((image, index) => (
                        <img key={index + "1"} src={image} alt="" />
                    ))}
                </div>
                <div className="entry-margue-line">
                    {images2.map((image, index) => (
                        <img key={index} src={image} loading="lazy" alt="" />
                    ))}
                    {images2.map((image, index) => (
                        <img
                            key={index + "1"}
                            src={image}
                            loading="lazy"
                            alt=""
                        />
                    ))}
                </div>
                <div className="entry-margue-line">
                    {images3.map((image, index) => (
                        <img key={index} src={image} loading="lazy" alt="" />
                    ))}
                    {images3.map((image, index) => (
                        <img
                            key={index + "1"}
                            src={image}
                            loading="lazy"
                            alt=""
                        />
                    ))}
                </div>
                <div className="entry-margue-line">
                    {images4.map((image, index) => (
                        <img key={index} src={image} loading="lazy" alt="" />
                    ))}
                    {images4.map((image, index) => (
                        <img
                            key={index + "1"}
                            src={image}
                            loading="lazy"
                            alt=""
                        />
                    ))}
                </div>
            </div>

            <div className="entry-decor is-top"></div>
            <div className="entry-decor is-bottom"></div>

            <div className="container entry-inner">
                <div className="entry-header">
                    <img className="entry-icon" src={entry_icon} alt="" />
                </div>
                <div className="entry-body">
                    <h1>The Best Streaming Experience</h1>

                    <p>
                        StreamVibe is the best streaming experience for watching
                        your favorite movies and shows on demand, anytime,
                        anywhere. With StreamVibe, you can enjoy a wide variety
                        of content, including the latest blockbusters, classic
                        movies, popular TV shows, and more. You can also create
                        your own watchlists, so you can easily find the content
                        you want to watch.
                    </p>
                </div>

                <Button aria-label={"Start Watching Now"}>
                    <Icon
                        className={"entry-btn-icon"}
                        name="play"
                        hasFill
                        width={29}
                        height={28}
                    ></Icon>
                    <span>Start Watching Now</span>
                </Button>
            </div>
        </div>
    );
}
