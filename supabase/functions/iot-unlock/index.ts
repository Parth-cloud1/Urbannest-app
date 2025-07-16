import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const { booking_id, device_id } = await req.json();

  console.log(`LOCK OPENED: booking_id=${booking_id}, device_id=${device_id}`);

  return new Response(
    JSON.stringify({ success: true, message: 'Lock opened (mock)' }),
    { headers: { "Content-Type": "application/json" } }
  );
});
