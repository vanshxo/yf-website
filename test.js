// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import { app } from "./firebaseConfig.js";
const db = getFirestore(app);

// Function to create an event
async function createEvent(eventData) {
  const { eventId, description, date, image, price } = eventData;

  try {
    const eventRef = doc(db, "events", eventId);
    await setDoc(eventRef, {
      eventId,
      description,
      date,
      image,
      price,
    });
    console.log("Event created successfully!");
  } catch (error) {
    console.error("Error creating event:", error);
  }
}

// Function to add a registration
async function addRegistration(eventId, registrationData) {
  const { name, email, contactNum, transactionId } = registrationData;

  try {
    const registrationsRef = collection(db, "events", eventId, "registrations");
    await addDoc(registrationsRef, {
      name,
      email,
      contactNum,
      transactionId,
      timestamp: serverTimestamp(),
    });
    console.log("Registration added successfully!");
  } catch (error) {
    console.error("Error adding registration:", error);
  }
}

// Example: Create an event
createEvent({
  eventId: "event123",
  description: "Music Fest 2024",
  date: new Date("2024-12-15T18:00:00"),
  image: "https://example.com/event123.jpg", // Replace with actual image URL
  price: 499,
});
createEvent({
  eventId: "second",
  description: "test 2",
  date: new Date("2024-12-15T18:00:00"),
  image: "https://example.com/event123.jpg", // Replace with actual image URL
  price: 200,
});
createEvent({
  eventId: "third",
  description: "test 3",
  date: new Date("2024-12-15T18:00:00"),
  image: "https://example.com/event123.jpg", // Replace with actual image URL
  price: 200,
});
createEvent({
  eventId: "FOURTH",
  description: "test 4",
  date: new Date("2024-12-15T18:00:00"),
  image: "https://example.com/event123.jpg", // Replace with actual image URL
  price: 1,
});



// Example: Add a registration
addRegistration("event123", {
  name: "John Doe",
  email: "john@example.com",
  contactNum: "9876543210",
  transactionId: "txn_abc123",
});
