import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";

function handleClick(event) {
  useRouter().back();
}

export default function ActiveLastBreadcrumb({ title }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white" }}>
        <Link underline="hover" color="white" href="/">
          Home
        </Link>
        <Link underline="hover" color="white" href="/apartment/">
          Apartments
        </Link>
        <Link
          underline="hover"
          color="white"
          href={`/apartment/${title}`}
          aria-current="page"
        >
          {title}
        </Link>
      </Breadcrumbs>
    </div>
  );
}
