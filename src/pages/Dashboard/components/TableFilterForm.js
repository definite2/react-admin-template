import React from "react";
import { useForm } from "react-hook-form";
import Input from "components/FormItems/Input";
import { Button } from "semantic-ui-react";
const TableFilterForm = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-3">
      <div className="flex flex-col sm:flex-row w-full mb-6 items-center justify-start">
        <div className="w-full lg:w-1/4 px-2 mr-0 sm:mr-2 pb-4 sm:pb-0">
          <Input
            label="Username"
            placeholder="Your username"
            width={4}
            {...register("username")}
          />
        </div>
        <div className="w-full lg:w-1/4 px-2 mr-0 sm:mr-2 pb-4 sm:pb-0">
          <Input
            label="Company"
            placeholder="X Company"
            width={4}
            {...register("company")}
          />
        </div>
        <div className="w-full lg:w-1/4 px-2 mr-0 sm:mr-2 pb-4 sm:pb-0">
          <Input
            label="Email"
            placeholder="name@company.com"
            width={4}
            {...register("email")}
          />
        </div>
        <div className="w-full lg:w-1/4 px-2 mr-0 sm:mr-2 pb-4 sm:pb-0">
          <Input
            label="Register Date"
            placeholder="10/31/2021"
            width={4}
            {...register("registerDate")}
          />
        </div>
      </div>
      <Button className="bg-primary-500 text-white ml-0 sm:ml-2 py-4 tracking-wide" type="submit">Submit</Button>
    </form>
  );
};

export default TableFilterForm;
