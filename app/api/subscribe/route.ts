import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER!,
});

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Add subscriber to Mailchimp
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: "pending", // "pending" = double opt-in, "subscribed" = no confirmation
        merge_fields: {
          FNAME: firstName || "",
          LNAME: lastName || "",
        },
      }
    );

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("MAILCHIMP ERROR:", error);

    // Optional: log detailed response body for debugging
    if (typeof error === "object" && error !== null && "response" in error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.error("MAILCHIMP RESPONSE BODY:", (error as any).response?.body);
    }

    // Handle already subscribed case
    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      (error as { status: number }).status === 400
    ) {
      return NextResponse.json(
        { message: "You are already subscribed" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Subscription failed" },
      { status: 500 }
    );
  }
}
