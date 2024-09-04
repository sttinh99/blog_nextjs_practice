import React from "react";

export default function AboutLayout({ children }: any) {
  return (
    <div>
      <div>{children}</div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl">You might also like</h2>

        <ul>
          <li>First Blog</li>
          <li>Second Blog</li>
        </ul>
      </div>
    </div>
  );
}
