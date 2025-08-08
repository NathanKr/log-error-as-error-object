import { UnknownError2ErrorIfRequired } from "./utils";

// --- throw plain string and catch
try {
  throw "A plain string error";
} catch (e) {
  // -- e is unknown
  console.log(e);
}


// --- throw Error object and catch
try {
  throw new Error("An Error error");
} catch (e) {
  // -- e is known
  console.log(e);
}


// --- throw plain string and catch with UnknownError2ErrorIfRequired
try {
  throw "A plain string error with unknown handling";
} catch (e) {
  // -- e is unknown
  const finalError = UnknownError2ErrorIfRequired(e)
  console.log(finalError);
}


// --- log error as string
console.error('log error as string')


// --- log error as an Error object
console.error(new Error('log error as Error object'))
