import React from 'react';
import useItems from '../../../hooks/useItems';

import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import useAxiosOpen from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const TABLE_HEAD = ['Furniture', '', 'Date', 'Edit', 'Delete', ''];

const AllItems = () => {
  const [furniture, refetch] = useItems();
  const axionOpen = useAxiosOpen()
  console.log(furniture);
  const handealDelete = async (id) => {


Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
}).then(result => {
  if (result.isConfirmed) {
    axionOpen.delete(`product/${id}`)
      .then(res => {
      res.data;
      refetch();
      Swal.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success',
      });
    });
  }
});


    
  }


  return (
    <div>
      <Card className="h-full  shadow-lg px-3">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                All Items
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the All Items
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map(head => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {furniture?.map(
                (
                  { image, name, amount, date, _id, accountNumber, expiry },
                  index
                ) => {
                  const isLast = index === furniture.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {index + 1}
                          <Avatar
                            src={image}
                            alt={name}
                            size="md"
                            className="border w-20 border-blue-gray-50  object-contain "
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Link to={`updeat-product/${_id}`}>Edit</Link>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className=" w-16  bg-red-600 rounded-md border border-blue-gray-50 p-1 text-white">
                            <button
                              onClick={() => handealDelete(_id)}
                              className=""
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllItems;
