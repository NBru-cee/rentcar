import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/toyota-offer-2.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
    {
        id: 1,
        brand: "Tesla",
        rating: 112,
        carName: "Tesla Roadster",
        imgUrl: img01,
        model: "Model 3",
        price: 50,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "The Tesla Roadster is an all-electric sports car that offers a range of benefits. It is environmentally friendly as it produces zero emissions, and it has impressive performance and handling capabilities. The Roadster is also equipped with advanced technology features such as a large touchscreen display and advanced driver assistance systems. It has a long-range, with a claimed range of over 600 miles on a single charge, and also features regenerative braking to recover energy and extend its range. Overall, the Tesla Roadster offers a unique combination of high performance, advanced technology, and environmental sustainability.",
    },
    {
        id: 2,
        brand: "Toyota",
        rating: 102,
        carName: "Toyota Corolla",
        imgUrl: img02,
        model: "Model-2023",
        price: 60,
        speed: "40kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            " Toyota Corolla is known for its fuel efficiency, which means that renters can save money on gas during their travels. Additionally, the Corolla's compact size makes it easy to navigate through city streets and find parking in crowded areas. The Corolla also has a reputation for reliability, which can provide peace of mind for renters who are traveling long distances or in unfamiliar areas. Finally, renting a Corolla can be a cost-effective option for those who want a reliable, practical car without having to invest in purchasing one outright. Overall, renting a Toyota Corolla can provide a comfortable, reliable, and affordable transportation option for a variety of travel needs.",
    },
    {
        id: 3,
        brand: "BMW",
        rating: 132,
        carName: "BMW X3",
        imgUrl: img03,
        model: "Model-2022",
        price: 65,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            " The BMW X3 offers a comfortable, spacious interior with seating for up to five passengers. It also features a large cargo area, making it a practical choice for families or those who need to transport large items. The X3 comes with a range of standard and optional features, including a touchscreen infotainment system, smartphone integration, and advanced driver assistance technologies such as lane departure warning and automatic emergency braking.",
    },
    {
        id: 4,
        brand: "NIssan",
        rating: 112,
        carName: "Nissan Altima",
        imgUrl: img04,
        model: "Model 3",
        price: 70,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            " The Nissan Altima is a mid-size sedan that offers fuel efficiency, a comfortable interior, and advanced safety features. Its standard 2.5-liter 4-cylinder engine delivers an EPA-estimated 32 mpg combined, while the optional 2.0-liter VC-Turbo engine delivers an EPA-estimated 29 mpg combined. The interior is spacious and features high-quality materials and advanced technology. The car also comes with advanced safety features such as automatic emergency braking and lane departure warning..",
    },
    {
        id: 5,
        brand: "Toyota",
        rating: 94,
        carName: "Toyota Camry  ",
        imgUrl: img05,
        model: "Model-2022",
        price: 45,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "The Toyota Camry is a reliable and practical mid-size sedan that offers a comfortable ride, fuel efficiency, and low maintenance costs. It has a spacious interior with ample legroom and headroom, making it a great choice for families or anyone who needs to transport passengers. The Camry also has a reputation for excellent safety features, including standard driver assistance technology like lane departure warning and automatic emergency braking. Overall, the Toyota Camry is a dependable and affordable car that provides a smooth and enjoyable driving experience.",
    },
    {
        id: 6,
        brand: "Mercedes",
        rating: 119,
        carName: "Mercedes Benz",
        imgUrl: img06,
        model: "Model 3",
        price: 85,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "Mercedes-Benz cars are renowned for their quality engineering, luxurious features, and advanced safety technologies. With a Mercedes-Benz, you can enjoy a comfortable ride, smooth handling, and impressive acceleration. Additionally, their top-notch safety features can provide peace of mind while driving. The car's sleek and stylish design is also a notable feature that attracts many buyers. In summary, owning a Mercedes-Benz can provide a premium driving experience with a combination of luxury, performance, and safety.",
    },
    {
        id: 7,
        brand: "Audi",
        rating: 82,
        carName: "Audi A4",
        imgUrl: img07,
        model: "Model 3",
        price: 50,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            " The Audi A4 offers a combination of performance, luxury, and practicality. It has a sleek design and a comfortable interior, making it a great option for daily commuting or long road trips. The A4 also has advanced safety features and a user-friendly infotainment system, adding to its appeal.",
    },
    {
        id: 8,
        brand: "Rolls Royce",
        rating: 112,
        carName: " Rolls Royce Ghost",
        imgUrl: img08,
        model: "Model 3",
        price: 50,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            " offers a smooth and quiet ride thanks to its advanced suspension system and sound insulation. The interior is luxurious and spacious, with high-quality materials and customizable options. The powerful engine provides impressive acceleration and handling, while advanced safety features such as automatic emergency braking and lane departure warning ensure a safe and comfortable driving experience. Overall, the Rolls Royce Ghost is an excellent choice for those who value luxury, performance, and safety.",
    },
    {
        id: 9,
        brand: "Tesla",
        rating: 160,
        carName: "Tesla Model S",
        imgUrl: img03,
        model: "Model 2023",
        price: "70",
        speed: "60",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "The Tesla Model S is a luxury electric sedan known for its impressive performance, long driving range, and advanced technology features. It has a sleek design, fast acceleration, and a range of up to 400 miles on a single charge. Equipped with advanced features such as Autopilot, it is a great choice for anyone looking for a stylish, fast, and environmentally-friendly car.",
    },
];

export default carData;
