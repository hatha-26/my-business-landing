"use server";

import { userRepository } from "@/server/db/repositories/user.repository";
import { registerSchema, type RegisterInput } from "./schemas";
import bcrypt from "bcryptjs";

type ActionResult<T = void> =
  | { success: true; data: T }
  | { success: false; error: string };

export async function registerUser(
  input: RegisterInput
): Promise<ActionResult<{ email: string }>> {
  // 1. Validasi input
  const parsed = registerSchema.safeParse(input);
  if (!parsed.success) {
    const firstError = Object.values(parsed.error.flatten().fieldErrors)[0];
    return { success: false, error: firstError?.[0] ?? "Input tidak valid" };
  }

  // 2. Cek email sudah terdaftar
  const existing = await userRepository.findByEmail(parsed.data.email);
  if (existing) {
    return { success: false, error: "Email sudah terdaftar" };
  }

  // 3. Hash password
  const hashedPassword = await bcrypt.hash(parsed.data.password, 12);

  // 4. Simpan ke database
  const user = await userRepository.create({
    name: parsed.data.name,
    email: parsed.data.email,
    password: hashedPassword,
  });

  return { success: true, data: { email: user.email } };
}
