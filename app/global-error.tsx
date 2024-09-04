"use client";

export default function GlobalError({ error }: any) {
  return (
    <html>
      <body>
        <div>
          {error}
          <div>error in global error page</div>
        </div>
      </body>
    </html>
  );
}
