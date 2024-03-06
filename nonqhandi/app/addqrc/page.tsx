"use client";
import dynamic from "next/dynamic";
import React from "react";
import { LayoutSize } from "../../interface/LayoutSize";
const AddQrcCard = dynamic(() => import("../../components/card/AddQrcCard"), {
  ssr: false, // Disable server-side rendering
  // loading: () => <p>A map is loading</p>,
});
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
