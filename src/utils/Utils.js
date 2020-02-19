import React from "react";
import Status from "../components/Status/Status";
import axios from "axios";
import { API_URL } from "../api";

export const handleStatus = status => {
  switch (status) {
    case "nie_wycenione":
      return <Status color="red">Nie wycenione</Status>;
    case "zwrot_do_handlowca":
      return <Status color="yellow">Zwrot</Status>;
    case "wycenione":
      return <Status color="green">Wycenione</Status>;
    default:
      return <Status>Null</Status>;
  }
};

export const check = () => {
  if (!("serviceWorker" in navigator)) {
    console.log("No Service Worker support!");
  }
  if (!("PushManager" in window)) {
    console.log("No Push API Support!");
  }
};

export const displayNotification = async (title, data) => {
  const reg = await navigator.serviceWorker.getRegistration();
  if (reg) {
    reg.showNotification(title, data);
  }
};

export const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== "granted") {
    console.log("Permission not granted for Notification");
  }
};

export const sendMail = (e, to, subject, text) => {
  e.preventDefault();

  axios
    .post(`${API_URL}/email`, {
      to: to,
      subject: subject,
      text: text
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log("An error occurred:", error);
    });
};

const utils = {
  handleStatus: handleStatus,
  check: check,
  displayNotification: displayNotification,
  requestNotificationPermission: requestNotificationPermission,
  sendMail: sendMail
};

export default utils;
