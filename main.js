//task 2
const ticketList= document.querySelector("#ticketList");

async function retrieveUnresolvedTickets(userId)
{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        if (!response.ok) {
            throw new Error('Failed to fetch ticket data');
        }
        const tickets = await response.json();
        if (tickets.length === 0) {
            throw new Error('No tickets found.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

