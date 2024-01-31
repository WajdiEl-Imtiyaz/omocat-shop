import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormInputs = {
  email: string;
  subscribe: boolean;
  country: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  apartment: string;
  postcode: string;
  city: string;
  state: string;
  phone: string;
};

const InformationForm = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Convert the form data to a query string
    const queryString = new URLSearchParams({
      ...data,
      subscribe: data.subscribe.toString(),
    }).toString();

    // Navigate to the new page with the form data as query parameters
    router.push(`/checkout/shipping?${queryString}`);
  };

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full">
        <p className="font-bold py-4">Contact</p>
        <input
          className="border rounded p-2 text-sm"
          placeholder="Email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="flex items-center mt-2 pb-2">
        <input type="checkbox" id="subscribe" {...register("subscribe")} />
        <label htmlFor="subscribe" className="ml-2 text-sm">
          Email me with news and offers
        </label>
      </div>
      <p className="font-bold py-4">Shipping Address</p>
      <select
        className="border rounded p-2 text-sm w-full"
        {...register("country", { required: true })}
      >
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
      </select>
      <div className="flex flex-row w-full justify-between pt-2">
        <input
          className="border rounded p-2 text-sm w-1/2 mr-2"
          placeholder="First Name"
          {...register("firstName", { required: true })}
        />
        <input
          className="border rounded p-2 text-sm w-1/2 ml-2"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
        />
      </div>
      <input
        className="border rounded p-2 text-sm w-full mt-2"
        placeholder="Company (optional)"
        {...register("company")}
      />
      <input
        className="border rounded p-2 text-sm w-full mt-2"
        placeholder="Address"
        {...register("address", { required: true })}
      />
      <input
        className="border rounded p-2 text-sm w-full mt-2"
        placeholder="Apartment, suite, etc. (optional)"
        {...register("apartment")}
      />
      <div className="flex flex-row w-full justify-between pt-2">
        <input
          className="border rounded p-2 text-sm w-1/3 mr-2"
          placeholder="Postcode"
          {...register("postcode", { required: true })}
        />
        <input
          className="border rounded p-2 text-sm w-1/3 mx-2"
          placeholder="City"
          {...register("city", { required: true })}
        />
        <input
          className="border rounded p-2 text-sm w-1/3 ml-2"
          placeholder="State/Territory"
          {...register("state", { required: true })}
        />
      </div>
      <input
        className="border rounded p-2 text-sm w-full mt-2"
        placeholder="Phone"
        type="tel"
        {...register("phone", { required: true })}
      />
      <div className="flex justify-end pt-8">
        <button
          type="submit"
          className="bg-black text-white p-4 rounded text-sm"
        >
          Continue to shipping
        </button>
      </div>
      <div className="p-10 border-b border-gray-300"></div>
    </form>
  );
};

export default InformationForm;
