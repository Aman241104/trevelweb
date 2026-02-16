export const generateWhatsAppLink = (data: {
    name: string;
    destination: string;
    date: string;
}) => {
    const phone = "918511071506"; // Sujal's Number
    const message = `Hi Sujal! I'm ${data.name}. 
I'm interested in a trip to *${data.destination}* around *${data.date}*. 
Can you help me plan this?`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
