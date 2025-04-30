"use client";

import React, { useState } from "react";
import styles from "./WelcomeScreen.module.scss";
import pikachuImage from "../../assets/images/pikachu.png";
import cloudImage from "../../assets/images/cloud.png";
import starImage from "../../assets/images/star.png";
import Image from "next/image";
import ArrowButton from "@/app/assets/svgs/arrowButton";
import { redirect } from "next/navigation";

const WelcomeScreen = () => {
  const [userInput, setUserInput] = useState("");

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    redirect("/404");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={pikachuImage}
          height={250}
          alt="Pikachu"
          className={styles.pikachuImage}
        />
        <Image
          src={cloudImage}
          height={80}
          alt="Cloud"
          className={styles.cloudImageLeftTop}
        />
        <Image
          src={cloudImage}
          height={40}
          alt="Cloud"
          className={styles.cloudImageLeftBottom}
        />
        <Image
          src={cloudImage}
          height={80}
          alt="Cloud"
          className={styles.cloudImageRight}
        />
        <Image
          src={starImage}
          height={40}
          alt="Star"
          className={styles.starImageLeftTop}
        />
        <Image
          src={starImage}
          height={20}
          alt="Star"
          className={styles.starImageRightTop}
        />
        <Image
          src={starImage}
          height={20}
          alt="Star"
          className={styles.starImageLeftBottom}
        />
        <Image
          src={starImage}
          height={30}
          alt="Star"
          className={styles.starImageRightBottom}
        />
        <input
          placeholder="Hi there! How can I help you today?"
          className={styles.welcomeText}
          disabled={true}
        />
        <div className={styles.flexContainer}>
          <input
            placeholder="Ask anything..."
            className={styles.inputField}
            onChange={handleUserInputChange}
            value={userInput}
            onKeyDown={handleKeyDown}
          />
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.askButton}
              onClick={handleButtonClick}
            >
              {userInput && <ArrowButton />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
