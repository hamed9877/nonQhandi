"use client";
import React from "react";
import AddQrcCard from "../../components/card/AddQrcCard";
import { LayoutSize } from "../../interface/LayoutSize";

const AddQrc: React.FC = () => {
  return <AddQrcCard />;
};

AddQrc.getInitialProps = async () => {
  const data: LayoutSize = { FilterBar: false, isBackVisible: true };

  return {
    props: {
      ...data,
    },
  };
};
export default AddQrc;
