export async function POST(req: Request) {
  // Mock API implementation to prevent build errors on Vercel
  // Since you don't want to use Resend, this accepts the request from the Contact form
  // and simply returns a success JSON. The form UI will show that it successfully "sent",
  // without needing any API keys.
  return Response.json({ success: true, id: "mock_id_12345" });
}
