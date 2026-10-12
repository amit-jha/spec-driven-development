import { describe, expect, it } from "vitest";
import { checkHealth } from "@/lib/health";

describe("checkHealth", () => {
  it("reports ok when the database responds", async () => {
    const result = await checkHealth(async () => 1);
    expect(result).toEqual({ httpStatus: 200, body: { status: "ok", db: "up" } });
  });

  it("reports an error when the database ping fails", async () => {
    const result = await checkHealth(async () => {
      throw new Error("connection refused");
    });
    expect(result).toEqual({ httpStatus: 503, body: { status: "error", db: "down" } });
  });
});
