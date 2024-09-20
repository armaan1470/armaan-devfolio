import React from "react";
import RootLayout from "./layout";
import Home from "./home/page";
import { redirect } from "next/navigation";

function RootPage() {
  redirect("/home");
}

export default RootPage;
