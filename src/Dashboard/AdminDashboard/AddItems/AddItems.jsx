import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Input, Typography } from '@material-tailwind/react';

import Select from 'react-select';
import { useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom';
import useAxiosOpen from '../../../hooks/useAxios';

const image_key = import.meta.env.VITE_IMG_HOSTING;
const image_Api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const options = [
  { value: 'Sofa', label: 'Sofa' },
  { value: 'Table', label: 'Table' },
  { value: 'Chair', label: 'Chair' },
  { value: 'Bed', label: 'Bed' },
  { value: 'Cabinet', label: 'Cabinet' },
];

const AddItems = () => {
  const axiosOpen = useAxiosOpen();
  const [login, setLogin] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const object = selectedOption?.value;
  const categorys = { categorys: object };
  const { categorys: category } = categorys;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');

  const onSubmit = async data => {
    const petInfo = { ...data, category };
    console.log(petInfo);
    const images = { image: petInfo.image[0] };
    console.log(images);
    setLogin(true);
    const res = await axiosOpen.post(image_Api, images, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const furniture = {
        category: petInfo.category,
        descriptions: data.descriptions,
        image: res.data.data.display_url,
        name: data.title,
        price: data.price,
        date: date,
      };

      console.log(furniture);
      axiosOpen.post('/product').then(res => {
        console.log(res.data);
        Swal.fire('Add successfully');
      });
     
      setLogin(false);
    }
  };
  return (
    <div>
      {login ? (
        <>
         
          <p className="text-center mt-80">
            <span className="loading loading-spinner text-warning"></span>
          </p>
        </>
      ) : (
        <div className=" shadow-xl  w-10/12 rounded-lg">
          <Card className="p-7 pb-20 w-full">
            <Typography className="text-center" variant="h2" color="blue-gray">
              Add New Item
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2   ">
              <div className="mb-1 w-full gap-6 ">
                <div className=" lg:flex gap-10 w-full">
                  <div className="w-6/12">
                    <Typography variant="h6" color="blue-gray" className="py-3">
                      Image
                    </Typography>
                    <Input
                      {...register('image', { required: true })}
                      size="lg"
                      name="image"
                      type="file"
                      className="  !border-t-blue-gray-200 focus:!border-t-gray-900"
                    />
                    {errors.image && (
                      <span className="-mt-6 text-red-600">
                        Picture is required
                      </span>
                    )}
                    <Typography variant="h6" color="blue-gray" className="py-3">
                      Title
                    </Typography>
                    <Input
                      {...register('title', { required: true })}
                      size="lg"
                      placeholder="Title"
                      className=" py-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                    />
                    {errors.name && (
                      <span className="-mt-6 text-red-600">
                        Name is required
                      </span>
                    )}
                    <Typography variant="h6" color="blue-gray" className="py-3">
                      Price
                    </Typography>
                    <Input
                      {...register('price', { required: false })}
                      size="lg"
                      type="number"
                      placeholder=" Price"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    />
                    {errors.age && (
                      <span className="-mt-6 text-red-600">
                        {' '}
                        Price is required{' '}
                      </span>
                    )}
                  </div>

                  <div className="w-6/12">
                    <Typography variant="h6" color="blue-gray" className="py-3">
                      Category
                    </Typography>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      required={true}
                    />

                    <Typography variant="h6" color="blue-gray" className="py-3">
                      Description,
                    </Typography>
                    <textarea
                      {...register('descriptions', { required: true })}
                      size="lg"
                      type="textarea"
                      placeholder="Write you description"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-full rounded-md border h-40 p-3 "
                    />
                    {errors.descriptions && (
                      <span className="-mt-6 text-red-600">
                        descriptions is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="bg-black py-2 rounded-xl mt-5  w-36 text-center ">
                  <button className=" font-bold text-white mx-auto   ">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AddItems;
