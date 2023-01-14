import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { Button } from "components/button";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">Support</h2>
      <div className="flex flex-col w-full px-6 bg-white rounded-xl py-7 shadow-1">
        <p className="mb-8 text-xl text-center text-text3">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="pedge"
          className="w-full px-5 py-2 mb-5 text-lg font-medium border rounded border-strock"
        ></Input>
        <div className="p-5 mb-5 text-sm bg-grayf3 rounded-xl">
          <p className="mb-5 font-semibold text-text2">
            Back it because you believe in it.
          </p>
          <p className="text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
