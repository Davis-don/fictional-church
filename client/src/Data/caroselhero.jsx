import image1 from '../assets/edwin-andrade-6liebVeAfrY-unsplash.jpg';
import image2 from '../assets/Guardian Angel.jpg';
import Aboutconcern from '../Pages/Homepage/Components/Carosel/Concerns/Aboutconcern';
import Churchesconcern from '../Pages/Homepage/Components/Carosel/Concerns/Churchesconcern';
import EventsConcern from '../Pages/Homepage/Components/Carosel/Concerns/EventsConcern';

const caroselDataHero = [
    {
        imgSrc: image1,
        description:"Living & Shairing the Gospel of Christ",
        subDescription:"Sprending the gospel through our daily lives",
        button:<Aboutconcern/>
    },
    {
        imgSrc: image2,
        description:"Tell the World",
        subDescription:"Let the world know about the goodness of God",
        button:<Churchesconcern/>
    },
    {
        imgSrc: image1,
        description:"Get to Know Jesus the More",
        subDescription:"Through reading the Bible and listening to Sermons",
        button:<EventsConcern/>
    },
];

export default caroselDataHero;
