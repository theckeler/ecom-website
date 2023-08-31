"use server";

import { cookies } from "next/headers";

export default async function CreateCookie(data) {
	cookies().set({
		name: "acceptCookies",
		value: true,
		//	httpOnly: true,
		path: "/",
	});
}
