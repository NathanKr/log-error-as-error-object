<h1>Project Name</h1>
Always use Error object in log and throw



<h2>Project Description</h2>
<p>
  This project demonstrates the critical importance of proper error handling in JavaScript and TypeScript. It provides practical examples showing why using the built-in <strong><code>Error</code> object</strong> is superior to using plain strings for both throwing and logging errors. By consistently using <code>Error</code> objects, you can ensure that your applications generate detailed <strong>stack traces</strong>, which are essential for effective debugging and root cause analysis.
</p>

<h2>Motivation</h2>
you have error and you want to log it : should you use string or Error object

two use cases
- inside catch
- outside catch


<h2>Installation</h2>

```bash
pnpm i
```


<h2>Usage</h2>

```bash
pnpm run dev
```


<h2>Technologies Used</h2>
typescript



<h2>Demo</h2>

<h3>throw string and catch</h3>

```ts
try {
  throw "A plain string error";
} catch (e) {
  // -- e is unknown
  console.log(e);
}
```
The result as follows : only the string "A plain string error" appear but no stack trace

<img src='./figs/throw-string.png'/>

<h3>throw Error object and catch</h3>

```ts

try {
  throw new Error("An Error error");
} catch (e) {
  // -- e is known
  console.log(e);
}
```

The result as follows : the string "An Error error" appear and also stack trace so you can see which file (index.ts) and line (9) the error was thrown. Looking at log with stack trace make debugging much simpler


<img src='./figs/throw-error.png'/>

<h3>throw string and catch with unknown handling</h3>

```ts
try {
  throw "A plain string error with unknown handling";
} catch (e) {
  // -- e is unknown
  const finalError = UnknownError2ErrorIfRequired(e)
  console.log(finalError);
}
```

The result as follows : the string "A plain string error with unknown handling" appear and also stack trace so you can see which file (index.ts) and line (26) .However you dont see the throw line because it was on string, instead you see the line where the Error object was create. 

<img src='./figs/throw-string-handle-unknown.png'/>

<h3>log error</h3>

as string - in orange. you see just the string "log error as string"

as Error object in red. you see the string "log error as Error object" with stack trace that includes the file (index.ts) and line (36) where the Error object was created

<img src='./figs/log-error.png'/>

<h2>Key takaways</h2>
<ul>
    <li>Always was Error object in throw and log</li>
    <li>Create Error object from unknown error in catch</li>
   
</ul>

<h2>References</h2>
<ul>
    <li><a href='https://youtu.be/TsDjJ5LuJtc?si=UNB-VVikfH_AHVgU'> using ts-node in a node typescript project setup </a></li>
</ul>

