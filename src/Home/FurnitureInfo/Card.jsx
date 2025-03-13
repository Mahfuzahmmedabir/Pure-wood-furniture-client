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
const Cards = ({ items }) => {
  console.log(items);
  return (
    <div>
      <Card className="mt-6 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <Link to={`/details/${items._id}`}>
            <img className="w-96 h-56" src={items.image} alt="card-image" />
          </Link>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
