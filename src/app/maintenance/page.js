"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import pikachuSadImage from "../assets/images/pikachu-sad.png";
import moonImage from "../assets/images/moon.png";

const MaintenancePage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        justifyContent: "center",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <Image
        src={pikachuSadImage}
        height={250}
        alt="Pikachu"
        style={{
          marginTop: "60px",
          marginBottom: "20px",
        }}
      />
      <Image
        src={moonImage}
        height={70}
        alt="Moon"
        style={{
          position: "absolute",
          top: "55px",
          right: "500px",
        }}
      />
      <h1
        style={{
          paddingBottom: "20px",
          paddingTop: "10px",
          color: "white",
        }}
      >
        Hold on, little explorer!
      </h1>
      <p
        style={{
          paddingBottom: "20px",
          color: "white",
        }}
      >
        This page is taking a nap. Come back a little later to see the fun!
      </p>
      <Link
        href="/"
        style={{
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default MaintenancePage;
