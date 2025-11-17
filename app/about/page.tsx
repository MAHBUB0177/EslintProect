"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [demo, setDemo] = useState([]);
  console.log(demo);
  // fetchDemoData.ts
  async function fetchDemoData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch demo data");
      }

      const data = await response.json();
      return data; // returns array of demo posts
    } catch (error) {
      console.error("Error fetching demo data:", error);
      return [];
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function load() {
      const data = await fetchDemoData();
      setDemo(data);
    }
    load();
  }, []);
  return <div>page</div>;
};

export default page;
