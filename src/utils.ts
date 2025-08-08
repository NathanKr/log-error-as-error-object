/**
 * Ensures that a value is an instance of Error.
 * If the value is not an Error, it is wrapped in a new Error object.
 * This is useful for `catch` blocks that might receive non-Error values.
 */
export const UnknownError2ErrorIfRequired = (error: unknown): Error => {
  return error instanceof Error ? error : new Error(String(error));
};