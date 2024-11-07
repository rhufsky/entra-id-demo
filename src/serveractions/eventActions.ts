"use server";

import {
  createEvent,
  deleteEventById,
  getAllEvents,
  getEventById,
  updateEventById,
} from "@/repository/event";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

/**
 * Retrieves all events.
 *
 * This function calls the `getAllEvents` function to fetch and return all events.
 *
 * @returns {Promise<any>} A promise that resolves to the list of all events.
 */
export async function getAllEventsAction() {
  return await getAllEvents();
}

/**
 * Retrieves an event by its ID.
 *
 * @param {number} id - The unique identifier of the event.
 * @returns {Promise<Event>} A promise that resolves to the event object.
 */
export async function getEventByIdAction(id: number) {
  return await getEventById(id);
}

/**
 * Handles the form submission for creating or updating an event.
 *
 * This function extracts event details from the provided FormData object,
 * constructs an event object, and either creates a new event or updates an
 * existing one based on the presence of an event ID.
 *
 * @param {FormData} formData - The form data containing event details.
 * @returns {Promise<void>} A promise that resolves when the event is created or updated.
 */
export async function formEventAction(formData: FormData) {
  const dateString = formData.get("date") as string;

  const newDate = new Date(dateString);

  const event = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    location: formData.get("location") as string,
    date: newDate,
  };

  const id = formData.get("id") as string | null;

  if (!id) {
    await createEvent(event);
  } else {
    await updateEventById(event, +id);
  }
  revalidatePath("/");
  //  redirect("/");
}

/**
 * Deletes an event by its ID from the repository.
 *
 * @param {number} id - The ID of the event to delete.
 * @returns {Promise<Event | null>} A promise that resolves to the deleted event if found, or null if not found.
 */
export async function deleteEventByIdAction(id: number) {
  const deletedEvent = await deleteEventById(id);
  revalidatePath("/");
  return deletedEvent;
}
