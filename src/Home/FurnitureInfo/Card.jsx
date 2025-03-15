import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Cards = ({ items }) => {
  console.log(items);
  return (
    <div data-aos="zoom-in-up" className="p-5">
      <Card className=" ">
        <div color="blue-gray" className="relative h-56">
          <Link to={`/details/${items._id}`}>
            <img
              className="w-[500px]  h-56  transition-transform duration-300 hover:scale-110"
              src={items.image}
              alt="card-image"
            />
          </Link>
        </div>
        <CardBody>
          <Typography
            variant="h6"
            color="blue-gray"
            className="lg:mb-2 text-center -mt-2 "
          >
            {items.name}
          </Typography>
          <p className="text-center font-semibold">TK: {items.price}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
