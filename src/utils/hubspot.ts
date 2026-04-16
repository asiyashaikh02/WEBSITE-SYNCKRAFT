export const submitToHubspot = async (
  firstname: string,
  email: string,
  phone: string,
  leadSource: string,
  extraData: Record<string, string>
) => {
  const painPoint = Object.entries(extraData)
    .filter(([_, value]) => value && value.trim() !== '')
    .map(([key, value]) => {
      const formattedKey = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
      return `${formattedKey}: ${value}`;
    })
    .join('\n');

  const payload = {
    fields: [
      { name: 'firstname', value: firstname },
      { name: 'email', value: email },
      { name: 'phone', value: phone },
      { name: 'lead_source', value: leadSource },
      { name: 'pain_point', value: painPoint }
    ]
  };

  try {
    const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/245886634/abee8a62-74da-40b5-9e0f-64e240d62d2d', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error('HubSpot Error:', await response.text());
    }
  } catch (error) {
    console.error('HubSpot Request Failed:', error);
  }
};
