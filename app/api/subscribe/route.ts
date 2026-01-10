import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER!,
});

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: "subscribed", // or "pending" for double opt-in
        merge_fields: {
          FNAME: name,
        },
      }
    );

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch (error: any) {
    // Already subscribed
    if (error.status === 400) {
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
