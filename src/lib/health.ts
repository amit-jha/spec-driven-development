export type HealthBody = { status: "ok"; db: "up" } | { status: "error"; db: "down" };

export type HealthResult = { httpStatus: 200 | 503; body: HealthBody };

/** Runs the given database ping and maps the outcome to a health response. */
export async function checkHealth(pingDatabase: () => Promise<unknown>): Promise<HealthResult> {
  try {
    await pingDatabase();
    return { httpStatus: 200, body: { status: "ok", db: "up" } };
  } catch {
    return { httpStatus: 503, body: { status: "error", db: "down" } };
  }
}
