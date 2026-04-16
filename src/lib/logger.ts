type LogLevel = "ERROR" | "WARN" | "INFO" | "DEBUG";

function formatLog(level: LogLevel, message: string): string {
  return `[${new Date().toISOString()}] [${level}] ${message}`;
}

function toMessage(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (value instanceof Error) {
    return value.message;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

const logger = {
  error(message: unknown, ...meta: unknown[]): void {
    console.error(formatLog("ERROR", toMessage(message)), ...meta);
  },

  warn(message: unknown, ...meta: unknown[]): void {
    console.warn(formatLog("WARN", toMessage(message)), ...meta);
  },

  info(message: unknown, ...meta: unknown[]): void {
    if (import.meta.env.PROD) {
      return;
    }
    console.info(formatLog("INFO", toMessage(message)), ...meta);
  },

  debug(message: unknown, ...meta: unknown[]): void {
    if (import.meta.env.PROD) {
      return;
    }
    console.debug(formatLog("DEBUG", toMessage(message)), ...meta);
  },
};

export default logger;
