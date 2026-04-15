export async function submitAttendance(formData: FormData) {
  try {
    const response = await fetch("/api/attendance", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Client Error:", error);
    return { success: false, error: "Ошибка сети" };
  }
}
