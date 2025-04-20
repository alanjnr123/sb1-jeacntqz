import { Resend } from 'npm:resend@3.2.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));
    const { formType, fullName, email, companyName, contactName, businessEmail, phone, message } = await req.json();

    const isIndividual = formType === 'individual';
    const clientName = isIndividual ? fullName : contactName;
    const clientEmail = isIndividual ? email : businessEmail;

    const emailContent = `
New Contact Form Submission

Type: ${formType}
${isIndividual ? `Name: ${fullName}` : `Company: ${companyName}\nContact: ${contactName}`}
Email: ${clientEmail}
Phone: ${phone}
Message: ${message}
    `;

    const { data, error } = await resend.emails.send({
      from: 'Evoke Solutions <contact@evokesolutions.io>',
      to: ['contact@evokesolutions.io'],
      subject: `New Contact Form: ${isIndividual ? fullName : companyName}`,
      text: emailContent,
    });

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
});