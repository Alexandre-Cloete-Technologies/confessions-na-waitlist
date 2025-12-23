"use server";

import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
export async function addToWaitlist(formData: FormData) {
  const email = formData.get("email") as string;
  const timestamp = new Date().toISOString();

  // Basic validation
  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }
  // TODO: Add your database logic here to save to the 'waitlist' collection
  // Example: await db.collection('waitlist').add({ email, timestamp })
  console.log(`Added to waitlist: ${email} at ${timestamp}`);

  try {
    // 1. Add the email to the 'waitlist' collection
    await addDoc(collection(db, "waitlist"), {
      email: email,
      joinedAt: serverTimestamp(),
      source: "landing_page",
    });

    // 2. Increment the total signups in the stats document
    const statsRef = doc(db, "metadata", "global_stats");
    await updateDoc(statsRef, {
      totalSignups: increment(1),
    });

    return { success: true, message: "You've been added to the waitlist!" };
  } catch (error) {
    console.error("Firebase Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  //   return { success: true, message: "You've been added to the waitlist!" };
}
