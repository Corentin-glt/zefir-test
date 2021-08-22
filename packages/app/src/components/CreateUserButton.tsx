import React, { Fragment, useState } from "react";

import { gql, useMutation } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "./Button";
import SpanError from "./Span/SpanError";
import { toast } from "react-toastify";

const CREATE_USER = gql`
  mutation CreateUser($input: UserCreateDTO!) {
    createUser(userInput: $input) {
      id
    }
  }
`;

const schema = yup.object().shape({
  email: yup.string().email().required("No email provided."),
});

interface Values {
  email: string;
}

function CreateUserButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: yupResolver(schema),
  });

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onError(error) {
      toast.error(error.message);
    },
    onCompleted() {
      toast.success(`The user has been created after ${timer} secondes`, {
        position: "top-right",
      });
      setIsOpen(false);
    },
  });

  return (
    <div className="h-full">
      <Button text="Create user" onClick={() => setIsOpen(true)} />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Create User
                </Dialog.Title>
                <div className="mt-2">
                  <form
                    className="space-y-2"
                    onSubmit={handleSubmit(async (value) => {
                      setTimer(0);
                      const interval = setInterval(() => {
                        setTimer((seconde) => seconde + 0.05);
                      }, 50);

                      await createUser({
                        variables: { input: { email: value.email } },
                      });

                      clearInterval(interval);
                    })}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Please enter an email"
                        />
                      </div>
                      {errors.email?.message && (
                        <div className="mt-1">
                          <SpanError text={errors.email.message} />
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <Button loading={loading} text="Create" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default CreateUserButton;
