export async function POST(request: Request) {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4llP80CCsCfcPU-n4J8fSvWJW3aMXRIqen57RzNTSPtHVwVvLMS7t69-xOmcxrPz2Jg/exec";

  try {
    // Получаем данные из запроса
    const formData = await request.formData();

    // Отправляем в Google Apps Script
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.result === "success") {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false, error: "Ошибка скрипта Google" }, { status: 400 });
    }
  } catch (error) {
    console.error("API Route Error:", error);
    return Response.json({ success: false, error: "Ошибка сервера" }, { status: 500 });
  }
}
