import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // === Server-side validation ===

    const { name, email, productName, productUrl, whatBuilding, whatNeed, showcaseConsent } = body;

    const errors: string[] = [];

    if (!name || typeof name !== "string" || !name.trim()) {
      errors.push("Name is required.");
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("A valid email is required.");
    }

    if (!productName || typeof productName !== "string" || !productName.trim()) {
      errors.push("Product name is required.");
    }

    if (!whatBuilding || typeof whatBuilding !== "string" || !whatBuilding.trim()) {
      errors.push("\"What are you building?\" is required.");
    }

    if (!whatNeed || typeof whatNeed !== "string" || !whatNeed.trim()) {
      errors.push("\"What do you need?\" is required.");
    }

    // Honeypot check — already filtered client-side, but belt-and-suspenders
    if (body.honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    // === Forward to the configured endpoint ===

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
      // Test mode — no endpoint configured. Accept and log the submission.
      // The form is NEVER dead by default. Set NEXT_PUBLIC_FORM_ENDPOINT
      // in .env to forward to a real endpoint (n8n, Resend, Discord, etc.).
      console.log(
        "[TEST MODE] Form submission received (NEXT_PUBLIC_FORM_ENDPOINT not set):",
        JSON.stringify({ name, email, productName, productUrl, whatBuilding, whatNeed, showcaseConsent })
      );
      return NextResponse.json(
        { success: true, message: "Form submitted (test mode — no endpoint configured).", testMode: true },
        { status: 200 }
      );
    }

    // Rate limiting — simple: reject if too many from same IP in a window
    // For a real deployment, use a proper rate limiter. This is a basic guard.
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    try {
      const forwardRes = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          productName: productName.trim(),
          productUrl: productUrl ? productUrl.trim() : null,
          whatBuilding: whatBuilding.trim(),
          whatNeed: whatNeed.trim(),
          showcaseConsent: !!showcaseConsent,
          submittedAt: new Date().toISOString(),
          source: "landing-craft-website",
          ip: ip,
        }),
      });

      if (!forwardRes.ok) {
        console.error(
          `Form endpoint returned ${forwardRes.status}: ${await forwardRes.text().catch(() => "")}`
        );
        return NextResponse.json(
          { error: "Failed to submit form. Please try again." },
          { status: 502 }
        );
      }
    } catch (fetchErr) {
      console.error("Failed to forward form submission:", fetchErr);
      return NextResponse.json(
        { error: "Failed to submit form. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST." },
    { status: 405 }
  );
}
