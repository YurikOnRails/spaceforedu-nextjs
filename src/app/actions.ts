"use server";

import { z } from "zod";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const FormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(6, "Введите корректный номер телефона"),
  message: z.string().optional(),
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    phone?: string[];
    message?: string[];
  };
};

export async function sendTelegramMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  // 1. Validate data
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Ошибка валидации. Проверьте поля.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone, message } = validatedFields.data;

  // 2. Format message for Telegram
  const text = `
🚀 *Новая заявка с сайта!*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📝 *Сообщение:*
${message || "Без комментария"}

📅 _${new Date().toLocaleString("ru-RU")}_
`;

  // 3. Check environment variables
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Telegram credentials missing");
    // In production, you might want to log this but show a generic error to user
    return {
      success: false,
      message: "Ошибка сервера: не настроен Telegram бот.",
    };
  }

  // 4. Send to Telegram API
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Telegram API Error: ${response.status} ${response.statusText}`, errorText);
      throw new Error(`Telegram API Error: ${response.status} ${errorText}`);
    }

    return {
      success: true,
      message: "Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
    };
  } catch (error) {
    console.error("Failed to send telegram message:", error);
    
    // Check if it's a connection error (common in some environments)
    if (error instanceof Error && (error.message.includes("fetch failed") || error.message.includes("ETIMEDOUT"))) {
       console.warn("Network error connecting to Telegram. If you are in a restricted environment, this is expected.");
    }

    return {
      success: false,
      message: "Не удалось отправить заявку. Пожалуйста, напишите нам в WhatsApp или позвоните.",
    };
  }
}
