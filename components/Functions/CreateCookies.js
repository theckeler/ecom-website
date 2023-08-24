"use server";

import { cookies } from "next/headers";

export default async function CreateCookie(data) {
	console.log("createCookie");

	cookies().set({
		name: "acceptCookies",
		value: true,
		//	httpOnly: true,
		path: "/",
	});
}
