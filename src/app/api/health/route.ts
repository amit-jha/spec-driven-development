import { connection } from "next/server";
import { db } from "@/lib/db";
import { checkHealth } from "@/lib/health";

export async function GET() {
  // Always run at request time; never prerender a health check.
  await connection();
  const { httpStatus, body } = await checkHealth(() => db.$queryRaw`SELECT 1`);
  return Response.json(body, { status: httpStatus });
}
